<template>
  <div>
    <h4>Create Event {{`${userName} with ID ${userID}` }}</h4>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
    <p>There are  {{catLength}} categories</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'EventCreate',
    computed: {
      ...mapState({
        userName: state => state.user.name,
        userID: state => state.user.id,
        categories: 'categories'
      }),
      catLength(){
        return this.$store.getters.catLength;
      }



    },
  }
</script>
