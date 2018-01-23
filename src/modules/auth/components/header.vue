<template lang="pug">
  #auth-header
    .name {{ name }}
    div(v-if="isAuthenticated")
      div Authenticated
      button(@click="logout()") LOGOUT
    div(v-else)
      div Anonymous
      button(@click="login()") LOGIN
</template>

<script>
import service from '../service';

export default {
  data() {
    return {
      name: 'auth-header',
      service
    };
  },
  computed: {
    isAuthenticated: function () {
      return service.isAuthenticated;
    }
  },
  methods: {
    login: service.login,
    logout: service.logout
  }
};
</script>

<style scoped>
  button {
    cursor: pointer;;
    padding: 2px 5px;
    border: 1px solid #aaa;
  }
</style>
