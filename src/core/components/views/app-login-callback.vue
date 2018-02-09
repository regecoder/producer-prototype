<template lang="pug">
  #app-login-callback
    .name app-login-callback
</template>

<script>
import { authService } from 'Core/services';

export default {
  data() {
    return {
    };
  },
  created: function () {
    authService.authenticate();
  }
};
</script>
