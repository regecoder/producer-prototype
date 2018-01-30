<template lang="pug">
  #not-authenticated
    .name {{ name }}
    button(@click="login()") LOGIN
</template>

<script>
import { service as authService } from 'Modules/auth';

let originRoute = '';

// Workaround qui corrige l'erreur provoquéee par
// l'utilisation de authService directement dans methods:
// methods: {
//   login: authService.login
// }
// Cannot read property 'login' of undefined
// solution:
// Ajout de la fonction intermédaire login

function login() {
  authService.login(originRoute);
}

export default {
  data() {
    return {
      name: 'not-authenticated'
    };
  },
  methods: {
    login
  },
  beforeCreate: function () {
    if (this.$route.params.hasOwnProperty('origin')) {
      originRoute = this.$route.params.origin;
    }
  }
};
</script>

<style scoped>
</style>
