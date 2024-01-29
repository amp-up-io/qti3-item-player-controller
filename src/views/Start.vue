<template>
  <div class="start">
    <section class="bg-gray">
      <SkipNav skipid="#main" />
      <header>
        <TopBarApp
          ref="topbar"
        />
      </header>

      <!-- Start Test Page -->
      <main id="main" class="test-controller-container container-fluid">
        <div class="main-content">
          <h1 class="visually-hidden">Start Test Page</h1>
          <div v-for="(test,index) in tests" :key="index">
            <div v-if="test.id == id">
              <StartPanel
                :title="test.title"
                :description="test.description"
                :max-items="test.count"
                @start="handleStart(index)"
              />
            </div>
          </div>
        </div>
      </main>

    </section>
  </div>
</template>

<script>
import TopBarApp from '@/components/TopBarApp'
import StartPanel from '@/components/StartPanel'
import SkipNav from '@/components/SkipNav'
import { TestFactory } from '@/helpers/TestFactory'

export default {
  name: 'Start',

  components: {
    TopBarApp,
    StartPanel,
    SkipNav
  },

  data () {
    return {
      tests: null,
      id: null,
    }
  },

  methods: {

    initialize () {
      // Load the test id
      this.id = this.$route.params.id
      // Load tests
      this.tests = new TestFactory().load()
    },

    handleStart () {
      this.$router.push({
        name:'Test',
        params: {
          id: this.id
        }
      })
    }

  },

  mounted () {
    this.initialize()
  }
}
</script>
