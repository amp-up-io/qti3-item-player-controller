<template>
<div class="home">
  <section class="bg-gray">
    <SkipNav skipid="#main" />
    <header>
      <TopBarApp
        ref="topbar"
      />
    </header>

    <!-- Available Collections Page -->
    <main id="main" class="test-controller-container container-fluid">
      <div class="main-content">
        <h1 class="visually-hidden">Available Collections Page</h1>
        <div class="card">
          <div class="card-body">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs mt-2" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#tab1" role="tab">
                  <strong>
                    <span class="d-block d-sm-none"><i class="fas fa-file-alt"></i></span>
                    <span class="d-none d-sm-block">Example Items</span>
                  </strong>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab2" role="tab">
                  <strong>
                    <span class="d-block d-sm-none"><i class="far fa-list-alt"></i></span>
                    <span class="d-none d-sm-block">QTI 3 Conformance</span>
                  </strong>
                </a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content p-2 text-muted">
              <div class="tab-pane active" id="tab1" role="tabpanel">
                <table class="table table-sm w-100">
                  <thead>
                    <tr>
                      <th scope="col" class="th-no-top text-muted">Title</th>
                      <th scope="col" class="th-no-top text-muted">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="test in examplesTab" v-bind:key="test.id">
                      <td class="table-cell router-link">
                        <router-link :to="{ name: 'Start', params: { id: test.id } }">
                          {{ test.title }}
                        </router-link>
                      </td>
                      <td>
                        {{ test.count }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="tab-pane" id="tab2" role="tabpanel">
                <table class="table table-sm w-100">
                  <thead>
                    <tr>
                      <th scope="col" class="th-no-top text-muted">Title</th>
                      <th scope="col" class="th-no-top text-muted">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="test in conformanceTab" v-bind:key="test.id">
                      <td class="table-cell router-link">
                        <router-link :to="{ name: 'Start', params: { id: test.id } }">
                          <span class="fs-6">{{ test.title }}</span>
                        </router-link>
                      </td>
                      <td>
                        {{ test.count }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div> <!-- /card-body -->
        </div> <!-- /card -->
      </div>
    </main>

  </section>
</div>
</template>

<script>
import TopBarApp from '@/components/TopBarApp'
import SkipNav from '@/components/SkipNav'
import { TestFactory } from '@/helpers/TestFactory'

export default {
  name: 'Home',

  components: {
    TopBarApp,
    SkipNav
  },

  data () {
    return {
      tests: null,
      examplesTab: [],
      conformanceTab: []
    }
  },

  methods: {

    initialize () {
      // Load tests
      this.tests = new TestFactory().load()

      this.tests.forEach((test) => {
        switch (test.id) {
          case "1":
          case "2":
          case "16":
          case "20":
          case "50":
          case "51":
            this.examplesTab.push(test)
            break
          default:
            this.conformanceTab.push(test)
            break
        }
      })

    }

  },

  created () {
    this.initialize()
  },

  mounted () {
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

section {
  display: -webkit-flex;
  display: flex;
  /* Set flex axis to vertical */
  flex-direction: column;
  /* Height = viewport height */
  min-height: 100vh;
}

header {
  /* no flex rules, it will grow */
}

main.test-controller-container {
  flex: 1 1 auto;
  overflow: auto;
  height: 5em;
  width: 100%;
}

.bg-gray {
  background: var(--bs-gray-300);
}

.main-content {
  width: calc(100% / 2);
  margin: 20px auto;
}

@media screen and (max-width:600px) {
  .main-content {
    width: calc(100% - 24px);
    margin: 20px auto;
  }
}

@media screen and (max-width:768px) {
  .main-content {
    width: calc(100% - 24px);
    margin: 20px auto;
  }
}

@media screen and (max-width:992px) {
  .main-content {
    width: calc(100% - 120px);
    margin: 20px auto;
  }
}

.table-cell.router-link a {
  font-weight: bold;
  text-decoration: none;
}

.table-cell.router-link a.router-link-exact-active {
}

.th-no-top {
  border-top: 0 solid;
}
</style>
