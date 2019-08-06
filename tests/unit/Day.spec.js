import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import moment from 'moment'
import Day from '@/components/CalendarView/Day'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Buefy)

describe('Day', () => {
  let mutations
  let state
  let store
  const currentDate = moment(new Date())

  beforeEach(() => {
    mutations = {
      openDialogCreate: jest.fn(),
      openDialogEdit: jest.fn()
    }
    state = {
      events: {
        [currentDate.format("DD-MM-YYYY")]: [
          {
            id: '1',
            color: "is-info",
            date: currentDate,
            time: currentDate,
            title: "example of a long text in the tag",
            city: {
              country: "PH",
              id: 1688216,
              name: "Santa Cruz"
            },
            weather: {
              description: "light rain",
              icon: "10n",
              id: 500,
              main: "Rain"
            }
          }
        ]
      }
    }
    store = new Vuex.Store({
      mutations,
      state
    })
  })

  it('calls store action "openDialogEdit" when tag is clicked', () => {
    const wrapper = shallowMount(Day, { store, localVue, propsData: { 
      day: {
        day: currentDate,
        dayOfMonth: '8'
      },
      events: state.events
    }})
    wrapper.find('.tagContainer').trigger('click')
    expect(mutations.openDialogEdit).toHaveBeenCalled()
  })

  it('calls store action "openDialogCreate" when day is clicked', () => {
    const wrapper = shallowMount(Day, { store, localVue, propsData: { 
      day: {
        day: currentDate,
        dayOfMonth: '8'
      },
      events: state.events
    }})
    wrapper.find('.day').trigger('click')
    expect(mutations.openDialogCreate).toHaveBeenCalled()
  })
})