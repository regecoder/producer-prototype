<template lang="pug">
  #layout
    .name {{ name }}
    .auth authenticated: {{ isUserAuthenticated }}
    div(v-if="isUserAuthenticated")
      login-view
    router-view
</template>

<script>
import LoginView from './login';
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
    LoginView
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
