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
                      <Sample identifier="q2-choice-interaction-single-sv-1" title="Unattended Luggage" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#mc-sv-collapse" aria-expanded="false">
                    Shared Vocabulary
                  </button>
                  <div class="collapse mt-1" id="mc-sv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-single-sv-2a" title="Labels None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-2b" title="Labels Decimal" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-2c" title="Labels Lower Alpha" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-2d" title="Labels Upper Alpha" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3a" title="Labels Lower Alpha - Suffix None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3b" title="Labels Lower Alpha - Suffix Period" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3c" title="Labels Lower Alpha - Suffix Parenthesis" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3d" title="Labels Upper Alpha - Suffix None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3e" title="Labels Upper Alpha - Suffix Period" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3f" title="Labels Upper Alpha - Suffix Parenthesis" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3g" title="Labels Decimal - Suffix None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3h" title="Labels Decimal - Suffix Period" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-single-sv-3i" title="Labels Decimal - Suffix Parenthesis" @sampleSelected="handleSampleSelected"/>
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
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ms-basic-collapse" aria-expanded="false">
                    Basic
                  </button>
                  <div class="collapse mt-1" id="ms-basic-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-multiple-sv-1" title="Water Composition" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ms-sv-collapse" aria-expanded="false">
                    Shared Vocabulary
                  </button>
                  <div class="collapse mt-1" id="ms-sv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q2-choice-interaction-multiple-sv-2d" title="Labels None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-2c" title="Labels Decimal" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-2a" title="Labels Lower Alpha" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-2b" title="Labels Upper Alpha" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3c" title="Labels Lower Alpha - Suffix None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3b" title="Labels Lower Alpha - Suffix Period" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3a" title="Labels Lower Alpha - Suffix Parenthesis" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3f" title="Labels Upper Alpha - Suffix None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3e" title="Labels Upper Alpha - Suffix Period" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3d" title="Labels Upper Alpha - Suffix Parenthesis" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3i" title="Labels Decimal - Suffix None" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3h" title="Labels Decimal - Suffix Period" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q2-choice-interaction-multiple-sv-3g" title="Labels Decimal - Suffix Parenthesis" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ms-adv-collapse" aria-expanded="false">
                    Advanced
                  </button>
                  <div class="collapse mt-1" id="ms-adv-collapse">
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
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ic-collapse" aria-expanded="false">
              Inline Choice
            </button>
            <div class="collapse mt-1" id="ic-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="q12-inline-choice-interaction" title="Richard III" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q12-inline-choice-composite" title="Richard III - Composite" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q12-inline-choice-mathml" title="Inline Choice - MathML" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q12-inline-choice-sv-1" title="Inline Choice - Widths" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q12-inline-choice-sv-2" title="Inline Choice - Custom Prompt" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q12-inline-choice-sv-3" title="Inline Choice - Custom Messages" @sampleSelected="handleSampleSelected"/>
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
                      <Sample identifier="feedback-solution-random" title="Feedback Templated Exponent" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#et-collapse" aria-expanded="false">
              Extended Text
            </button>
            <div class="collapse" id="et-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#et-basic-collapse" aria-expanded="false">
                    Basic
                  </button>
                  <div class="collapse mt-1" id="et-basic-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q5-extended-text-base-type-string" title="Plain" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q5-extendedtext-sv-1" title="Height - Default" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q5-extendedtext-sv-2a" title="Height - Lines 3" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q5-extendedtext-sv-2b" title="Height - Lines 6" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q5-extendedtext-sv-2c" title="Height - Lines 15" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#et-adv-collapse" aria-expanded="false">
                    Advanced
                  </button>
                  <div class="collapse mt-1" id="et-adv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q5-extendedtext-sv-3" title="Format Plain/XHTML - Counters" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q5-extendedtext-sv-4" title="Pattern Mask - Custom Message" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#hs-collapse" aria-expanded="false">
              Hot Spot
            </button>
            <div class="collapse mt-1" id="hs-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="q10-hotspot-example-1" title="Hot Spot - Single Cardinality" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-example-2" title="Hot Spot - Multiple Cardinality" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-example-3" title="Hot Spot - Shapes" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-interaction-sv-1" title="Hot Spot - Theming" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q10-hotspot-interaction-sv-2" title="Hot Spot - Custom Messages" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ht-collapse" aria-expanded="false">
              Hot Text
            </button>
            <div class="collapse mt-1" id="ht-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="hot-text-example-1" title="Hot Text - Single Cardinality" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="hot-text-example-2" title="Hot Text - Multiple Cardinality" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q11-hottext-sv-1" title="Hot Text - Input Control Hidden" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q11-hottext-sv-2" title="Hot Text - Custom Messages" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="q11-hottext-sv-3" title="Hot Text - Unselected Hidden" @sampleSelected="handleSampleSelected"/>
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
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#te-collapse" aria-expanded="false">
              Text Entry
            </button>
            <div class="collapse" id="te-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#te-basic-collapse" aria-expanded="false">
                    Basic
                  </button>
                  <div class="collapse mt-1" id="te-basic-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q20-textentry-sv-1" title="Richard III" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#te-sv-collapse" aria-expanded="false">
                    Shared Vocabulary
                  </button>
                  <div class="collapse mt-1" id="te-sv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q20-textentry-sv-2a" title="Input Width 1" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2b" title="Input Width 2" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2c" title="Input Width 3" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2d" title="Input Width 4" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2j" title="Input Width 5" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2e" title="Input Width 6" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2f" title="Input Width 10" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2g" title="Input Width 15" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2h" title="Input Width 20" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2k" title="Input Width 25" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2l" title="Input Width 30" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2m" title="Input Width 35" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2n" title="Input Width 40" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2o" title="Input Width 45" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2p" title="Input Width 50" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-sv-2i" title="Input Width 72" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
                <li class="mb-1 mt-2 ms-3">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#te-adv-collapse" aria-expanded="false">
                    Advanced
                  </button>
                  <div class="collapse mt-1" id="te-adv-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <Sample identifier="q20-textentry-sv-3" title="Pattern Mask - Custom Message" @sampleSelected="handleSampleSelected"/>
                      <Sample identifier="q20-textentry-composite" title="All Widths" @sampleSelected="handleSampleSelected"/>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#media-collapse" aria-expanded="false">
              Media
            </button>
            <div class="collapse mt-1" id="media-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="media-interaction-video" title="Media Interaction - Video" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="media-interaction-audio" title="Media Interaction - Audio" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#sp-collapse" aria-expanded="false">
              Select Point
            </button>
            <div class="collapse mt-1" id="sp-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="select-point-1" title="Where is Edinburgh?" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="select-point-2" title="Select Point - Responsive" @sampleSelected="handleSampleSelected"/>
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
                <Sample identifier="pci-graphing-interaction-1" title="Amp-up Graphing - ScatterPlot" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="pci-graphing-interaction-2" title="Amp-up Graphing - Line" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="pci-graphing-interaction-variables" title="Amp-up Graphing - Variables" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="pci-graphing-interaction-altconfig" title="Amp-up Graphing - Alt Config" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="pci-graphing-interaction-altconfig-modules" title="Amp-up Graphing - Alt Config Modules" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="pci-graphing-interaction-fallback-mr" title="Amp-up Graphing - Fallback MR" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="cito-pci-vanilla" title="Cito - Percentages" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="cito-pci-color-proportions" title="Cito - Color Proportions" @sampleSelected="handleSampleSelected"/> 
                <Sample identifier="cito-pci-color-proportions-new" title="Cito - Color Proportions New" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="OAT-pci-likert" title="OAT - Likert" @sampleSelected="handleSampleSelected"/> 
                <Sample identifier="OAT-pci-audio-recorder" title="OAT - Audio Recorder" @sampleSelected="handleSampleSelected"/> 
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

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#yqti-collapse" aria-expanded="false">
              YasashiQTI
            </button>
            <div class="collapse mt-1" id="yqti-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="murata-alice-1" title="Alice" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="murata-meta-2" title="Metamorphosis" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="murata-metajp-2" title="完全変態 (Metamorphosis)" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="murata-bronze-1" title="青銅の魔人 (Bronze Demon)" @sampleSelected="handleSampleSelected"/>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#comp-collapse" aria-expanded="false">
              Bootcamp Exercises
            </button>
            <div class="collapse mt-1" id="comp-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <Sample identifier="shakespeare-biography" title="Shakespeare Biography" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="stooges-match" title="Categorize Stooges" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="unattended-luggage-full" title="Unattended Luggage - Full" @sampleSelected="handleSampleSelected"/>
                <Sample identifier="composition-water-full" title="Composition Water - Full" @sampleSelected="handleSampleSelected"/>
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
