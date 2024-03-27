<template>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasSamplesPanel" aria-labelledby="offcanvasSamplesLabel" style="width: 320px;">

    <div class="offcanvas-header pb-2">
      <span class="offcanvas-title fs-5 fw-semibold" id="offcanvasSamplesLabel">QTI 3 Item Samples</span>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-1">
      <div class="flex-shrink-0 p-1 bg-white">
        <ul id="samplesDropdown" class="list-unstyled ps-0">

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#mc-collapse" aria-expanded="false">
              Multiple Choice
            </button>
            <div class="collapse" id="mc-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#mc-basic-collapse" aria-expanded="false">
                    Basic
                  </button>
                  <div class="collapse mt-1" id="mc-basic-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-single-sv-1" title="Unattended Luggage - SV1" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#mc-adv-collapse" aria-expanded="false">
                    Advanced
                  </button>
                  <div class="collapse mt-1" id="mc-adv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-single-sv-4a" title="Unattended Luggage - Ctrl Hidden" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-4b" title="Unattended Luggage - Orientation" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-4c" title="Unattended Luggage - Stacking" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-4d" title="Unattended Luggage - Custom Message" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ms-collapse" aria-expanded="false">
              Multiple Select
            </button>
            <div class="collapse" id="ms-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#mc-basic-collapse" aria-expanded="false">
                    Basic
                  </button>
                  <div class="collapse mt-1" id="mc-basic-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-multiple-sv-1" title="Water - SV1" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#mc-adv-collapse" aria-expanded="false">
                    Advanced
                  </button>
                  <div class="collapse mt-1" id="mc-adv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-multiple-sv-4a" title="Water - Ctrl Hidden" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-4b" title="Water - Orientation" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-4c" title="Water - Stacking" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-4d" title="Water - Custom Message" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

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
                      <Sample identifier="card-08a-baseline" title="Find The Sales Tax" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="template_image" title="Mick's Travels" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="sbac-choice-templated-qti3" title="MS Choice Templated MathML" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#hs-collapse" aria-expanded="false">
              Hotspot
            </button>
            <div class="collapse mt-1" id="hs-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="q10-hotspot-example-1" title="Hotspot - Single Cardinality" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-example-2" title="Hotspot - Multiple Cardinality" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-example-3" title="Hotspot - Shapes" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-interaction-sv-1" title="Hotspot - Theming" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-interaction-sv-2" title="Hotspot - Custom Messages" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#match-collapse" aria-expanded="false">
              Match
            </button>
            <div class="collapse mt-1" id="match-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="match-example-1" title="Shakespeare Plays" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="match-example-2" title="Birds, Reptiles, Mammals" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q13-match-interaction-sv-1" title="Match - Positioning" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q13-match-interaction-sv-2" title="Match - Match Tabular" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q13-match-interaction-sv-3" title="Match - Custom Messages" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#gm-collapse" aria-expanded="false">
              Gap Match
            </button>
            <div class="collapse mt-1" id="gm-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="gap-match-example-1" title="Shakespeare - Richard III" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="gap-match-example-3" title="Solar System" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="gap-match-example-2" title="Gap Match - MathML" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q6-gap-match-interaction-sv-1" title="Gap Match - Positioning" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q6-gap-match-interaction-sv-2" title="Gap Match - Container Width" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q6-gap-match-interaction-sv-3" title="Gap Match - Custom Messages" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q6-gap-match-interaction-sv-4" title="Gap Match - Gap Widths" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ggm-collapse" aria-expanded="false">
              Graphic Gap Match
            </button>
            <div class="collapse mt-1" id="ggm-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="graphic-gap-match-item1" title="Airport Tags" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q8-graphic-gap-match-sv-1" title="GGM - Positioning" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q8-graphic-gap-match-sv-2" title="GGM - Container Width" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q8-graphic-gap-match-sv-3" title="GGM - Custom Messages" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q8-graphic-gap-match-sv-4" title="GGM - Theming" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#order-collapse" aria-expanded="false">
              Order
            </button>
            <div class="collapse mt-1" id="order-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="q15-order-example-1" title="Order - Default Orientation" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q15-order-example-2" title="Order - Horizontal" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q15-order-example-3" title="Order - Vertical" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q15-order-interaction-sv-1" title="Order - Choice Labels" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q15-order-interaction-sv-2" title="Order - Positioning" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#catalog-collapse" aria-expanded="false">
              Catalog - Glossary & Keyword
            </button>
            <div class="collapse mt-1" id="catalog-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="a13-a15-captions-glossary" title="Video Captions + Glossary" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="sbac-200-51246-partial" title="SBAC - Glossary + KT + IG" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#pci-collapse" aria-expanded="false">
              Portable Custom Interactions
            </button>
            <div class="collapse mt-1" id="pci-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="fractions-no-dependencies" title="HMH - Fractions" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="measuringPh" title="HMH - Measuring Ph" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="edmentum-pci-graphing" title="Edmentum - Simple Drawing" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="likert-OAT-PCI" title="OAT - Likert" @sampleSelected="handleSampleSelected"/> 
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#css-collapse" aria-expanded="false">
              Shared CSS Samples
            </button>
            <div class="collapse mt-1" id="css-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="i19b-shared-css-vocab-1" title="Shared CSS 1" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="i19b-shared-css-vocab-2" title="Shared CSS 2 (Layout)" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="i19b-shared-css-vocab-3" title="Shared CSS 3 (Margin/Padding)" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="i19b-shared-css-vocab-4" title="Shared CSS 4 (Display)" @sampleSelected="handleSampleSelected"/> 
                <Sample identifier="i19b-shared-css-vocab-5" title="Shared CSS 5 (Height)" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="i19b-shared-css-vocab-6" title="Shared CSS 6 (Width)" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="i19b-shared-css-vocab-7" title="Shared CSS 7 (Indent Styles)" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="i19b-shared-css-vocab-8" title="Shared CSS 8 (List Styles)" @sampleSelected="handleSampleSelected"/> 
              </ul>
            </div>
          </li>

        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import Sample from '@/components/Sample'

export default {
  name: 'SamplesPanel',

  components: {
    Sample
  },

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

    handleSampleSelected (data) {
      if (this.currentSelectedMenuElement !== null) {
        this.hideCheck(this.currentSelectedMenuElement.querySelector('span'))
        this.hideHighlight(this.currentSelectedMenuElement)
      }

      this.currentSelectedMenuElement = data.element
      this.currentSelectedIdentifier = data.identifier
      this.showCheck(this.currentSelectedMenuElement.querySelector('span'))
      this.showHighlight(this.currentSelectedMenuElement)

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
    },

    showHighlight (element) {
      element.classList.add('sample-checked')
    },

    hideHighlight (element) {
      element.classList.remove('sample-checked')
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

.btn-toggle-nav a.sample-checked {
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
