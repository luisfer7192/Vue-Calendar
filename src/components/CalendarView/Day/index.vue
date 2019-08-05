<template>
  <div class="column day" :class="{ disable: !day.day }" @click="openCreate()">
    <span class="dayText" :class="{ currentDate: isCurrentDate }">{{day.dayOfMonth}}</span>
    <b-taglist>
        <b-tag type="is-info" v-for="(event, index) in getEvetnsDay" :key="index" class="tagContainer">
          <img
            v-if="event.weather"
            :src="eventSrcWeather(event)"
            :alt="eventNameWeather(event)"
            class="weather"
          />
          <b-tooltip :label="'Weather: ' +eventNameWeather(event) + ', title: ' + event.title">
            <span class="tagTitle">{{ event.title }}</span>
          </b-tooltip>
        </b-tag>
    </b-taglist>
  </div>
</template>

<script>
import moment from 'moment';
import { mapMutations } from 'vuex';

export default {
  name: 'Day',
  props: {
    day: Object,
    events: Object
  },
  methods: {
    ...mapMutations([ 'openDialogCreate' ]),
    openCreate () {
      if (this.day.day) {
        this.openDialogCreate(this.day);
      }
    },
    eventSrcWeather (event) {
      return `http://openweathermap.org/img/wn/${event.weather.icon}.png`;
    },
    eventNameWeather (event) {
      return event.weather.main;
    }
  },
  computed: {
    isCurrentDate () {
      if (!this.day.day) {
        return false;
      }
      return moment(new Date()).isSame(this.day.day, 'day');
    },
    getEvetnsDay () {
      // eslint-disable-next-line
      console.log('this.events', this.events, this.day.day);
      if (this.day.day) {
        const dateIndex = this.day.day.format("DD-MM-YYYY");
        return this.events[dateIndex] ? this.events[dateIndex] : [];
      }
      return [];
    }
  },
  events: {
    events(newVal, oldVal) {
      // eslint-disable-next-line
      console.log({newVal, oldVal});
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>