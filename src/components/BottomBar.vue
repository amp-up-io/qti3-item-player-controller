<template>
  <div class="test-controller-nav">
    <button ref="btnPrev" type="button" :disabled="prevButtonDisabled" @click="handlePrevItem" class="btn btn-sm btn-primary pull-left me-2">Prev</button>
    <button ref="btnNext" type="button" :disabled="nextButtonDisabled" @click="handleNextItem" class="btn btn-sm btn-primary">Next</button>
    <GoToButton 
      v-if="isNavigationModeNonLinear"
      :is-goto-disabled="isGotoDisabled"
      :testItems="testItems"
      :currentItemIndex="currentItem"
      @gotoItem="handleGotoItem"
      @gotoEnd="handleGotoEnd"
    />
    <div class="float-end m-auto">
      <div class="progress position-relative" style="height: 20px;width: 100px;">
        <div class="progress-bar" role="progressbar" v-bind:style="styleObject" :aria-valuenow="computePercentage" :aria-valuemin="0" :aria-valuemax="maxItems"></div>
        <span class="justify-content-center d-flex position-absolute w-100">{{ progressText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import GoToButton from '@/components/GoToButton'

export default {
  name: 'BottomBar',

  components: {
    GoToButton
  },

  props: {
    isNavButtonsHidden: {
      type: Boolean,
      required: false,
      default: true
    },
    isPreviousDisabled: Boolean,
    isNextDisabled: Boolean,
    isGotoDisabled: Boolean,
    currentItem: {
      type: Number,
      required: false,
      default: 0
    },
    maxItems: {
      type: Number,
      required: false,
      default: 0
    },
    testItems: Array,
  },

  computed: {
    progressText () {
      return (this.currentItem+1 + ' of ' + this.maxItems)
    },

    computePercentage () {
      return (this.maxItems === 0) ? 0 :Math.floor(((this.currentItem + 1) / this.maxItems) * 100)
    },

    styleObject () {
      const percent = this.computePercentage + '%'
      return {
        width: percent
      }
    },

    prevButtonDisabled () {
      return (this.isPreviousDisabled ? 'disabled' : undefined)
    },

    nextButtonDisabled () {
      return (this.isNextDisabled ? 'disabled' : undefined)
    },

    isNavigationModeNonLinear () {
      return (this.navigationMode === 'nonlinear' ? true : false)
    }

  },

  data () {
    return {
      navigationMode: 'nonlinear'
    }
  },

  methods: {

    initialize () {
    },

    handleNextItem () {
      this.$emit('nextItem')
    },

    handlePrevItem () {
      this.$emit('previousItem')
    },

    handleGotoItem (data) {
      this.$emit('gotoItem', data)
    },

    handleGotoEnd () {
      this.$emit('gotoEnd')
    }

  },

  mounted () {
    this.initialize()
  }
}
</script>

<style>
.test-controller-nav {
  display: flex;
  width: 100%;
}
</style>
