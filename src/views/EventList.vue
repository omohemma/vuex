<template>
  <div>
    <h1>Events for {{user.user.name}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
   
    <template v-if="page !== 1">
      <router-link :to="{name: 'event-list', query : { page : page - 1}}"> Prev Page</router-link>
    </template>

 <template v-if="page < totalPages">
    <router-link :to="{name: 'event-list', query : { page : page + 1}}"> Next Page</router-link>
 </template>

  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    ...mapState(['event','user']),
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    totalPages() {
      return Math.round(this.event.total_events / 3) ;
    }
  }
}
</script>
