<template>
  <div>
    <button
      class="shadow bg-purple-500 w-full hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
      @click="verify"
    >
      Sign in
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
<!-- TIP: is checking the year of birth really enough? -->
