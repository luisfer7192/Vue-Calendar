<template>
  <div class="hello">
    <p>I am the home body</p>
    <button @click="navigateToSecondView" >Go to Second View {{ sayHi }}</button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>