<template lang="pug">
  #layout
    .name {{ name }}
      .first Régis
    .auth authenticated: {{ isUserAuthenticated }}
    div(v-if="isUserAuthenticated")
      login
    router-view
</template>

<script>
// Workaround qui permet aux composants enfants d'intégrer le mixin login sans erreur
// eslint-disable-next-line no-unused-vars
import { authService } from 'Core/services';

import loginMixin from 'Core/mixins/login';

import LoginComponent from '../views/login';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
      name: 'layout'
    };
  },
  components: {
    login: LoginComponent
  }
};
</script>
