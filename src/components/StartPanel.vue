<template>
  <div class="card">
    <div class="card-body">
      <h2 class="fs-4 text-break">{{ title }}</h2>
      <p class="fs-5">{{maxItems}} Questions</p>
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
