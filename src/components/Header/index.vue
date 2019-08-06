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
      <b-navbar-item @click.native="actionSetToday()" v-if="isPathCalendar">
        Today
      </b-navbar-item>
      <b-navbar-item @click.native="actionChangeMonth(false)" v-if="isPathCalendar">
        <b-icon
          icon="chevron-left"
          size="is-medium">
        </b-icon>
      </b-navbar-item>
      <b-navbar-item @click.native="actionChangeMonth(true)" v-if="isPathCalendar">
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions([ 'actionChangeMonth', 'actionSetToday' ]),
    navigateTo(name) {
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
