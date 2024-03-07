<template>
  <section>
    <SkipNav skipid="#main" />
    <header>
      <TopBarSandbox
        ref="topbar"
      />
    </header>

    <main id="main" class="test-controller-container container-fluid">

      <div class="test-controller-content">

        <div class="row">

          <div class="col-sm-4">
            <div class="card sandbox-raised-panel">
              
              <div class="card-body">
                <h2 class="sandbox-item-xml-heading">Item XML</h2>
                <textarea
                  v-model="itemXml"
                  placeholder="Enter QTI 3 Item XML here.  The results will be rendered in QTI 3 Item Player to the right."
                  class="form-control sandbox-item-xml-textarea"
                  rows="15"
                  autocomplete="off" 
                  autocorrect="off" 
                  autocapitalize="off" 
                  spellcheck="false"></textarea>
              </div>
            </div>
          </div>

          <div class="col-sm-8">

            <div class="card">
              <div class="card-body sandbox-item-canvas">
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
              <div class="card-footer">
                <button 
                  ref="endattempt"
                  class="btn btn-sm btn-outline-primary waves-effect waves-light" 
                  @click.prevent="handleEndAttemptClick" 
                  title="End the Attempt and run Response Processing">
                  End Attempt
                </button>
                <button 
                  v-if="hasTemplateProcessing"
                  ref="newtemplate"
                  class="ms-2 btn btn-sm btn-outline-secondary waves-effect waves-light" 
                  @click.prevent="handleNewTemplateClick" 
                  title="Run Template Processing">
                  New Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

    <SettingsPanel
      @menuColorClick="handleMenuColorClick"
      @menuContainerClick="handleMenuContainerClick"
      @menuContainerPaddingClick="handleMenuContainerPaddingClick"
      @menuPnpChange="handlePnpChange"
    />

    <SamplesPanel
      @menuItemSelectedClick="handleItemSampleSelected"
    />
  </section>
</template>

<script>
import TopBarSandbox from '@/components/TopBarSandbox'
import SkipNav from '@/components/SkipNav'
import SettingsPanel from '@/components/SettingsPanel'
import SamplesPanel from '@/components/SamplesPanel'
import { PnpFactory } from '@/helpers/PnpFactory'
import { SessionControlFactory } from '@/helpers/SessionControlFactory'
import { TestControllerUtilities } from '@/helpers/TestControllerUtilities'

// The Qti3Player component and built-in CSS
import Qti3Player from 'qti3-item-player'
import 'qti3-item-player/dist/qti3Player.css'

// For displaying our own Toasts/Alerts
import Swal from 'sweetalert2'

