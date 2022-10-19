<template>
  <section>
    <SkipNav skipid="#main" />
    <header>
      <TopBar
        ref="topbar"
      />
    </header>

    <!-- Item Canvas -->
    <main id="main" class="test-controller-container container-fluid">
      <div class="test-controller-content">
        <h1 class="visually-hidden">Item {{currentItem+1}} of {{maxItems}}</h1>

        <Qti3Player
          ref="qti3player"
          :container-class="containerClass"
          :container-padding-class="containerPaddingClass"
          :color-class="colorClass"
          suppress-alert-messages
          suppress-invalid-response-messages
          @notifyQti3PlayerReady="handlePlayerReady"
          @notifyQti3ItemReady="handleItemReady"
          @notifyQti3SuspendAttemptCompleted="handleSuspendAttemptCompleted"
          @notifyQti3EndAttemptCompleted="handleEndAttemptCompleted"
          @notifyQti3ItemAlertEvent="displayItemAlertEvent"
          @notifyQti3ItemCatalogEvent="handleItemCatalogEvent"
        />

      </div>
    </main>

    <footer class="navbar bg-dark navbar-top-shadow">
      <BottomBar
        ref="bottombar"
        :is-previous-disabled="isBtnPreviousDisabled"
        :is-next-disabled="isBtnNextDisabled"
        :current-item="currentItem"
        :max-items="maxItems"
        @previousItem="handlePrevItem"
        @nextItem="handleNextItem"
      />
    </footer>

    <SettingsPanel
      @menuColorClick="handleMenuColorClick"
      @menuContainerClick="handleMenuContainerClick"
      @menuContainerPaddingClick="handleMenuContainerPaddingClick"
      @menuPnpChange="handlePnpChange"
    />
  </section>
</template>

<script>
import TopBar from '@/components/TopBar'
import BottomBar from '@/components/BottomBar'
import SkipNav from '@/components/SkipNav'
import SettingsPanel from '@/components/SettingsPanel'
import { TestFactory } from '@/helpers/TestFactory'
import { ItemFactory } from '@/helpers/ItemFactory'
import { PnpFactory } from '@/helpers/PnpFactory'
import { SessionControlFactory } from '@/helpers/SessionControlFactory'

// The Qti3Player component and built-in CSS
import Qti3Player from 'qti3-item-player'
import 'qti3-item-player/dist/qti3Player.css'

// For displaying our own Toasts/Alerts
import Swal from 'sweetalert2'

