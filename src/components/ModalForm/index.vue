<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Event</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-12">
            <b-field label="Title">
              <b-input
                :value="title"
                placeholder="Add title"
                required
                maxlength="30">
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field label="Select a date">
              <b-datepicker
                placeholder="Click to select..."
                icon="calendar-today"
                :value="date"
                required>
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Select time">
              <b-clockpicker
                placeholder="Click to select..."
                icon="clock"
                :value="time"
                required>
              </b-clockpicker>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field label="City">
                <b-autocomplete
                    v-model="cityName"
                    :data="filteredCities"
                    field="name"
                    :open-on-focus="true"
                    placeholder="Select a city"
                    icon="magnify"
                    @select="option => citySelected = option"
                    required>
                    <template slot="empty">No results found</template>
                </b-autocomplete>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Color">
              <b-select placeholder="Select a color" expanded required>
                <option
                    v-for="(option, index) in colors"
                    :value="option.value"
                    :key="index"
                    v-model="color">
                    {{ option.name }}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="closeDialog()">Close</button>
        <button class="button is-primary">Create</button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
// I remove a lot of cities. just use some of them
import citiesJson from '../../data/openweather_cities.json';

export default {
  name: 'ModalForm',
  data: function () {
    return {
      title: '',
      time: new Date(),
      date: new Date(),
      cityName: '',
      citySelected: null,
      color: '',
      colors: [
        { name: 'Red', value: '#ff0000' },
        { name: 'Blue', value: '#0083ff' },
        { name: 'Green', value: '#04f739' },
        { name: 'Black', value: '#000000' },
        { name: 'Pink', value: '#f9c0c0' }
      ]
    }
  },
  methods: {
    ...mapMutations([ 'closeDialog' ])
  },
  computed: {
    filteredCities() {
      return citiesJson.filter((option) => {
        return option.name
          .toString()
          .toLowerCase()
          .indexOf(this.cityName.toLowerCase()) >= 0;
      })
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>