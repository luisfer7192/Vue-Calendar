<template>
  <div class="columns root">
    <div class="column is-half is-offset-one-quarter">
      <h4 class="centerText title">Welcome to my Calendar</h4>
      <p class="centerText">This is an example of a Calendar in VueJs.</p>
      <p class="centerText">Using Vuex, Buefy, Jest</p>
      <p class="centerText">You can move between months</p>
      <p class="centerText">Create, Edit, Delete events</p>
      <p class="centerText">In the header you can go to Calendar.</p>
      <p class="centerText">I hope you enjoy it!.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sayHi: 'Hi world'
    }
  },
  methods: {
    navigateToSecondView() {
        this.$router.push({ name: 'calendarView' });
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>