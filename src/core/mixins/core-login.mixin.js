import { authService } from 'Core/services';

let originRoute = '';

export default {
  computed: {
    userAuthenticated: function () {
      return this.$store.getters.userAuthenticated;
    }
  },
  methods: {
    login: function () {
      authService.login(originRoute);
    },
    logout: function () {
      authService.logout();
    }
  },
  beforeCreate: function () {
    if (this.$route.params.hasOwnProperty('origin')) {
      originRoute = this.$route.params.origin;
    }
  }
};
