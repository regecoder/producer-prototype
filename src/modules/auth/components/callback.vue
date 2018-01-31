<template lang="pug">
  #auth-callback
    .name {{ name }}
</template>

<script>
import service from '../service';

export default {
  data() {
    return {
      name: 'auth-callback'
    };
  },
  created: function () {
    service.authenticate();
  }
};
</script>

<style scoped>
</style>
