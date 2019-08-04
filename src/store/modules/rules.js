// import Vue from 'vue'
// import { getRules, createRule, updateRule, deleteRule } from '../api'

// const state = {
//   rules: [],
//   currentRule: null
// }

// const mutations = {
//   setRules (state, rules) {
//     // Avoid erros if the caller_id is null
//     rules.map(rule => {
//       // return ruleRefactor(rule)
//       console.log(rule)
//     })
//     state.rules = rules
//   },
//   setCurrentRule (state, rule) {
//     state.currentRule = { ...rule }
//   },
//   setAddPuzzle (state) {
//     // set new puzzle with the all fields null
//     state.currentRule = {
//       active: false,
//       audio_file: {
//         name: '',
//         url: ''
//       },
//       busy: null,
//       caller_id: {
//         blocked: false,
//         day: null,
//         day_relative: false,
//         hour: null,
//         hour_relative: false,
//         min: null,
//         min_relative: false,
//         month: null,
//         month_relative: false,
//         name: null,
//         number: null
//       },
//       change_flag: false,
//       command_number_pattern: null,
//       custom_vm_greetings_audio_file: null,
//       custom_vm_invalid_pin_audio_file: null,
//       custom_vm_timeout_audio_file: null,
//       delayed_start: 0,
//       dialed_number_pattern: 0,
//       disabled: false,
//       id: null,
//       max_retries: 0,
//       name: null,
//       once_only: false,
//       pin: null,
//       position: state.rules.length,
//       required_flag_state: false,
//       required_input_state: false,
//       required_virtual_input_state: null,
//       reset_puzzle: false,
//       retry_afer_delay: 0,
//       ring_duration: [0, 0],
//       simulate_power_outage: null,
//       solve_puzzle: false,
//       special_info: null,
//       type: 'outgoing',
//       wait_for_playback_completion: false
//     }
//   },
//   addRule (state, rule) {
//     // state.rules.push(ruleRefactor(rule))
//     console.log(rule)
//   },
//   updateRule (state, updatedRule) {
//     const index = state.rules.findIndex(rule => rule.id === updatedRule.id)
//     Vue.set(state.rules, index, updatedRule)
//   },
//   removeRule (state, ruleId) {
//     const record = state.rules.find(element => element.id === ruleId)
//     state.rules.splice(state.rules.indexOf(record), 1)
//   }
// }

// const actions = {
//   async getActionRules ({ commit }, puzzleId) {
//     const rules = await getRules(puzzleId)
//     if (rules) {
//       commit('setRules', rules)
//     } else {
//       const message = { type: 'danger', message: 'Error getting list of rules, please try again' }
//       commit('setNotificationMessage', message)
//     }
//   },
//   async actionCreateRule ({ commit, getters }, payload) {
//     const rule = await createRule(payload, getters.getSelectedPuzzle.id)
//     let message = { type: 'danger', message: 'Error creating rule, please try again' }
//     if (rule) {
//       commit('addRule', rule)
//       message = { type: 'success', message: 'Rule successfully created' }
//     }
//     commit('setNotificationMessage', message)
//   },
//   async actionUpdatedRule ({ commit }, payload) {
//     const response = await updateRule(payload)
//     let message = { type: 'danger', message: 'Error updating rule, please try again' }
//     if (response) {
//       commit('updateRule', payload)
//       message = { type: 'success', message: 'Puzzle successfully updated' }
//     }
//     commit('setNotificationMessage', message)
//   },
//   async actionDeleteRule ({ commit }, payload) {
//     const response = await deleteRule(payload)
//     let message = { type: 'danger', message: 'Error deleting rule, please try again' }
//     if (response) {
//       commit('removeRule', payload)
//       message = { type: 'success', message: 'Rule successfully deleted' }
//     }
//     commit('setNotificationMessage', message)
//   },
//   resetCurrentRule ({ commit, state }) {
//     if (state.currentRule.id) {
//       const ruleId = state.currentRule.id
//       const record = state.rules.find(element => element.id === ruleId)
//       commit('setCurrentRule', record)
//     } else {
//       commit('setAddPuzzle')
//     }
//   }
// }

// const getters = {
//   getRules (state) {
//     return state.rules
//   },
//   getCurrentRule (state) {
//     return state.currentRule
//   },
//   getCurrentRuleId (state) {
//     return state.currentRule ? state.currentRule.id : null
//   },
//   getVisibleRuleScreen (state) {
//     return state.currentRule !== null
//   }
// }

// export default {
//   state,
//   mutations,
//   actions,
//   getters
// }
