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
  methods: {
    login
  },
  beforeCreate: function () {
    if (this.$route.params.hasOwnProperty('origin')) {
      originRoute = this.$route.params.origin;
    }
  }
};
