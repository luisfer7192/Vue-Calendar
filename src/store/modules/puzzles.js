// import { getPuzzles, createPuzzles, deletePuzzles, updatePuzzles } from '../api'

// const state = {
//   puzzles: [],
//   selectedPuzzle: null,
//   activePuzzle: null,
//   deletePuzzleDialog: false,
//   addPuzzleDialog: false,
//   dialogId: null
// }

// const mutations = {
//   setPuzzles (state, puzzles) {
//     state.puzzles = puzzles
//   },
//   setSelectedPuzzle (state, selected) {
//     state.selectedPuzzle = selected
//     // state.currentRule = null
//   },
//   setDeletePuzzleDialog (state, { status, id }) {
//     state.deletePuzzleDialog = status
//     state.dialogId = id
//   },
//   setAddPuzzleDialog (state, status) {
//     state.addPuzzleDialog = status
//   },
//   addPuzzleToData (state, puzzle) {
//     state.puzzles.push(puzzle)
//   },
//   setActivePuzzle (stete, puzzleId) {
//     state.puzzles.map(puzzle => {
//       if (puzzle.id === puzzleId) {
//         puzzle.active = true
//       } else {
//         puzzle.active = false
//       }
//       return puzzle
//     })
//   },
//   removePuzzleList (puzzleId) {
//     const record = state.puzzles.find(element => element.id === puzzleId)
//     state.puzzles.splice(state.puzzles.indexOf(record), 1)
//   }
// }

// const actions = {
//   async getActionPuzzles ({ commit }) {
//     const puzzles = await getPuzzles()
//     if (puzzles) {
//       commit('setPuzzles', puzzles)
//     } else {
//       const message = { type: 'danger', message: 'Error getting list of puzzles, please try again' }
//       commit('setNotificationMessage', message)
//     }
//   },
//   async setPuzzleActive ({ commit }, puzzleId) {
//     await updatePuzzles({ active: true }, puzzleId)
//     commit('setActivePuzzle', puzzleId)
//   },
//   async createPuzzle ({ commit }, payload) {
//     const response = await createPuzzles(payload)
//     let message = { type: 'danger', message: 'Error creating puzzle, please try again' }
//     if (response) {
//       commit('setAddPuzzleDialog', false)
//       commit('addPuzzleToData', response)
//       message = { type: 'success', message: 'Puzzle successfully created' }
//     }
//     commit('setNotificationMessage', message)
//   },
//   async deletePuzzle ({ commit, state }) {
//     const puzzleId = state.dialogId
//     const response = await deletePuzzles(puzzleId)
//     let message = { type: 'danger', message: 'Error deleting puzzle, please try again' }
//     if (response) {
//       commit('removePuzzleList', puzzleId)
//       message = { type: 'success', message: 'Puzzle successfully deleted' }
//     }
//     commit('setNotificationMessage', message)
//   }
// }

// const getters = {
//   getPuzzles (state) {
//     return state.puzzles
//   },
//   getSelectedPuzzle (state) {
//     return state.selectedPuzzle
//   },
//   getDeletePuzzleDialog (state) {
//     return state.deletePuzzleDialog
//   },
//   getAddPuzzleDialog (state) {
//     return state.addPuzzleDialog
//   }
// }

// export default {
//   state,
//   mutations,
//   actions,
//   getters
// }
