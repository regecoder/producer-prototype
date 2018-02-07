<template lang="pug">
  #unauthorized
    .name {{ name }}
    div(v-if="isUserAuthenticated")
      button(@click="logout()") LOGOUT
    div(v-else)
      button(@click="login()") LOGIN
</template>

<script>
import loginMixin from 'Core/mixins/login';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
      name: 'unauthorized'
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
