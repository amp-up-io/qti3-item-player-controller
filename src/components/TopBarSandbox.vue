<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light navbar-bottom-shadow">
    <div class="container-fluid">
      <div class="navbar-brand router-link">
        <router-link :to="{ name: 'Home', params: { } }">
          <img src="@/assets/amp-up-io.svg" class="me-2" width="32" height="32" title="Amp-up.io" alt=""/>
          QTI 3 Player Sandbox
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerSandbox" aria-controls="navbarTogglerSandbox" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerSandbox">
      <button class="btn btn-outline-secondary me-2" type="button" id="offcanvasSamplesLabel" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSamplesPanel" aria-controls="offcanvasSamplesPanel">
        <strong>QTI 3 Item Samples</strong>
      </button>
      <button class="btn btn-outline-secondary" type="button" id="offcanvasSettingsLabel" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettingsPanel" aria-controls="offcanvasSettingsPanel">
        Settings
      </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopBarSandbox',

  props: {
  },

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
</style>
