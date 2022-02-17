<template>
  <div class="row m-auto">
    <div class="col-6 offset-3 shadow-sm p-5 bg-light bg-gradient border border-2 rounded-3">
      <h4 class="text-break">{{ title }}</h4>
      <p class="fs-4">{{maxItems}} Questions</p>
      <p v-html="description"></p>
      <button type="button" @click="handleStartClick" class="btn btn-primary btn-lg">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPanel',

  props: {
    title: String,
    description: String,
    maxItems: String
  },

  methods: {

    handleStartClick () {
      // Notify parent of the start event
      this.$emit('start')
    }
  },

  mounted () {
  }
}
</script>
