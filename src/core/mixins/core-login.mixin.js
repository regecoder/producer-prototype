import { authService } from 'Core/services';

let originRoute = '';

export default {
  computed: {
    isUserAuthenticated: function () {
      return this.$store.getters.isUserAuthenticated;
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
