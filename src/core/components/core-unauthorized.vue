<template lang="pug">
  .component
    .name core-unauthorized
    div(v-if="isUserAuthenticated")
      button(@click="logout()") LOGOUT
    div(v-else)
      button(@click="login()") LOGIN
</template>

<script>
import loginMixin from 'Core/mixins/core-login.mixin';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
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
