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
      return this.calculateAge(this.date) > 17
    }
  },
  methods: {
    calculateAge(birthdayDate) {
      const currentDateTime = Date.now()
      const birthdayDateTime = birthdayDate.getTime()
      const ageDifferenceInMilliseconds = currentDateTime - birthdayDateTime
      const ageDate = new Date(ageDifferenceInMilliseconds)
      return ageDate.getUTCFullYear() - 1970
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
