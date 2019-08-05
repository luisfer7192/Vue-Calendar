<template>
  <form @submit.prevent="onSubmit">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Event on {{ dayInText }}</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-12">
            <b-field label="Title" :type="{'is-danger': errors.has('title')}" :message="errors.first('title')">
              <b-input
                v-model="title"
                name="title"
                placeholder="Add title"
                v-validate="'required|max:30'"
                icon="text">
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field label="Select a date" :type="{'is-danger': errors.has('date')}" :message="errors.first('date')">
              <b-datepicker
                placeholder="Click to select..."
                icon="calendar-today"
                :value="date"
                name="date"
                v-validate="'required'">
              </b-datepicker>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Select time" :type="{'is-danger': errors.has('time')}" :message="errors.first('time')">
              <b-clockpicker
                placeholder="Click to select..."
                icon="clock"
                :value="time"
                name="time"
                v-validate="'required'">
              </b-clockpicker>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field label="City" :type="{'is-danger': errors.has('cityName')}" :message="errors.first('cityName')">
                <b-autocomplete
                    v-model="cityName"
                    name="cityName"
                    :data="filteredCities"
                    field="name"
                    :open-on-focus="true"
                    placeholder="Select a city"
                    icon="magnify"
                    @select="option => citySelected = option"
                    v-validate="'required'">
                    <template slot="empty">No results found</template>
                </b-autocomplete>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Color" :type="{'is-danger': errors.has('color')}" :message="errors.first('color')">
              <b-select placeholder="Select a color" expanded icon="palette" v-model="color" name="color" v-validate="'required'">
                <option
                  v-for="(option, index) in colors"
                  :value="option.value"
                  :key="index">
                    {{ option.name }}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="closeDialog()">Close</button>
        <button type="submit" class="button is-primary">Create</button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
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
  mounted () {
    const newDay = this.selectedDay ? this.selectedDay.day.toDate() : new Date();
    this.date = newDay;
    this.time = newDay;
  },
  methods: {
    ...mapActions([ 'createEvent' ]),
    ...mapMutations([ 'closeDialog' ]),
    onSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return this.createEvent({ title: this.title, date: this.date, time: this.time, city: this.citySelected, color: this.color });
        }
        this.$buefy.toast.open({
          message: 'Form is not valid! Please check the fields.',
          type: 'is-danger',
          position: 'is-bottom'
        })
      });
    }
  },
  computed: {
    ...mapGetters({ selectedDay: 'getSelectedDay' }),
    filteredCities() {
      return citiesJson.filter((option) => {
        return option.name
          .toString()
          .toLowerCase()
          .indexOf(this.cityName.toLowerCase()) >= 0;
      })
    },
    dayInText() {
      return this.selectedDay.day.format("dddd, MMMM Do YYYY");
    }
  }
}
</script>

<style scoped src="./styles.css"> </style>