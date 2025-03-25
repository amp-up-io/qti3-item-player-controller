<template>
  <div class="btn-group dropup ms-2">
    <button 
      type="button" 
      class="btn btn-sm btn-secondary" 
      id="gotoButton" 
      aria-label="Go To Question"
      :disabled="isGotoDisabled">
      Go To
    </button>
    <button 
      type="button" 
      class="btn btn-sm btn-secondary dropdown-toggle" 
      data-bs-toggle="dropdown"
      :disabled="isGotoDisabled"
      aria-label="Open options"
      aria-expanded="false">
      <i class="mdi mdi-chevron-up" aria-hidden="true"></i>
    </button>
    <ul class="dropdown-menu">
      <li 
        class="dropdown-item"
        :class="{'active': currentItemIndex === index}"
        v-for="(testItem, index) in testItems" 
        v-bind:key="testItem.identifier" 
        @click="handleQuestionClick"  
        :data-index="index" href="#">
        <span>Item {{ index+1 }}</span>
      </li>
      <div class="dropdown-divider"></div>
      <li 
        class="dropdown-item" 
        @click="handleEndClick"
        href="#">Collection Review</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoToButton',

  props: {
    isGotoDisabled: Boolean,
    currentItemIndex: Number,
    testItems: Array
  },

  methods: {

    handleQuestionClick (e) {
      const index = parseInt(e.currentTarget.dataset.index)
      this.$emit('gotoItem', { identifier: this.testItems[index].identifier, index: index })
    },

    handleEndClick () {
      this.$emit('gotoEnd')
    }

  },

  mounted () {
  }

}
</script>

<style>
li.dropdown-item {
  cursor: pointer;
}
</style>
