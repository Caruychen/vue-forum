<template>
  <span :title="timeStamp | humanFriendlyDate">{{ timeStamp | diffForHumans }}</span>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    timeStamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    humanFriendlyDate (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    diffForHumans (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>

<style>
</style>
