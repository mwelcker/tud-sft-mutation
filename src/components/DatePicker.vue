<template>
  <div>
    <input v-model="date" type="date" @input="emitDate">
    {{ date }}
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
