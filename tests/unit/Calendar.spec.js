import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Calendar from '@/components/CalendarView/Calendar'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Calendar', () => {
  let mutations
  let getters
  let store

  beforeEach(() => {
    mutations = {
      refreshWeeks: jest.fn(),
      actionInput: jest.fn()
    }
    getters = {
      getWeeks: () => []
    }
    store = new Vuex.Store({
      mutations,
      getters
    })
  })

  it('calls store action "refreshWeeks" in mounted', () => {
    const wrapper = shallowMount(Calendar, { store, localVue })
    expect(mutations.refreshWeeks).toHaveBeenCalled()
  })
})