export default {
  name: 'Sandbox',

  components: {
    Qti3Player,
    TopBarSandbox,
    SettingsPanel,
    SamplesPanel,
    SkipNav
  },

  watch: {
    // When XML changes, run loadItemXml
    itemXml: function () {
      this.loadItemXml()
    }
  },

  data () {
    return {
      test: null,
      id: null,
      /*
       * Manage display of Test Runner UI or End Panel
       */
      currentPanel: 'item',
      itemXml: '',
      /*
       * Qti3Player component instance
       */
      qti3Player: null,
      /*
       * Handle on the qti-assessment-item loaded into the qti3Player
       */
      item: null,
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
       * PCI configuration default
       */
      pciContext: { renderer2p0: './assets/pci/pci.html' },
      /*
       * An item can override submission mode
       */
      itemSubmissionMode: 'individual',
      /*
       * Keep track of whether or not item has qti-template-processing
       */
      hasTemplateProcessing: false,
      /*
       * Test Controller Utilities
       */
       TC: null
    }
  },

  methods: {

    initialize () {
      // Load pnp
      this.pnp = new PnpFactory()
      // Load sessionControl
      this.sessionControl = new SessionControlFactory()
      // Initialize item state hashmap
      this.itemStates = new Map()
      // load all Sample items
      this.TC.loadAllItems()
    },

    handleEndAttemptClick () {
      if (this.isSubmissionModeIndividual())
        this.qti3Player.endAttempt('navigateNone')
      else
        this.qti3Player.suspendAttempt('navigateNone')
    },

    handleNewTemplateClick () {
      if (this.item === null) return
      this.item.newTemplate()
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
      // Perform next action
      this.next(data)
    },

    next (data) {
      switch (data.target) {
        case 'navigateNone':
          if (this.isInvalidResponses(data.state.validationMessages)) return
          break
        default:
          // NOOP
      }
    },

    loadItemAtIndex (index) {
      if (index === null) return
      if ((index < 0) || (index > this.maxItems-1)) return

      const item = this.TC.getItemAtIndex(index)

      // Set current item submission mode
      this.itemSubmissionMode = this.computeItemSubmissionMode(item)

      // Update sessionControl with item/test properties
      this.sessionControl.setValidateResponses(item.sessionControl.validateResponses)
      this.sessionControl.setShowFeedback(item.sessionControl.showFeedback)

      // Build a configuration
      const configuration = this.getConfiguration(item.guid)

      // Load the item with the configuration
      this.qti3Player.loadItemFromXml(item.xml, configuration)
    },

    loadItemXml () {
      // Update sessionControl with item/test properties
      this.sessionControl.setValidateResponses(true)
      this.sessionControl.setShowFeedback(true)

      // Build a configuration
      const configuration = this.getConfiguration('sandbox')

      // Load the item with the configuration
      this.qti3Player.loadItemFromXml(this.itemXml, configuration)
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
      const context = this.$VUE_APP_CONFIGURATION
      // Save the pci context
      this.pciContext.renderer2p0 = context?.cfg?.pciContext?.renderer2p0 || '/assets/pci/pci.html'

      const configuration = {}

      configuration.status = 'interacting'

      // Fetch prior state from Test State
      const state = this.getTestStateItemState(guid)
      if (typeof state !== 'undefined') configuration.state = state

      // IMPORTANT: Stamp the item's tracking guid onto the configuration
      configuration.guid = guid
      configuration.pnp = this.pnp.getPnp()
      configuration.sessionControl = this.sessionControl.getSessionControl()
      configuration.pciContext = this.pciContext

      return configuration
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

    handleItemSampleSelected (itemIdentifier) {
      if (itemIdentifier === null) return
      const item = this.TC.getItemByIdentifier(itemIdentifier)
      if (item === null) return
      // The watcher will load the XML into the player
      this.itemXml = item.xml
    },

    /**
     * @description Display any messages in the validationMessages array.
     * Side effect: disable the appropriate navigation button.
     * @param {Array} validationMessages
     * @return {Boolean} true if there are validationMessage, false if not
     */
    isInvalidResponses (validationMessages) {
      if (!this.sessionControl.getValidateResponses()) return false
      if (validationMessages.length === 0) return false
      // Disable whichever nav button got us here
      //this.toggleButtonDisabled (navigationDirection, false)
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
      this.item = this.qti3Player.getItem()
      this.hasTemplateProcessing = 
        (this.item.getTemplateProcessing() == null)
          ? false
          : true
    }

  },

  created () {
    // Initialize Test Controller Utilities
    this.TC = new TestControllerUtilities()
  },

  mounted () {
    this.initialize()
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

/* raised card panel borders and shadows */
.sandbox-raised-panel {
	border-radius: 2px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);
}

.sandbox-item-xml-heading {
  margin-top: 0;
}

.sandbox-item-xml-textarea {
  font-size: 14px;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}

.card-body.sandbox-item-canvas {
  min-height: 100px;
  padding: 0;
}

/* For WebKit-based browsers (Chrome, Safari) */
textarea.sandbox-item-xml-textarea::-webkit-scrollbar {
  width: 10px; /* Adjust the width as needed */
}

textarea.sandbox-item-xml-textarea::-webkit-scrollbar-thumb {
  background-color:var(--bs-gray-400); /* Change the thumb color */
}
 
textarea.sandbox-item-xml-textarea::-webkit-scrollbar-track {
  background-color: var(--bs-gray-200); /* Change the track color */
}

textarea.sandbox-item-xml-textarea::-webkit-scrollbar-thumb:hover {
  background-color: var(--bs-gray-400); /* Change the thumb color on hover */
}
 
/* For Firefox */
textarea.sandbox-item-xml-textarea {
  scrollbar-width: thin; /* or auto for default width */
  scrollbar-color: var(--bs-gray-400) #f1f1f1; /* thumb and track colors */
}

textarea.sandbox-item-xml-textarea:hover {
  scrollbar-color: var(--bs-gray-400) #f1f1f1; /* thumb color on hover */
}
</style>
