<template>
  <section>
    <SkipNav skipid="#main" />
    <header>
      <TopBar
        ref="topbar"
        :is-nav-buttons-hidden="!isTestStarted"
        :is-previous-disabled="isBtnPreviousDisabled"
        :is-next-disabled="isBtnNextDisabled"
        :current-item="currentItem"
        :max-items="maxItems"
        @previousItem="handlePrevItem"
        @nextItem="handleNextItem"
        @menuColorClick="handleMenuColorClick"
        @menuContainerClick="handleMenuContainerClick"
        @menuContainerPaddingClick="handleMenuContainerPaddingClick"
      />
    </header>

    <!-- Item Canvas -->
    <main v-show="currentPanel == 'items'" id="main" class="test-controller-container container-fluid">
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
        />
      </div>
    </main>

    <!-- Start Test Page -->
    <main v-show="currentPanel == 'start'" id="main" class="test-controller-container container-fluid">
      <div class="start-test-content">
        <h1 class="visually-hidden">Start Test Page</h1>
        <StartPanel
          :max-items="maxItems"
          @start="handleStart"
        />
      </div>
    </main>

    <!-- Only display this when we are displaying items -->
    <footer v-show="currentPanel == 'items'" class="navbar bg-dark navbar-top-shadow">
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

  </section>
</template>

<script>
import BottomBar from '@/components/BottomBar'
import TopBar from '@/components/TopBar'
import StartPanel from '@/components/StartPanel'
import SkipNav from '@/components/SkipNav'

import { ItemFactory } from '@/helpers/ItemFactory'
import { PnpFactory } from '@/helpers/PnpFactory'
import { SessionControlFactory } from '@/helpers/SessionControlFactory'

// The Qti3Player component and built-in CSS
import Qti3Player from 'qti3-item-player'
import 'qti3-item-player/dist/qti3Player.css'

// For displaying our own Toasts/Alerts
import Swal from 'sweetalert2'

export default {
  name: 'App',

  components: {
    Qti3Player,
    BottomBar,
    TopBar,
    StartPanel,
    SkipNav
  },

  data () {
    return {
      /* ===========================================================
       * Various app state variables to manage the Test Runner's UI.
       * =========================================================== */
      currentPanel: 'start',
      isTestStarted: false,
      isBtnPreviousDisabled: false,
      isBtnNextDisabled: false,
      currentItem: 0,
      maxItems: 79,
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

    initialize () {
      this.updateButtonState()
      // Load items
      this.items = new ItemFactory().load()
      // Load pnp
      this.pnp = new PnpFactory()
      // Load sessionControl
      this.sessionControl = new SessionControlFactory()
      // Tell player to validate responses
      // this.sessionControl.setValidateResponses(true)
      this.sessionControl.setShowFeedback(true)
      // Initialize item state hashmap
      this.itemStates = new Map()
    },

    handleStart () {
      this.isTestStarted = true
      this.currentPanel = 'items'
      this.loadFirstItem()
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

      // Build a configuration
      const configuration = this.getConfiguration(this.items[index].guid)

      // Load the item with the configuration
      this.qti3Player.loadItemFromXml(this.items[index].xml, configuration)
    },

    computeItemSubmissionMode (itemObject) {
      if ('submissionMode' in itemObject) return itemObject.submissionMode
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

      console.log('this.pnp.getColorStyle()', this.pnp.getColorStyle())
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

/* Inner start test panel */
.start-test-content {
  margin: 20px auto;
}

footer {
  padding: 1em;
  /* Make sure the foot always displays at bottom of the viewport */
  min-height: 3em;
}
</style>
