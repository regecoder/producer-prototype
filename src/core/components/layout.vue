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
import { authService } from '../services';

import LoginComponent from './login';
import loginMixin from '../mixins/login';

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.name {
  color: green;
}

.first {
  color: red;
}
</style>
