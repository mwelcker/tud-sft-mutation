<template>
  <div>
    <button @click="verify">
      Verify
    </button>
    {{ msg }}
  </div>
</template>

<script>
import { accessGrantedMessage, dateNotSetMessage, notOlderThanEighteenMessage } from '../constants'

export default {
  props: {
    date: {
      type: [Date, null],
      default: () => null
    }
  },
  data() {
    return {
      msg: ''
    }
  },
  computed: {
    isOlderThanEighteen() {
      return this.calculateAge(this.date) >= 18
    }
  },
  methods: {
    calculateAge(birthdayDate) {
      const ageDifferenceInMilliseconds = Date.now() - birthdayDate.getTime()
      const ageDate = new Date(ageDifferenceInMilliseconds)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    },
    verify() {
      if (!this.date) {
        this.msg = dateNotSetMessage
        return
      }
      if (!this.isOlderThanEighteen) {
        this.msg = notOlderThanEighteenMessage
        return
      }
      this.msg = accessGrantedMessage
    }
  }
}
</script>
