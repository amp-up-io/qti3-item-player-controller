<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light navbar-bottom-shadow">
    <div class="container-fluid">
      <div class="navbar-brand router-link">
        <router-link :to="{ name: 'Home', params: { } }">
          <img src="@/assets/amp-up-io.svg" class="bi me-2" width="32" height="32" alt=""/>
          Test Runner
        </router-link>
      </div>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <div class="navbar-nav">
          <div class="btn-group nav-item">
            <button type="button" class="btn btn-light dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              Settings
            </button>
            <ul id="settingsDropdown" class="dropdown-menu dropdown-menu-end dropdown-menu-start text-small shadow" aria-labelledby="dropdownUser2">
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:default')"> Colors - Default
                <span class="ms-1 checkmark menu-container-checked" data-color="colors:default">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:default-reverse')">Colors - Default Reverse
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:default-reverse">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:highcontrast')">Colors - High Contrast
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:highcontrast">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:highcontrast-reverse')">Colors - High Contrast Reverse
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:highcontrast-reverse">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:blackrose')">Colors - Black on Rose
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:blackrose">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:roseblack')">Colors - Rose on Black
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:roseblack">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:mgraydgray')">Colors - Medium Gray on Dark Gray
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:mgraydgray">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:dgraymgray')">Colors - Dark Gray on Medium Gray
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:dgraymgray">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:yellowblue')">Colors - Yellow on Blue
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:yellowblue">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item color-item" href="#" @click.prevent="handleMenuClick('colors:blueyellow')">Colors - Blue on Yellow
                <span class="ms-1 checkmark menu-container-unchecked" data-color="colors:blueyellow">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <!-- container settings -->
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" @click.prevent="handleMenuClick('container:fluid')">QTI 3 Player - Full Width
                <span ref="menuItemContainerFluid" class="ms-1 menu-container-checked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item" href="#" @click.prevent="handleMenuClick('container:responsive')">QTI 3 Player - Responsive
                <span ref="menuItemContainerResponsive" class="ms-1 menu-container-unchecked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <!-- container padding settings -->
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item padding-item" href="#" @click.prevent="handleMenuClick('containerpadding:0')">QTI 3 Player - Padding 0
                <span ref="menuItemContainerPadding0" class="ms-1 checkmark menu-container-unchecked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item padding-item" href="#" @click.prevent="handleMenuClick('containerpadding:1')">QTI 3 Player - Padding 1
                <span ref="menuItemContainerPadding1" class="ms-1 checkmark menu-container-unchecked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item padding-item" href="#" @click.prevent="handleMenuClick('containerpadding:2')">QTI 3 Player - Padding 2
                <span ref="menuItemContainerPadding2" class="ms-1 checkmark menu-container-checked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item padding-item" href="#" @click.prevent="handleMenuClick('containerpadding:3')">QTI 3 Player - Padding 3
                <span ref="menuItemContainerPadding3" class="ms-1 checkmark menu-container-unchecked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item padding-item" href="#" @click.prevent="handleMenuClick('containerpadding:4')">QTI 3 Player - Padding 4
                <span ref="menuItemContainerPadding4" class="ms-1 checkmark menu-container-unchecked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
              <li><a class="dropdown-item padding-item" href="#" @click.prevent="handleMenuClick('containerpadding:5')">QTI 3 Player - Padding 5
                <span ref="menuItemContainerPadding5" class="ms-1 checkmark menu-container-unchecked">
                  <img src="@/assets/check-solid.svg" class="bi" width="14" height="14"/>
                </span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopBar',

  props: {
  },

  data () {
    return {
      colorMenuItems: null,
      paddingMenuItems: null
    }
  },

  methods: {

    initialize () {
      const settingsDropdown = document.querySelector('#settingsDropdown')
      if (settingsDropdown == null) return
      this.colorMenuItems = settingsDropdown.querySelectorAll('a.color-item')
      this.paddingMenuItems = settingsDropdown.querySelectorAll('a.padding-item')
    },

    handleMenuClick (param) {
      let colorClass = null

      switch (param) {
        case 'colors:default':
          colorClass = 'qti3-player-color-default'
          break
        case 'colors:default-reverse':
          colorClass = 'qti3-player-color-defaultreverse'
          break
        case 'colors:highcontrast':
          colorClass = 'qti3-player-color-blackwhite'
          break
        case 'colors:highcontrast-reverse':
          colorClass = 'qti3-player-color-whiteblack'
          break
        case 'colors:blackrose':
          colorClass = 'qti3-player-color-blackrose'
          break
        case 'colors:roseblack':
          colorClass = 'qti3-player-color-roseblack'
          break
        case 'colors:mgraydgray':
          colorClass = 'qti3-player-color-mgraydgray'
          break
        case 'colors:dgraymgray':
          colorClass = 'qti3-player-color-dgraymgray'
          break
        case 'colors:yellowblue':
          colorClass = 'qti3-player-color-yellowblue'
          break
        case 'colors:blueyellow':
          colorClass = 'qti3-player-color-blueyellow'
          break
        case 'container:fluid':
          this.showCheck(this.$refs.menuItemContainerFluid)
          this.hideCheck(this.$refs.menuItemContainerResponsive)
          this.$emit('menuContainerClick', 'qti3-player-container-fluid')
          break
        case 'container:responsive':
          this.showCheck(this.$refs.menuItemContainerResponsive)
          this.hideCheck(this.$refs.menuItemContainerFluid)
          this.$emit('menuContainerClick', 'qti3-player-container')
          break
        case 'containerpadding:0':
          this.removeAllContainerPaddingChecks()
          this.showCheck(this.$refs.menuItemContainerPadding0)
          this.$emit('menuContainerPaddingClick', 'qti3-player-container-padding-0')
          break
        case 'containerpadding:1':
          this.removeAllContainerPaddingChecks()
          this.showCheck(this.$refs.menuItemContainerPadding1)
          this.$emit('menuContainerPaddingClick', 'qti3-player-container-padding-1')
          break
        case 'containerpadding:2':
          this.removeAllContainerPaddingChecks()
          this.showCheck(this.$refs.menuItemContainerPadding2)
          this.$emit('menuContainerPaddingClick', 'qti3-player-container-padding-2')
          break
        case 'containerpadding:3':
          this.removeAllContainerPaddingChecks()
          this.showCheck(this.$refs.menuItemContainerPadding3)
          this.$emit('menuContainerPaddingClick', 'qti3-player-container-padding-3')
          break
        case 'containerpadding:4':
          this.removeAllContainerPaddingChecks()
          this.showCheck(this.$refs.menuItemContainerPadding4)
          this.$emit('menuContainerPaddingClick', 'qti3-player-container-padding-4')
          break
        case 'containerpadding:5':
          this.removeAllContainerPaddingChecks()
          this.showCheck(this.$refs.menuItemContainerPadding5)
          this.$emit('menuContainerPaddingClick', 'qti3-player-container-padding-5')
          break
        default:
      }

      if (colorClass !== null) {
        // Notify parent
        this.$emit('menuColorClick', colorClass)
        // Show/Hide checkmarks
        this.removeAllColorChecks()
        this.checkColor(param)
      }
    },

    showCheck (element) {
      element.classList.remove('menu-container-unchecked')
      element.classList.add('menu-container-checked')
    },

    hideCheck (element) {
      element.classList.remove('menu-container-checked')
      element.classList.add('menu-container-unchecked')
    },

    removeAllColorChecks () {
      this.colorMenuItems.forEach((item) => {
        const el = item.querySelector('span.checkmark')
        if (el == null) return
        this.hideCheck(el)
      }, this)
    },

    removeAllContainerPaddingChecks () {
      this.paddingMenuItems.forEach((item) => {
        const el = item.querySelector('span.checkmark')
        if (el == null) return
        this.hideCheck(el)
      }, this)
    },

    checkColor (color) {
      this.colorMenuItems.forEach((item) => {
        const el = item.querySelector("span[data-color='" + color + "']")
        if (el == null) return
        this.showCheck(el)
      }, this)
    }
  },

  mounted () {
    this.initialize()
  }
}
</script>

<style>
.navbar-bottom-shadow {
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16);
}

.menu-container-unchecked {
  display: none;
}

.menu-container-checked {
  display: inline;
}

.navbar-brand.router-link a {
  text-decoration: none;
  color: inherit;
}

.navbar-brand.router-link a.router-link-exact-active {
}
</style>
