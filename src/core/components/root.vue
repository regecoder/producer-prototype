<template lang="pug">
</template>

<script>
import { service as authService } from 'Modules/auth';

export default {
  created: function () {
    if (authService.isAuthenticated) {
      this.$router.replace({
        name: 'dashboard'
      });
    } else {
      this.$router.replace({
        name: 'welcome'
      });
    }
  }
};
</script>
