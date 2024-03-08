<template>
  <li>
    <a 
      class="link-dark rounded item-sample-link" 
      href="#" 
      :data-identifier="identifier" 
      @click.prevent="handleClick">
      {{ title }}
      <span class="menu-sample-unchecked">
        <img src="@/assets/check-solid.svg" width="14" height="14"/>
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Sample',

  props: {
    identifier: String,
    title: String
  },

  methods: {

    handleClick (event) {
      this.$emit('sampleSelected', { element: event.currentTarget, identifier: this.identifier })
    }

  },

  mounted () {
  }
}
</script>