export default {
  name: 'Test',

  components: {
    Qti3Player,
    TopBar,
    BottomBar,
    SettingsPanel,
    SkipNav
  },

  data () {
    return {
      test: null,
      id: null,
      /* ===========================================================
       * Various app state variables to manage the Test Runner's UI.
       * =========================================================== */
      isBtnPreviousDisabled: true,
      isBtnNextDisabled: true,
      currentItem: -1,
      maxItems: 0,
      /*
       * Qti3Player component instance
       */
      qti3Player: null,
      /*
       * Save/Restore a candidate's item state here
       */
      itemStates: null,
      /*
       * This is our list of items, item XML, item GUID's
       */
      items: null,
      /*
       * From the set of:
       *   qti3-player-container-fluid ***DEFAULT***
       *   qti3-player-container
       */
      containerClass: 'qti3-player-container-fluid',
      /*
       * From the set of:
       *   qti3-player-color-default ***DEFAULT***
       *   qti3-player-color-defaultreverse (Default - Reverse Polarity)
       *   qti3-player-color-blackwhite (High Contrast)
       *   qti3-player-color-whiteblack (High Contrast - Reverse Polarity)
       *   qti3-player-color-blackrose
       *   qti3-player-color-roseblack
       *   qti3-player-color-yellowblue
       *   qti3-player-color-blueyellow
       *   qti3-player-color-dgraymgray
       *   qti3-player-color-mgraydgray
       *   qti3-player-color-blackcyan
       *   qti3-player-color-cyanblack
       *   qti3-player-color-blackcream
       *   qti3-player-color-creamblack
       */
      colorClass: 'qti3-player-color-default',
      /*
       * From the set of:
       *   qti3-player-container-padding-0 { padding: 0; } ***DEFAULT***
       *   qti3-player-container-padding-1 { padding: 0.25rem; }
       *   qti3-player-container-padding-2 { padding: 0.5rem; }
       *   qti3-player-container-padding-3 { padding: 1rem; }
       *   qti3-player-container-padding-4 { padding: 1.5rem; }
       *   qti3-player-container-padding-5 { padding: 3rem; }
       */
      containerPaddingClass: 'qti3-player-container-padding-2',
      /*
       * Test's Item Session Control Factory
       */
      sessionControl: null,
      /*
       * Test's Pnp Factory
       */
      pnp: null,
      /*
       * From the set of: { 'individual' | 'simultaneous' }
       * This is used to tell the Qti3Player whether or not
       * we want to run response processing when we navigate
       * away from an item.
       * 'individual' --> invoke Qti3Player's endAttempt method
       * 'simultaneous' --> invoke Qti3Player's suspendAttempt method
       */
      testSubmissionMode: 'simultaneous',
      /*
       * An item can override submission mode
       */
      itemSubmissionMode: null
    }
  },

  methods: {

    initialize (id) {
      // Find the test
      this.test = new TestFactory().getById(id)

      // If we can't find a test, disable the UI.
      // @TODO Show a 404 page?
      if (this.test === undefined) {
        this.isBtnPreviousDisabled = true
        this.isBtnNextDisabled = true
        this.currentItem = -1
        this.maxItems = 0
        return
      }

      // Found a test.
      this.currentItem = 0
      this.maxItems = this.test.count*1
      // Get items in this test.  Pass the list of identifiers.
      this.items = new ItemFactory().loadItems(this.test.items)
      // Load pnp
      this.pnp = new PnpFactory()
      // Load sessionControl
      this.sessionControl = new SessionControlFactory()
      // Initialize item state hashmap
      this.itemStates = new Map()
      // Load the first item!
      this.loadItemAtIndex(this.currentItem)
      this.updateButtonState()
    },

    handleNextItem () {
      console.log('[Controller][NextItem][' + this.currentItem + ']')

      this.toggleButtonDisabled('next', true)
      this.initiateNavigateNextItem()
    },

    handlePrevItem () {
      console.log('[Controller][PrevItem][' + this.currentItem + ']')
      if (this.currentItem === 0) return

      this.toggleButtonDisabled ('prev', true)
      this.initiateNavigatePrevItem()
    },

    initiateNavigateNextItem () {
      if (this.isSubmissionModeIndividual())
        this.qti3Player.endAttempt('navigateNextItem')
      else
        this.qti3Player.suspendAttempt('navigateNextItem')
    },

    navigateNextItem (state) {
      console.log('[NavigateNextItem]', state)
      this.currentItem += 1
      this.loadItemAtIndex(this.currentItem)
      this.updateButtonState()
    },

    initiateNavigatePrevItem () {
      if (this.isSubmissionModeIndividual())
        this.qti3Player.endAttempt('navigatePrevItem')
      else
        this.qti3Player.suspendAttempt('navigatePrevItem')
    },

    navigatePrevItem (state) {
      console.log('[NavigatePrevItem]', state)
      this.currentItem -= 1
      this.loadItemAtIndex(this.currentItem)
      this.updateButtonState()
    },

    isSubmissionModeIndividual () {
      return this.itemSubmissionMode === 'individual'
    },

    handleEndAttemptCompleted (data) {
      console.log('[EndAttemptCompleted]', data)
      this.evaluateResults(data)
    },

    handleSuspendAttemptCompleted (data) {
      console.log('[SuspendAttemptCompleted]', data)
      this.evaluateResults(data)
    },

    evaluateResults (data) {
      // Save our state
      this.setTestStateItemState(data.state)
      // Perform next action
      this.next(data)
    },

    next (data) {
      switch (data.target) {
        case 'navigateNextItem':
          if (this.isInvalidResponses(data.state.validationMessages, 'next')) return
          this.navigateNextItem()
          break

        case 'navigatePrevItem':
          if (this.isInvalidResponses(data.state.validationMessages, 'prev')) return
          this.navigatePrevItem()
          break

        default:
          // Unknown action --> NOOP
      }
    },

    loadFirstItem () {
      this.loadItemAtIndex(0)
    },

    loadItemAtIndex (index) {
      if (index === null) return
      if ((index < 0) || (index > this.maxItems-1)) return

      // Set current item submission mode
      this.itemSubmissionMode = this.computeItemSubmissionMode(this.items[index])

      // Update sessionControl with item/test properties
      this.sessionControl.setValidateResponses(this.items[index].sessionControl.validateResponses)
      this.sessionControl.setShowFeedback(this.items[index].sessionControl.showFeedback)

      // Build a configuration
      const configuration = this.getConfiguration(this.items[index].guid)

      // Load the item with the configuration
      this.qti3Player.loadItemFromXml(this.items[index].xml, configuration)
    },

    computeItemSubmissionMode (itemObject) {
      if ('sessionControl' in itemObject) return itemObject.sessionControl.submissionMode
      return this.testSubmissionMode
    },

    setTestStateItemState (state) {
      this.itemStates.set(state.guid, state)
    },

    getTestStateItemState (guid) {
      return this.itemStates.get(guid)
    },

    getConfiguration (guid) {
      const configuration = {}

      // Fetch prior state from Test State
      const state = this.getTestStateItemState(guid)
      if (typeof state !== 'undefined') configuration.state = state

      // IMPORTANT: Stamp the item's tracking guid onto the configuration
      configuration.guid = guid
      configuration.pnp = this.pnp.getPnp()
      configuration.sessionControl = this.sessionControl.getSessionControl()

      return configuration
    },

    updateButtonState () {
      this.updateNextButtonState(this.currentItem)
      this.updatePrevButtonState(this.currentItem)
    },

    updateNextButtonState (currentItem) {
      if (currentItem + 1 === this.maxItems) {
        this.isBtnNextDisabled = true
        return
      }
      this.isBtnNextDisabled = false
    },

    updatePrevButtonState (currentItem) {
      if (currentItem > 0) {
        this.isBtnPreviousDisabled = false
        return
      }
      this.isBtnPreviousDisabled = true
    },

    toggleButtonDisabled (buttonRef, disable) {
      if (buttonRef === 'next') {
        this.isBtnNextDisabled = disable
        return
      }
      if (buttonRef === 'prev') this.isBtnPreviousDisabled = disable
    },

    /**
     * @description Handle color click events from the Settings menu.
     * Side effect: sets the PNP when a color setting is clicked.
     * @param {String} colorClass - the menu setting that was clicked.
     */
    handleMenuColorClick (colorClass) {
      if (colorClass === null) return
      // Update UI immediately
      this.qti3Player.cssColorClass = this.colorClass = colorClass
      // Set pnp to this textAppearance color style
      this.pnp.setColorStyle(colorClass)
    },

    /**
     * @description Handle container click events from the Settings menu.
     * @param {String} containerClass - the menu setting that was clicked.
     */
    handleMenuContainerClick (containerClass) {
      if (containerClass === null) return
      // Update UI immediately
      this.qti3Player.cssContainerClass = this.containerClass = containerClass
    },

    /**
     * @description Handle container padding click events from the Settings menu.
     * @param {String} containerPaddingClass - the menu setting that was clicked.
     */
    handleMenuContainerPaddingClick (containerPaddingClass) {
      if (containerPaddingClass === null) return
      this.qti3Player.cssContainerPaddingClass = this.containerPaddingClass = containerPaddingClass
    },

    /**
     * @description Handle ad-hoc pnp support click events from the
     * Settings menu component.
     * @param {String} pnpEvent - examples:
     *                            'glossary-off', // turn off glossary
     *                            'ktlang:es', // turn on Spanish translations
     *                            'sbacGlossaryIllustration-on'
     */
    handlePnpChange (pnpEvent) {
      // The evaluatePnpEvent method returns true if we can
      // identify the event AND the event causes a change in
      // the current Pnp that should trigger a catalog rebind.
      if (!this.pnp.evaluatePnpEvent(pnpEvent)) return
      // 1) Set the QTI3 Player pnp with our updated pnp.
      this.qti3Player.setItemContextPnp(this.pnp.getPnp())
      // 2) Force QTI3 Player to bind the Catalog.
      this.qti3Player.bindCatalog()
    },

    /**
     * @description Display any messages in the validationMessages array.
     * Side effect: disable the appropriate navigation button.
     * @param {Array} validationMessages
     * @param {String} navigationDirection - 'next' | 'prev'
     * @return {Boolean} true if there are validationMessage, false if not
     */
    isInvalidResponses (validationMessages, navigationDirection) {
      if (!this.sessionControl.getValidateResponses()) return false
      if (validationMessages.length === 0) return false
      // Disable whichever nav button got us here
      this.toggleButtonDisabled (navigationDirection, false)
      // Display validation messages
      this.displayInvalidResponseMessages(validationMessages)
      return true
    },

    /**
     * @description Handler for QTI item messages such as max selections messages.
     * @param {Object} event - object containing an icon property and a message property
     */
    displayItemAlertEvent (event) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: event.icon,
        html: event.message,
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true
      })
    },

    /**
     * @description Display response validation messages if validateResponses=true.
     * @param {Array} messages - messages to be displayed
     */
    displayInvalidResponseMessages (messages) {
      messages.forEach((message) => {
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            html: message.message,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3000,
            timerProgressBar: true
          })
      })
    },

    /**
     * @description Handler for QTI item catalog events such as 'glossary' events.
     * @param {Object} event - object containing a catalog event payload
     * Sample event schema:
     * {
     *   type: "glossary",
     *   term: "acronym",
     *   catalogIdRef: "glosscat",
     *   data: [
     *     {
     *       support: "glossary-on-screen",
     *       card: {
     *         content: ""<p>An abbreviation.</p>"",
     *         properties: {
     *           name: "qti-html-content"
     *         }
     *       }
     *     }
     *     ... additional supports in catalog based on PNP ...
     *   ]
     * }
     */
    handleItemCatalogEvent (event) {
      console.log('[ItemCatalogEvent][Type: ' + event.type + ']', event)
    },

    /**
     * @description Event handler for the QTI3Player component's 'notifyQti3PlayerReady'
     * event.  This event is fired upon mounting of the Qti3Player component.
     *
     * The Qti3Player is now ready for XML loading.
     * @param {Component} qti3Player - the Qti3Player component itself
     */
    handlePlayerReady (qti3Player) {
      this.qti3Player = qti3Player
    },

    /**
     * @description Event handler for the QTI3Player component's 'notifyQti3ItemReady'
     * event.  This event is fired upon completion of the qti-assessment-item
     * component's loading of XML.
     */
    handleItemReady () {
      // NOOP
    }

  },

  created () {
  },

  mounted () {
    this.initialize(this.$route.params.id)
  }
}
</script>

