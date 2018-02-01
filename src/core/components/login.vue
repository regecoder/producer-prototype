<template lang="pug">
  #login
    .name {{ name }}
    div(v-if="isUserAuthenticated")
      button(@click="logout()") LOGOUT
    div(v-else)
      button(@click="login()") LOGIN
</template>

<script>
// eslint-disable-next-line
import { authService } from '../services';
import loginMixin from '../mixins/login';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
      name: 'login'
    };
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
