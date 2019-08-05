<template>
  <div class="columns root">
    <Calendar />
    <b-modal :active="dialog" has-modal-card :on-cancel="closeDialog">
      <ModalForm />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Calendar from './Calendar';
import ModalForm from '../ModalForm';

export default {
  name: 'CalendarView',
  components: {
    Calendar,
    ModalForm
  },
  methods: {
    ...mapMutations([ 'closeDialog' ])
  },
  computed: {
    ...mapGetters({ dialog: 'getStatusDialog' })
  }
}
</script>

<style scoped src="./styles.css"> </style>