<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/3">
      <h1 class="font-hairline mb-6 text-center">
        Login to our Website
      </h1>
      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <div class="mb-4">
          <h1 class="mx-auto">
            Please verify that you are older than 18
          </h1>
          <DatePicker @input="setDate" />
          <PageAccess :date="date" />
        </div>
        <div class="flex items-center justify-between">
          <a
            class="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
            href="#"
          >
            There are some mistakes here, maybe you can find them before the mutants....
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageAccess from './components/PageAccess'
import DatePicker from './components/DatePicker'

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
