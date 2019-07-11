<template>
  <div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input
        v-model="date"
        type="date"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        @input="emitDate"
      >
    </div>
    <input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    }
  },
  methods: {
    emitDate() {
      this.$emit('input', new Date(this.date))
    }
  }
}
</script>

<style scoped>

</style>
