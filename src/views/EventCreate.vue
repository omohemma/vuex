<template>
  <h1>Create Event {{userName}}</h1>
</template>

<script>
  export default {
    name: 'EventCreate',
    computed: {
      userName() {
        return this.$store.state.user.name;
      }
    },
  }
</script>
