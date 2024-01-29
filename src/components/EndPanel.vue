<template>
  <div>
    <div class="row m-auto">
      <div class="col-10 offset-1 shadow-sm p-3 bg-light bg-gradient border border-2 rounded-3">
        <div class="d-flex flex-wrap">
          <h4 class="card-title mt-1 mb-4">Collection Review</h4>
          <div class="ms-auto">
            <div class="d-inline-block mt-0">
              <button type="button" @click="handleReturnToStartClick" class="btn btn-sm btn-primary">Return to Start</button>
            </div>
          </div>
        </div>
        <table class="table table-sm mb-4">
          <tbody>
            <tr>
              <th scope="row" class="w-25 ps-4">Title:</th>
              <td id="testIdentifier" class="w-75">{{ title }}</td>
            </tr>
            <tr>
              <th scope="row" class="w-25 ps-4">Items:</th>
              <td id="testParts" class="w-75">{{ countItems }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row m-auto">
      <div class="col-10 offset-1 shadow-sm p-3 bg-light bg-gradient border border-2 rounded-3">
          <h4 class="card-title mt-1 mb-0">Items</h4>
  
          <p v-if="isUnanswered" class="small mt-1 mb-0"> 
            <span class="badge border border-light rounded-circle bg-danger p-1">
              <span class="visually-hidden">unanswered</span>
            </span> = This symbol indicates unanswered items.
          </p>
  
          <div ref="itemSummary" class="d-flex flex-wrap gap-3 mt-4">
          </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'EndPanel',
  
    props: {
      title: String,
      testItems: Array,
      countItems: Number
    },
  
    computed: {
    },
  
    data () {
      return {
        itemButtons: [],
        isUnanswered: false,
        btnClickHandler: null
      }
    },
  
    methods: {
  
      handleReturnToStartClick () {
        // Notify parent of the restart event
        this.$emit('restart')
      },
  
      handleButtonClick (e) {
        // Notify parent of navigate item - passing the item's identifier
        const item = e.currentTarget
        // Convert the index from a String to an Integer
        const itemIndex = parseInt(item.dataset.index)
        this.$emit('navigateitem', { identifier: item.dataset.identifier, index: itemIndex })
      },
  
      setUnanswered (unanswered) {
        this.isUnanswered = unanswered
      },
  
      setItemSummary (s) {
        this.removeEventListeners()
        this.$refs.itemSummary.innerHTML = s
        this.itemButtons = this.$refs.itemSummary.querySelectorAll('button.btn-item-review')
        this.addEventListeners()
      },
  
      addEventListeners () {
        this.itemButtons.forEach((button) => {
          button.addEventListener('click', this.btnClickHandler)
        }, this)
      },
  
      removeEventListeners () {
        this.itemButtons.forEach((button) => {
          button.removeEventListener('click', this.btnClickHandler)
        }, this)
      }
      
    },

    created () {
      this.btnClickHandler = this.handleButtonClick.bind(this)
    },
  
    mounted () {
      this.setQuestionSummary()
    },
  
    beforeDestroy () {
      this.removeEventListeners()
    }
  }
  </script>
  
