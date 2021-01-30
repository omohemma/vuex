<template>
  <div>
    <p>You have completed {{doneTodos.length}} Todos, it is remaining {{activeTodos}} Todos</p>
    <pre>
      {{doneTodos}}
    </pre>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'EventCreate',
    computed: {
      doneTodos(){
        return this.$store.getters.doneTodos;
      },
      activeTodos(){
        return this.$store.getters.activeTodosLength;
      }
    },
  }
</script>
