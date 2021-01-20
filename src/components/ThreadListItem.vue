<template>
  <div class="thread">
    <div>
      <p>
        <router-link
          :to="{
            name: 'ThreadShow',
            params: {
              id: thread['.key'],
            },
          }"
          >{{ thread.title }}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{ user.name }}</a
        >, <AppDate :timeStamp="thread.publishedAt" />.
      </p>
    </div>
    <div class="activity">
      <p class="replies-count">{{ repliesCount }} replies</p>
      <!-- <img class="avatar-medium" src=" " alt=""> -->
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from '@/utils'
export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  computed: {
    repliesCount () {
      return countObjectProperties(this.thread.posts) - 1
    },
    user () {
      return this.$store.state.users[this.thread.userId]
    }
  }
}
</script>
