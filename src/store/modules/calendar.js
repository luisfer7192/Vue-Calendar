import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'
import moment from 'moment';
import { getWeeks, setEventData } from '../../utils';
import { getWeather } from '../api';

const state = {
  // add an event example for today
  events: {
    [moment(new Date()).format("DD-MM-YYYY")]: [
      {
        color: "#0083ff",
        date: moment(new Date()),
        time: moment(new Date()),
        title: "example of a long text in tag djsada djs akjd l",
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
  },
  currentDate: {
    date: moment(new Date()),
    text: moment(new Date()).format("MMMM YYYY")
  },
  selectedDay: {
    day: null,
    dayOfMonth: ''
  },
  dialog: false,
  weeks: []
}

const mutations = {
  changeMonth (state, isAdd) {
    let newDate = state.currentDate.date.clone();
    if (isAdd) {
      newDate.add(1, 'months');
    } else {
      newDate.subtract(1, 'months');
    }
    const currentDate =  {
      date: newDate,
      text: newDate.format("MMMM YYYY")
    };
    Vue.set(state, 'currentDate', currentDate);
  },
  setToday (state) {
    const date = moment(new Date());
    const currentDate =  {
      date: date,
      text: date.format("MMMM YYYY")
    };
    Vue.set(state, 'currentDate', currentDate);
  },
  closeDialog (state) {
    Vue.set(state, 'dialog', false);
  },
  openDialogCreate (state, day) {
    // eslint-disable-next-line
    console.log('day openDialogCreate', day);
    Vue.set(state, 'selectedDay', day);
    Vue.set(state, 'dialog', true);
  },
  setEvent (state, data) {
    const newData = setEventData(data);
    const dateIndex = newData.date.format("DD-MM-YYYY");
    if (state.events[dateIndex]) {
      state.events[dateIndex].push(newData);
    } else {
      state.events[dateIndex] = [newData];
    }
    const newEvents = state.events;
    Vue.set(state, 'events', newEvents);
    // refresh the list of weeks
    const weeks = getWeeks(state.currentDate.date.clone())
    Vue.set(state, 'weeks', weeks);
  },
  refreshWeeks (state) {
    const weeks = getWeeks(state.currentDate.date.clone())
    Vue.set(state, 'weeks', weeks);
  }
}

const actions = {
  async createEvent ({ commit }, payload) {
    const weather = await getWeather(payload.city.id);
    if (weather) {
      commit('setEvent', { event: payload, weather })
    } else {
      Toast.open({
        message: 'Error getting the weather',
        type: 'is-danger',
        position: 'is-bottom'
      });
    }
  }
}

const getters = {
  getCurrentDate (state) {
    // eslint-disable-next-line
    console.log('getCurrentDate', state.currentDate);
    return state.currentDate.date
  },
  getWeeks () {
    // eslint-disable-next-line
    console.log('getWeeks', state.weeks);
    return state.weeks;
  },
  getCurrentMonthText () {
    // eslint-disable-next-line
    console.log('getCurrentMonthText', state.currentDate);
    return state.currentDate.text;
  },
  getStatusDialog () {
    return state.dialog;
  },
  getSelectedDay () {
    return state.selectedDay;
  },
  getEvents () {
    return state.events;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
