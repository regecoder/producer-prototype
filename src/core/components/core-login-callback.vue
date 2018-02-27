<template lang="pug">
  .component
    .name core-login-callback
</template>

<script>
import { authService } from 'Core/services';

export default {
  data () {
    return {
    };
  },
  created: function () {
    authService.authenticate();
  }
};
</script>
