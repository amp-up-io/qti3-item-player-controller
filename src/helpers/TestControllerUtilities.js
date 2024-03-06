import { TestFactory } from '@/helpers/TestFactory'
import { ItemFactory } from '@/helpers/ItemFactory'

export class TestControllerUtilities {

  testFactory = null

  itemFactory = null
  /*
   * This is our list of items, item XML, item GUID's
   */
  items = null
  /*
   * Save/Restore a candidate's item state here
   */
  itemStates = null
  /*
   * Object used to store the item identifier and index when navigating
   * on a nonlinear test.  Structure is:
   * {
   *   index: <index of the item in the Section Item Identifiers array>,
   *   identifier: <an Item Identifier; e.g., "g6-item-2">
   * }
   */
  navigateItemData = null

  constructor () {
    this.testFactory = new TestFactory()
    this.itemFactory = new ItemFactory()
    return this
  }

  getTestById (id) {
    return this.testFactory.getById(id)
  }

  loadItems (testItemList) {
    this.items = this.itemFactory.loadItems(testItemList)
  }

  loadAllItems () {
    this.items = this.itemFactory.loadAll()
  }

  getNavigateItemData () {
    return this.navigateItemData
  }

  setNavigateItemData (data) {
    this.navigateItemData = data
  }

  getItems () {
    return this.items
  }

  setItems (items) {
    this.items = items
  }

  getItemAtIndex (index) {
    return this.items[index]
  }

  getItemByIdentifier (identifier) {
    const itemIndex = this.items.findIndex(item => item.identifier === identifier)
    if (itemIndex < 0) return null
    return this.items[itemIndex]
  }

  getItemStates () {
    return this.itemStates
  }

  setItemStates (itemStates) {
    this.itemStates = itemStates
  }

  getItemStateByGuid (guid) {
    return this.itemStates.get(guid)
  }

  isItemNullResponse (state) {
    if (!this.isItemStateDefined(state)) return true
    if (state === null) return true

    for (let i=0; i < state.responseVariables.length; i++) {
      // Skip built-in responseVariables
      if ((state.responseVariables[i].identifier === 'duration') ||
          (state.responseVariables[i].identifier === 'numAttempts')) {
        continue
      }

      if (state.responseVariables[i].value !== null) return false
    }

    return true
  }

  isItemStateDefined (state) {
    if (typeof state === 'undefined') return false
    return true
  }

  computeSummary (testId, testItems, testTitle) {
    let s = ''
    let sr = ''
    let unanswered = false

    if ((testId === null) || (testItems === null)) 
      return {
        summary: s,
        scorereportrow: sr,
        unanswered: unanswered
      }

    sr += this.computeHeadingReportRow(testTitle, testId)

    testItems.forEach((testItem, index) => {
      const item = this.getItemByIdentifier(testItem.identifier)
      const guid = item.guid
      const state = this.getItemStateByGuid(guid)

      s += `<button type="button" data-identifier="${testItem.identifier}" data-index="${index}"
              class="btn btn-outline-secondary btn-sm position-relative rounded btn-item-review">${index+1}`
      
      if (this.isItemNullResponse(state)) {
        unanswered = true

        s += `<span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                <span class="visually-hidden">unanswered</span>
              </span>`
      }

      s += `</button>`

    }, this)

    return {
      summary: s,
      scorereportrow: sr,
      unanswered: unanswered
    }
  }

  computeHeadingReportRow (testTitle, testId) {
    return `<tr><th colspan="2" class="report-label-cell section-heading-cell"
      data-test-identifier="${testId}"><strong>${testTitle}</strong></th>
      </tr>`
  }

