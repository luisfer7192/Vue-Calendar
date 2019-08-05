<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item href="/">
        <img
            src="/images/logo.png"
            alt="Calendar logo"
            class="logo"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item @click.native="navigateTo('home')">
        Home
      </b-navbar-item>
      <b-navbar-item @click.native="navigateTo('calendarView')">
        Calendar
      </b-navbar-item>
      <b-navbar-item @click.native="setToday()" v-if="isPathCalendar">
        Today
      </b-navbar-item>
      <b-navbar-item @click.native="changeMonth(false)" v-if="isPathCalendar">
        <b-icon
          icon="chevron-left"
          size="is-medium">
        </b-icon>
      </b-navbar-item>
      <b-navbar-item @click.native="changeMonth(true)" v-if="isPathCalendar">
        <b-icon
          icon="chevron-right"
          size="is-medium">
        </b-icon>
      </b-navbar-item>
      <b-navbar-item v-if="isPathCalendar">
        {{currentMonthText}}
      </b-navbar-item>
      
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
          <p>Autor: Luis Fernando Salazar Buitrago</p>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapMutations([ 'changeMonth', 'setToday' ]),
    navigateTo(name) {
      // eslint-disable-next-line
      console.log({name});
      this.$router.push({ name });
    }
  },
  computed: {
    ...mapGetters({ currentMonthText: 'getCurrentMonthText' }),
    isPathCalendar () {
      return this.$route.name === 'calendarView';
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>
