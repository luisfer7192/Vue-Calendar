<template>
  <div class="column day" :class="{ disable: !day.day }" @click="openCreate()">
    <span class="dayText" :class="{ currentDate: isCurrentDate }">{{day.dayOfMonth}}</span>
  </div>
</template>

<script>
import moment from 'moment';
import { mapMutations } from 'vuex';

export default {
  name: 'Day',
  props: {
    day: Object
  },
  methods: {
    ...mapMutations([ 'openDialogCreate' ]),
    openCreate () {
      if (this.day.day) {
        this.openDialogCreate(this.day);
      }
    }
  },
  computed: {
    isCurrentDate () {
      if (!this.day.day) {
        return false;
      }
      return moment(new Date()).isSame(this.day.day, 'day');
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>