/* eslint-disable */
const tests = [
  {
    "id": "1",
    "title": "Example Adaptive Items with Card",
    "description": "Demonstrates QTI3 Player adaptive items with a \"card\" style, a qti-end-attempt controller bar and item cloning.",
    "count": "3",
    "items": [
      {
        "identifier": "card-08a-baseline",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "simultaneous"
        }
      },
      {
        "identifier": "adaptivecard-08c-showexample",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "simultaneous"
        }
      },
      {
        "identifier": "adaptivecard-08b-solvethis",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "simultaneous"
        }
      }
    ]
  },
  {
    "id": "2",
    "title": "L2 - I19b Shared CSS",
    "description": "Demonstrates QTI3 Player support for all Level 2 conformance tests of Shared CSS.",
    "count": "6",
    "items": [
      {
        "identifier": "i19b-shared-css-vocab-1",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "individual"
        }
      },
      {
        "identifier": "i19b-shared-css-vocab-2",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "individual"
        }
      },
      {
        "identifier": "i19b-shared-css-vocab-3",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "individual"
        }
      },
      {
        "identifier": "i19b-shared-css-vocab-4",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "individual"
        }
      },
      {
        "identifier": "i19b-shared-css-vocab-5",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "individual"
        }
      },
      {
        "identifier": "i19b-shared-css-vocab-6",
        "sessionControl": {
          "showFeedback": true,
          "validateResponses": false,
          "submissionMode": "individual"
        }
      }
    ]
  }
]

/* eslint-enable */
export class TestFactory {

  constructor () {
    this.tests = tests
    return this
  }

  load () {
    return this.tests
  }

  getById (id) {
    return this.tests.find(test => test.id === id)
  }

}