<style>
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  --blue: #3d8ef8;
  --indigo: #564ab1;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #fb4d53;
  --orange: #f1734f;
  --yellow: #f1b44c;
  --green: #11c46e;
  --teal: #008080;
  --cyan: #0db4d6;
  --rose: #ffd0ff;
  --white: #fff;
  --gray: #7c8a96;
  --gray-dark: #343a40;
  --primary: #3d8ef8;
  --success: #11c46e;
  --info: #0db4d6;
  --warning: #f1b44c;
  --danger: #fb4d53;
  --light: #eff2f7;
  --dark: #343a40;
  --darker: #212529;
  --black: #000;
}

body {
  margin: 0;
  padding: 0;
}

section {
  display: -webkit-flex;
  display: flex;
  /* Set flex axis to vertical */
  flex-direction: column;
  /* Height = viewport height */
  min-height: 100vh;
  background: var(--bs-gray-300);
}

header {
  /* no flex rules, it will grow */
}

main.test-controller-container {
  flex: 1 1 auto;
  overflow: auto;
  height: 5em;
  width: 100%;
}

/* Inner item panel */
.test-controller-content {
  margin: 10px 0;
  background: var(--bs-gray-300);
  /*border: 1px solid #2196F3; */
}

footer {
  padding: 1em;
  /* Make sure the foot always displays at bottom of the viewport */
  min-height: 3em;
}
</style>
