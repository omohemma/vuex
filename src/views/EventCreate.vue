<template>
  <div>
    <pre>
      {{getEvent(4)}}
    </pre>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'EventCreate',
    computed: {
      // getEvent(){
      //   return this.$store.getters.getEventById;
      // }
      ...mapGetters({
        getEvent : 'getEventById'
      })
    },
  }
</script>
