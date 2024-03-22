<template>
  <div>
    <hr />
    <div v-html="printedOutput"></div>
  </div>
</template>

<script>
export default {
  name: 'DisplayState',

  props: {
  },

  data () {
    return {
      printedOutput: null
    }
  },

  methods: {
    clear () {
      this.printedOutput = ''
    },

    printState (state, isAdaptive) {
      if (state === null) return
      const rv = this.printResponseVariables(state)
      const ov = this.printOutcomeVariables(state, isAdaptive)
      this.printedOutput = `${rv}${ov}`
    },

    printResponseVariables (state) {
      //eslint-disable-next-line
      if (!state.hasOwnProperty('responseVariables')) return

      let header = `<div class="table-responsive"><table class="table table-striped table-display-state table-sm"><thead>
        <tr><th class="w-50"><strong>Response Variables</strong></th><th class="w-50"><strong>Value</strong></th></tr></thead>
        <tbody>`

      let s = ''

      state.responseVariables.forEach((responseVariable) => {
        const value = JSON.stringify(responseVariable.value, undefined, 2)
        s += `<tr><td>${responseVariable.identifier}</td><td>${value}</td></tr>`
      })

      return `${header}${s}</tbody></table></div>`
    },

    printOutcomeVariables (state, isAdaptive) {
      //eslint-disable-next-line
      if (!state.hasOwnProperty('outcomeVariables')) return

      let header = `<div class="table-responsive mt-4"><table class="table table-striped table-display-state table-sm"><thead>
        <tr><th class="w-50"><strong>Outcome Variables</strong></th><th class="w-50"><strong>Value</strong></th></tr></thead>
        <tbody>`

      let s = ''

      state.outcomeVariables.forEach((outcomeVariable) => {
        // Skip completionStatus when not adaptive
        if ((outcomeVariable.identifier === 'completionStatus') && !isAdaptive) return
        const value = JSON.stringify(outcomeVariable.value, undefined, 2)
        s += `<tr><td>${outcomeVariable.identifier}</td><td>${value}</td></tr>`
      })

      return `${header}${s}</tbody></table></div>`
    }

  },

  mounted () {
  }
}
</script>

<style>
.table-display-state {
  font-size: smaller;
  line-height: 0.875rem;
  border: 1px solid black;
}
</style>