<template>
  <div class="column is-2 day" :class="{ disable: !day.day }" @click="openCreate()">
    <span class="dayText" :class="{ currentDate: isCurrentDate }">{{day.dayOfMonth}}</span>
    <b-taglist class="tagGroup">
        <b-tag v-for="(event, index) in getEvetnsDay" :key="index" class="tagContainer" @click.native.stop="openEdit(event)" :type="event.color">
          <img
            v-if="event.weather"
            :src="eventSrcWeather(event)"
            :alt="eventNameWeather(event)"
            class="weather"
          />
          <b-tooltip :label="tooltipText(event)">
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
    ...mapMutations([ 'openDialogCreate', 'openDialogEdit' ]),
    openCreate () {
      if (this.day.day) {
        this.openDialogCreate(this.day);
      }
    },
    openEdit (event) {
      if (this.day.day) {
        this.openDialogEdit({event, day: this.day});
      }
    },
    eventSrcWeather (event) {
      return `http://openweathermap.org/img/wn/${event.weather.icon}.png`;
    },
    eventNameWeather (event) {
      return event.weather.main;
    },
    tooltipText (event) {
      const weather = this.eventNameWeather(event);
      const time = event.time.format("hh:mm A");
      return `Weather: ${weather}, time: ${time}, title: ${event.title}`
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
      if (this.day.day) {
        const dateIndex = this.day.day.format("DD-MM-YYYY");
        const eventsDay = this.events[dateIndex] ? this.events[dateIndex] : [];
        return eventsDay.sort((a, b) => a.time.valueOf() - b.time.valueOf());
      }
      return [];
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>