<template>
  <div class="test-controller-nav">
    <button ref="btnPrev" type="button" :disabled="prevButtonDisabled" @click="handlePrevItem" class="btn btn-sm btn-primary pull-left me-2">Prev</button>
    <button ref="btnNext" type="button" :disabled="nextButtonDisabled" @click="handleNextItem" class="btn btn-sm btn-primary">Next</button>
    <div class="float-end m-auto">
      <div class="progress position-relative" style="height: 20px;width: 100px;">
        <div class="progress-bar" role="progressbar" v-bind:style="styleObject" :aria-valuenow="computePercentage" :aria-valuemin="0" :aria-valuemax="maxItems"></div>
        <span class="justify-content-center d-flex position-absolute w-100">{{ progressText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',

  props: {
    isNavButtonsHidden: {
      type: Boolean,
      required: false,
      default: true
    },
    isPreviousDisabled: Boolean,
    isNextDisabled: Boolean,
    currentItem: {
      type: Number,
      required: false,
      default: 0
    },
    maxItems: {
      type: Number,
      required: false,
      default: 0
    }
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
    }

  },

  data () {
    return {
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
