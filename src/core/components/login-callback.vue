<template lang="pug">
  #login-callback
    .name {{ name }}
</template>

<script>
import { authService } from '../services';

export default {
  data() {
    return {
      name: 'login-callback'
    };
  },
  created: function () {
    authService.authenticate();
  }
};
</script>
