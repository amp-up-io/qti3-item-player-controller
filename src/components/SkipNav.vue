<template>
  <a class="skipnav" :href="skipid">{{content}}</a>
</template>

<script>
export default {
  name: 'SkipNav',

  props: {
    skipid: String,
    content: {
      required: false,
      type: String,
      default: 'Skip to content.'
    },
  }
}
</script>

<style scoped>
.skipnav {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
  letter-spacing: .15ch;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: background-color .3s ease-in-out,color .3s ease-in-out;
}

.skipnav:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
  outline: none;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 1;
}

.skipnav:focus:hover {
  background-color: #000;
  color: #fff;
}
</style>
