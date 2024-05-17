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
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab3" role="tab">
                  <strong>
                    <span class="d-block d-sm-none"><i class="far fa-list-alt"></i></span>
                    <span class="d-none d-sm-block">Upload</span>
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
              
              <div class="tab-pane" id="tab3" role="tabpanel">
                <table class="table table-sm w-100">
                  <thead>
                    <tr>
                      <th scope="col" class="th-no-top text-muted">Title</th>
                      <th scope="col" class="th-no-top text-muted">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="test in uploadsTab" v-bind:key="test.id">
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
                <label>
                  Upload an .xml file containing a qti-assessment-item
                  <input
                    type="file"
                    webkitdirectory directory
                    name="upload"
                    @change="onFileChanged($event)"
                  />
                </label>
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
import { ItemFactory } from '@/helpers/ItemFactory'
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
      conformanceTab: [],
      uploadsTab: [],
    }
  },

  methods: {

    initialize () {
      // Load tests
      this.testFactory = TestFactory.instance();
      this.tests = this.testFactory.load()

      this.tests.forEach((test) => {
        if ('category' in test && `${test.category}Tab` in this) {
          this[`${test.category}Tab`].push(test)
          return;
        }
        switch (test.id) {
          case "1":
          case "2":
          case "16":
          case "20":
          case "50":
            this.examplesTab.push(test)
            break
          default:
            this.conformanceTab.push(test)
            break
        }
      })

    },
    onFileChanged($event) {
      const target = $event.target;
      if (target && target.files && target.files[0]) {
        const files = {};

        for (const file of target.files) {
          files[file.webkitRelativePath.split('/').slice(1).join('/')] = file;
        }

        const manifest = files['imsmanifest.xml'];
        const assessment = files['assessment.xml'];

        const loadText = (file) => new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => resolve(e.target.result);
          reader.readAsText(file);
        })
        const loadXML = (file) => loadText(file).then(
          text => parser.parseFromString(text, "application/xml")
        )
        const loadDataURL = (file) => new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = e => resolve(e.target.result);
          reader.readAsDataURL(file);
        })

        const itemFactory = ItemFactory.instance();
        const vm = this;

        const parser = new DOMParser();
        const serializer = new XMLSerializer();
        Promise.all([loadXML(manifest), assessment ? loadXML(assessment) : undefined]).then(([manifestDoc, assessmentDoc]) => {
          const submissionMode = assessmentDoc?.querySelector('[submission-mode]')?.getAttribute('submission-mode') || 'individual'

          Promise.all(Array.from(manifestDoc.querySelectorAll('resource[type="imsqti_item_xmlv3p0"]')).map(resourceNode => {
            const identifier = resourceNode.getAttribute('identifier');
            const resourceHref = resourceNode.getAttribute('href');
           
            return loadXML(files[resourceHref]).then(itemDOC => {

              return Promise.all(Array.from(resourceNode.querySelectorAll(`file:not([href="${resourceHref}"])`)).map(fileNode => {
                const fileHref = fileNode.getAttribute('href');
                loadDataURL(files[fileHref]).then(fileData => {
                  itemDOC.querySelectorAll(`[src="${fileHref}"]`).forEach(thing => thing.setAttribute('src', fileData));
                });
              })).then(() => {
                return itemFactory.pushItem(identifier, submissionMode, serializer.serializeToString(itemDOC));
              });
            });
          })).then(items => {
            const test = vm.testFactory.pushTest(`Test Upload ${new Date().toISOString()}`, '', submissionMode, items);
            vm.tests = vm.testFactory.load();
            this.uploadsTab.push(test);
          });
        });
      }
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
