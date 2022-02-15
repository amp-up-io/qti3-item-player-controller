<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light navbar-bottom-shadow">
    <div class="container-fluid">
      <div class="navbar-brand router-link">
        <router-link :to="{ name: 'Home', params: { } }">
          <img src="@/assets/amp-up-io.svg" class="bi me-2" width="32" height="32" alt=""/>
          Test Runner
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopBarApp',

  data () {
    return {
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>

<style>
.navbar-bottom-shadow {
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
}

.navbar-brand.router-link a {
  text-decoration: none;
  color: inherit;
}

.navbar-brand.router-link a.router-link-exact-active {
}
</style>
