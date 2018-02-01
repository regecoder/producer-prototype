<template lang="pug">
  #layout
    .name {{ name }}
    .auth authenticated: {{ isUserAuthenticated }}
    div(v-if="isUserAuthenticated")
      login
    router-view
</template>

<script>
import Login from './login';

export default {
  data() {
    return {
      name: 'layout'
    };
  },
  computed: {
    isUserAuthenticated: function () {
      return this.$store.getters.isUserAuthenticated;
    }
  },
  components: {
    Login
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.name {
  color: green;
}
</style>
