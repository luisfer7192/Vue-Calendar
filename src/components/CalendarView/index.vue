<template>
  <div class="hello">
    <p>I am the Calendar view body</p>
    <button @click="navigateToHome" >Go to Home</button>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  methods: {
    navigateToHome() {
        this.$router.push({ name: 'home' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"> </style>