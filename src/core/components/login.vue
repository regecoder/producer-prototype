<template lang="pug">
  #login
    .name {{ name }}
    div(v-if="isAuthenticated")
      button(@click="logout()") LOGOUT
    div(v-else)
      button(@click="login()") LOGIN
</template>

<script>
import { authService } from '../services';

export default {
  data() {
    return {
      name: 'login',
      authService
    };
  },
  computed: {
    isAuthenticated: function () {
      return authService.isAuthenticated;
    }
  },
  methods: {
    login: authService.login,
    logout: authService.logout
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
