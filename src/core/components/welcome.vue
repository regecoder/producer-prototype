<template lang="pug">
  #welcome
    .name {{ name }}
    button(@click="login()") LOGIN
</template>

<script>
import { service as authService } from 'Modules/auth';

// Workaround qui corrige l'erreur provoquéee par
// l'utilisation de authService directement dans methods:
// methods: {
//   login: authService.login
// }
// Cannot read property 'login' of undefined
// solution:
// Ajout de la fonction intermédaire login

function login() {
  authService.login();
}

export default {
  data() {
    return {
      name: 'welcome'
    };
  },
  methods: {
    login
  }
};
</script>

<style scoped>
</style>
