<template>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasSamplesPanel" aria-labelledby="offcanvasSamplesLabel" style="width: 320px;">

    <div class="offcanvas-header pb-2">
      <span class="offcanvas-title fs-5 fw-semibold" id="offcanvasSamplesLabel">Item Samples</span>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-1">
      <div class="flex-shrink-0 p-1 bg-white">
        <ul id="samplesDropdown" class="list-unstyled ps-0">

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#at-collapse" aria-expanded="false">
              Adaptive & Templated
            </button>
            <div class="collapse" id="at-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#templated-collapse" aria-expanded="false">
                    Templated
                  </button>
                  <div class="collapse mt-1" id="templated-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li><a class="link-dark rounded item-sample-link" href="#" data-identifier="card-08a-baseline" @click.prevent="handleMenuClick">Find The Sales Tax
                        <span class="menu-sample-unchecked">
                          <img src="@/assets/check-solid.svg" width="14" height="14"/>
                        </span></a>
                      </li>
                      <li><a class="link-dark rounded item-sample-link" href="#" data-identifier="template_image" @click.prevent="handleMenuClick">Mick's Travels
                        <span class="menu-sample-unchecked">
                          <img src="@/assets/check-solid.svg" width="14" height="14"/>
                        </span></a>
                      </li>
                      <li><a class="link-dark rounded item-sample-link" href="#" data-identifier="sbac-choice-templated-qti3" @click.prevent="handleMenuClick">MS Choice Templated MathML
                        <span class="menu-sample-unchecked">
                          <img src="@/assets/check-solid.svg" width="14" height="14"/>
                        </span></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#catalog-collapse" aria-expanded="false">
              Catalog - Glossary & Keyword
            </button>
            <div class="collapse mt-1" id="catalog-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a class="link-dark rounded item-sample-link" href="#" data-identifier="a13-a15-captions-glossary" @click.prevent="handleMenuClick">Video Captions + Glossary
                  <span class="menu-sample-unchecked">
                    <img src="@/assets/check-solid.svg" width="14" height="14"/>
                  </span></a>
                </li>
                <li><a class="link-dark rounded item-sample-link" href="#" data-identifier="sbac-200-51246-partial" @click.prevent="handleMenuClick">SBAC - Glossary + KT + IG
                  <span class="menu-sample-unchecked">
                    <img src="@/assets/check-solid.svg" width="14" height="14"/>
                  </span></a>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#pci-collapse" aria-expanded="false">
              Portable Custom Interactions
            </button>
            <div class="collapse mt-1" id="pci-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a class="link-dark rounded item-sample-link" href="#" data-identifier="fractions-no-dependencies" @click.prevent="handleMenuClick">HMH Fractions PCI
                  <span class="menu-sample-unchecked">
                    <img src="@/assets/check-solid.svg" width="14" height="14"/>
                  </span></a>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SamplesPanel',

  props: {
  },

  data () {
    return {
      currentSelectedMenuElement: null,
      currentSelectedIdentifier: null
    }
  },

  methods: {

    initialize () {
      const samplesDropdown = document.querySelector('#samplesDropdown')
      if (samplesDropdown == null) return
    },

    handleMenuClick (event) {
      if (this.currentSelectedMenuElement !== null) {
        this.hideCheck(this.currentSelectedMenuElement.querySelector('span'))
      }

      this.currentSelectedMenuElement = event.currentTarget
      this.currentSelectedIdentifier = event.currentTarget.dataset.identifier
      this.showCheck(this.currentSelectedMenuElement.querySelector('span'))

      // Notify listeners
      this.$emit('menuItemSelectedClick', this.currentSelectedIdentifier)
    },

    showCheck (element) {
      element.classList.remove('menu-sample-unchecked')
      element.classList.add('menu-sample-checked')
    },

    hideCheck (element) {
      element.classList.remove('menu-sample-checked')
      element.classList.add('menu-sample-unchecked')
    }

  },

  mounted () {
    this.initialize()
  }
}
</script>

<style>
.b-example-divider {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.dropdown-toggle { outline: 0; }

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: .5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, .85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold { font-weight: 600; }
.lh-tight { line-height: 1.25; }

.menu-sample-unchecked {
  display: none;
}

.menu-sample-checked {
  display: inline;
  margin-left: .5rem;
}
</style>
