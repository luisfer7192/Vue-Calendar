<template>
  <div class="column is-12">
    <div class="columns column is-12 week header">
      <div class="column day" v-for="(day, index) in days" :key="index">{{day}}</div>
    </div>
    <div class="columns column is-12 week body" v-for="(week, index) in weeks" :key="index">
      <Day v-for="(day, dayIndex) in week" :key="dayIndex" :day="day" :events="events" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Day from '../Day';

export default {
  name: 'Calendar',
  components: {
    Day
  },
  data: function () {
    return {
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      // events: {}
    }
  },
  mounted() {
    this.refreshWeeks();
  },
  methods: {
    ...mapMutations([ 'refreshWeeks' ])
  },
  computed: {
    ...mapGetters({ currentDate: 'getCurrentDate', weeks: 'getWeeks', events: 'getEvents' })
  }
}
</script>

<style scoped src="./styles.css"> </style>