  computePartSummary (testPart, callback) {
    let s = ''
    let sr = ''

    if (testPart === null)
      callback({
        summary: s,
        scorereport: sr,
        unanswered: false
      })

    const part = this.computePartProperties(testPart)

    let hasAnySectionUnansweredItems = false

    part.sections.forEach((section, index) => {
      const sectionProperties = this.computeSectionProperties(section)

      s += `<button type="button" data-identifier="${sectionProperties.identifier}" data-index="${index}"
      class="btn btn-outline-secondary btn-sm position-relative rounded btn-section-review mt-4 mb-2">`

      s += `<h5 class="my-0">${sectionProperties.title}</h5>`

      s += '</button>'
      s += '<div class="d-flex flex-wrap gap-3 mb-0">'

      const sectionSummary = 
          this.computeSectionSummary(
            sectionProperties.identifier,
            sectionProperties.sectionItemIdentifiers,
            sectionProperties.title,
            true
          )

      s += sectionSummary.summary
      s += '</div>'

      if (sectionSummary.unanswered) hasAnySectionUnansweredItems = true

      sr += sectionSummary.scorereportrow

    }, this)

    sr = `<table class="table table-sm">${sr}</table>`

    callback({
      summary: s,
      scorereport: sr,
      unanswered: hasAnySectionUnansweredItems
    })
  }

  getItemStateTrackingGuid (sectionIdentifier, itemIdentifier) {
    return `${sectionIdentifier}~~${itemIdentifier}`
  }

  async initiatePartItemScoring (testPart) {
    // Generate a Part Scoring Request
    const partScoringRequest = await this.generatePartScoringRequest(testPart)
    this.setPartScoringRequest(partScoringRequest)
    return this.scoreNextScoringRequestItem(partScoringRequest)
  }

  scoreNextScoringRequestItem (partScoringRequest) {
    const partItemXmlMap = partScoringRequest.partItemXml
    const partItemStatesMap = partScoringRequest.partItemStates

    // No items to be scored...
    if (partItemXmlMap.size === 0) return true

    const item = partItemXmlMap.entries().next().value
    const itemState = partItemStatesMap.get(item[0])

    const configuration = {
      state: itemState,
      guid: item[0]
    }
 
    this.getItemPlayer().loadItemFromXmlForScoring(item[1], configuration)
    return false
  }

  /**
   * @description For the given Test Part, save the results of an Item scoreAttempt
   * call provided in the itemState parameter, then   
   * @param {*} testPart 
   * @param {*} itemState
   * @param {Function} renderTestPartSummary
   * @returns 
   */
  evaluatePartScoringRequestResults (testPart, itemState, renderTestPartSummary) {
    const part = this.computePartProperties(testPart)

    const guid = itemState.state.guid
    // Section identifier is first element of the guid
    const sectionIdentifier = guid.split('~~')[0]

    // Save our state
    this.setTestStateItemState(
        part.identifier,
        sectionIdentifier,
        itemState.state.identifier,
        itemState.state)

    const partScoringRequest = this.getPartScoringRequest()
    const partItemXmlMap = partScoringRequest.partItemXml
    const itemXml = partItemXmlMap.get(itemState.state.guid)

    // Should never happen
    if (typeof itemXml === 'undefined') return

    // Delete the key from the partItemXmlMap
    partItemXmlMap.delete(itemState.state.guid)

    partScoringRequest.partItemXml = partItemXmlMap
    this.setPartScoringRequest(partScoringRequest)

    // Score the Next Item in the Scoring Request
    const partScoringComplete = 
      this.scoreNextScoringRequestItem(partScoringRequest)

    if (partScoringComplete) {

      // If submission mode is 'simultaneous', initiate a Test endAttempt
      if (!this.isSubmissionModeIndividual(part.submissionMode))
        this.initiateTestEndAttempt('endPart')
      else
        this.computePartSummary(
          testPart, 
          renderTestPartSummary)
      
    }
  }

  /**
   * @description Build a request and send it to the ItemPlayer.
   * @param {*} testPart 
   * @returns 
   */
  async generatePartScoringRequest (testPart) {
    const part = this.computePartProperties(testPart)
    const partItemStatesMap = this.getPartSectionItemStatesMap(part)
    const partItemXmlMap = await this.getSectionItemXmlMap(partItemStatesMap)

    return {
      partItemStates: partItemStatesMap,
      partItemXml: partItemXmlMap
    }
  }

