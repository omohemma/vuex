<template>
  <div>
    <h1>Create Event {{`${userName} with ID ${userID}` }}</h1>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'EventCreate',
    computed: {
      /*
     ...mapState(['user','categories']); // No User Defined Names for Vuex State
      */
      ...mapState({
        userName: state => state.user.name,
        userID: state => state.user.id,
        categories: 'categories'
      }),



    },
  }
</script>
