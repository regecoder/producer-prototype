<template lang="pug">
  .core-login-button
    div(v-if="!userAuthenticated")
      button.button-command(@click="login()") Connectez-vous
</template>

<script>
import { authService } from 'Core/services';

let originRoute = '';

export default {
  computed: {
    userAuthenticated: function () {
      return this.$store.getters.userAuthenticated;
    }
  },

  beforeCreate: function () {
    if (this.$route.params.hasOwnProperty('origin')) {
      originRoute = this.$route.params.origin;
    }
  },

  methods: {
    login: function () {
      authService.login(originRoute);
    }
  }
};
</script>