  getPartSectionItemStatesMap (part) {
    const partItemStatesMap = new Map()

    part.sections.forEach((section) => {
      const sectionProperties = this.computeSectionProperties(section)

      // Get all of the item states for this section
      const sectionItemStatesMap = 
        this.getSectionItemStatesMap(
          sectionProperties.identifier,
          sectionProperties.sectionItemIdentifiers)
      
      // Add all of the item states for this section
      // to the overall Part item states map.
      for (let [sectionItemIdentifier, state] of sectionItemStatesMap) {
        partItemStatesMap.set(sectionItemIdentifier, state)
      }

    }, this)

    return partItemStatesMap
  }

  async getSectionItemXmlMap (partItemStatesMap) {
    const sectionItemXmlMap = new Map()

    for (let sectionItemIdentifier of partItemStatesMap.keys()) {
      const identifiers = sectionItemIdentifier.split('~~')
      // Item identifier is second element
      const itemIdentifier = identifiers[1]

      // Get the item's XML from the itemFactory
      const itemFlavorRequest = await this.itemFactory.getItemFlavorXml(itemIdentifier, '1')
    
      // Should always return some XML, but check anyway
      const xml = (itemFlavorRequest.status === 200 ? itemFlavorRequest.data : null)
      sectionItemXmlMap.set(sectionItemIdentifier, xml)
    }

    return sectionItemXmlMap
  }

  hasSectionUnansweredItems (sectionIdentifier, sectionItemIdentifiers) {
    for (let i=0; i<sectionItemIdentifiers.length; i++) {

      // Find an item state
      const state = 
        this.getTestStateItemState(
          this.getItemStateTrackingGuid(
            sectionIdentifier,
            sectionItemIdentifiers[i])
          )

      // Bail if no item state or item state has all null responses
      if (this.isItemNullResponse(state)) return true

    }

    return false
  }

  /**
   * @description Get all Item States for the Section identified by sectionIdentifier
   * @param {*} sectionIdentifier 
   * @param {*} sectionItemIdentifiers 
   * @returns {Map} - HashMap of all defined Item States in this section
   */
  getSectionItemStatesMap (sectionIdentifier, sectionItemIdentifiers) {
    let itemStatesMap = new Map()

    sectionItemIdentifiers.forEach((itemIdentifier) => {
      const guid = this.getItemStateTrackingGuid(sectionIdentifier, itemIdentifier)
      const state = this.getTestStateItemState(guid)

      // Only add defined states to the states map
      if (this.isItemStateDefined(state))
        itemStatesMap.set(guid, state)

    }, this)

    return itemStatesMap
  }

  async loadItem (sectionIdentifier, itemIdentifier) {
    const itemStateTrackingGuid = this.getItemStateTrackingGuid(sectionIdentifier, itemIdentifier)
    const configuration = this.getItemConfiguration(itemStateTrackingGuid)

    if (configuration === null) return false

    const loadResult = await this.loadItemAtIndex(itemIdentifier, configuration)
    return loadResult
  }

  async loadItemAtIndex (itemIdentifier, configuration) {
    let itemFlavorRequest = await this.itemFactory.getItemFlavorXml(itemIdentifier, '1')
    
    if (itemFlavorRequest.status === 200) {
      this.getItemPlayer().loadItemFromXml(itemFlavorRequest.data, configuration)
      return true
    }

    return false
  }

  getScoreValue (state) {
    let index = state.outcomeVariables.findIndex(ov => ov.identifier === 'SCORE')
    return (index < 0 ? null : state.outcomeVariables[index].value)
  }
  

  getItemConfiguration (guid) {
    const configuration = {}

    // Fetch prior state from Test State
    const state = 
      this.TC.getTestStateItemState(guid)

    if (typeof state === 'undefined') return null
    
    configuration.state = state

    // IMPORTANT: Stamp the item's tracking guid onto the configuration
    configuration.guid = guid

    return configuration
  }

}
