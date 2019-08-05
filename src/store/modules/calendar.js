import Vue from 'vue'
import { ToastProgrammatic as Toast } from 'buefy'
import moment from 'moment';
import { getWeeks, setEventData, uniqId } from '../../utils';
import { getWeather } from '../api';

const state = {
  // add an event example for today
  events: {
    [moment(new Date()).format("DD-MM-YYYY")]: [
      {
        id: uniqId(),
        color: "is-info",
        date: moment(new Date()),
        time: moment(new Date()),
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
  },
  currentDate: {
    date: moment(new Date()),
    text: moment(new Date()).format("MMMM YYYY")
  },
  currentEvent: null,
  selectedDay: {
    day: null,
    dayOfMonth: ''
  },
  dialog: false,
  weeks: [],
  isLoading: false
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
    Vue.set(state, 'selectedDay', day);
    Vue.set(state, 'currentEvent', null);
    Vue.set(state, 'dialog', true);
  },
  openDialogEdit (state, {event, day}) {
    Vue.set(state, 'selectedDay', day);
    Vue.set(state, 'currentEvent', event);
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
    Vue.set(state, 'events', state.events);
  },
  refreshWeeks (state) {
    const weeks = getWeeks(state.currentDate.date.clone())
    Vue.set(state, 'weeks', weeks);
  },
  deleteEvent (state) {
    const dateIndex = state.selectedDay.day.format("DD-MM-YYYY");
    const currentEventId = state.currentEvent.id;
    const record = state.events[dateIndex].find(element => element.id === currentEventId);
    state.events[dateIndex].splice(state.events[dateIndex].indexOf(record), 1);
    Vue.set(state, 'events', state.events);
  },
  setIsLoading (state, status) {
    Vue.set(state, 'isLoading', status);
  }
}

const actions = {
  async createEvent ({ commit }, payload) {
    commit('setIsLoading', true);
    const weather = await getWeather(payload.city.id);
    if (!weather) {
      Toast.open({
        message: 'Error getting the weather',
        type: 'is-danger',
        position: 'is-bottom'
      });
      return;
    }
    commit('setEvent', { event: payload, weather });
    commit('refreshWeeks');
    commit('setIsLoading', false);
    commit('closeDialog');
  },
  async editEvent ({ commit }, payload) {
    commit('setIsLoading', true);
    const weather = await getWeather(payload.city.id);
    if (!weather) {
      Toast.open({
          message: 'Error getting the weather',
          type: 'is-danger',
          position: 'is-bottom'
      });
      return;
    }
    commit('deleteEvent')
    commit('setEvent', { event: payload, weather });
    commit('refreshWeeks');
    commit('setIsLoading', false);
    commit('closeDialog');
  },
  deleteEvent ({commit}) {
    commit('deleteEvent')
    commit('refreshWeeks');
    commit('closeDialog');
  },
  actionChangeMonth ({ commit }, isAdd) {
    commit('changeMonth', isAdd);
    commit('refreshWeeks');
  },
  actionSetToday ({ commit }) {
    commit('setToday');
    commit('refreshWeeks');
  }
}

const getters = {
  getCurrentDate (state) {
    return state.currentDate.date
  },
  getWeeks () {
    return state.weeks;
  },
  getCurrentMonthText () {
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
  },
  getCurrentEvent () {
    return state.currentEvent;
  },
  getIsLoading () {
    return state.isLoading;    
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
