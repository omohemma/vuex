<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'EventCreate',
    data() {
      let times = []
      for (let index = 1; index <= 24; index++) {
        times.push(`${index}:00`)
      }
      return {
        times,
        event: this.createFreshEventObject(), // This Helps to clear input fields way to easy...
        categories: this.$store.state.categories
      }
    },
    components: {
      Datepicker
    },
    methods: {
      createEvent() {
        // console.log(this.event);
        this.$store.dispatch('event/createEvent', this.event)
          .then(() => {
            // Route to Event Show
            this.$router.push({
              name: 'event-show',
              params: {id: this.event.id}
            });

            this.event = this.createFreshEventObject(); // Clear Input After Success
          }).catch(() => {
          console.log(' There was a problem when saving event record');
        })
      },
      createFreshEventObject() {
        const user = this.$store.state.user.user;
        const id = Math.floor(Math.random() * 10000000);

        return {
          id: id,
          user: user,
          category: '',
          organizer: user,
          title: '',
          description: '',
          location: '',
          date: '',
          time: '',
          attendees: []
        }

      }
    },
    computed: {
      // getEvent(){
      //   return this.$store.getters.getEventById;
      // }
      ...mapGetters({
        getEvent: 'getEventById'
      })
    }
  }
</script>

<style scoped>
  .field {
    margin-bottom: 24px;
  }
</style>
