<template>
<div class="home">
  <section class="bg-gray">
    <SkipNav skipid="#main" />
    <header>
      <TopBarApp
        ref="topbar"
      />
    </header>

    <!-- Available Tests Page -->
    <main id="main" class="test-controller-container container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="start-test-content">
            <h1 class="visually-hidden">Test Samples Page</h1>
            <div class="card">
              <div class="card-header" aria-hidden="true">
                Available Tests
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="test in tests" v-bind:key="test.id">
                      <th scope="row">
                        {{ test.id }}
                      </th>
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
            </div>
          </div>
        </div>
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
    }
  },

  methods: {

    initialize () {
      // Load tests
      this.tests = new TestFactory().load()
    }

  },

  mounted () {
    this.initialize()
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

.bg-lightan {
  background: linear-gradient(to bottom, rgba(33,90,231,0.1) 30%, #fff 100%);
}

.bg-gray {
  background: var(--bs-gray-300);
}

/* Inner start test panel */
.start-test-content {
  margin: 20px auto;
}

.table-cell.router-link a {
  font-weight: bold;
  text-decoration: none;
}

.table-cell.router-link a.router-link-exact-active {
}
</style>
