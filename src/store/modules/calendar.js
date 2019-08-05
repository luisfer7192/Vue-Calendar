import Vue from 'vue'
import moment from 'moment';
import { getWeeks } from '../../utils';

const state = {
  events: [],
  currentDate: {
    date: moment(new Date()),
    text: moment(new Date()).format("MMMM YYYY")
  },
  dialog: false
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
    console.log('day', day);
    Vue.set(state, 'dialog', true);
  }
}

const actions = {
  
}

const getters = {
  getCurrentDate (state) {
    // eslint-disable-next-line
    console.log('getCurrentDate', state.currentDate);
    return state.currentDate.date
  },
  getWeeks () {
    // eslint-disable-next-line
    console.log('getWeeks', state.currentDate);
    return getWeeks(state.currentDate.date.clone());
  },
  getCurrentMonthText () {
    // eslint-disable-next-line
    console.log('getCurrentMonthText', state.currentDate);
    return state.currentDate.text;
  },
  getStatusDialog () {
    return state.dialog;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
