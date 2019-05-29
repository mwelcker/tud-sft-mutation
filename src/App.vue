<template>
  <div>
    <h2>Please verify that you are older than 18</h2>
    <DatePicker @input="setDate" />
    <PageAccess :date="date" />
  </div>
</template>

<script>
import PageAccess from 'components/PageAccess'
import DatePicker from 'components/DatePicker'

export default {
  components: { PageAccess, DatePicker },
  data() {
    return {
      date: null
    }
  },
  methods: {
    setDate(newDate) {
      this.date = newDate
    }
  }
}
</script>
