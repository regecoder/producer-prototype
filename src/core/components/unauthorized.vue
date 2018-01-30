<template lang="pug">
  #unauthorized
    .name {{ name }}
    button(@click="login()") LOGIN
</template>

<script>
import loginMixin from '../mixins/login';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
      name: 'unauthorized'
    };
  }
};
</script>

<style scoped>
</style>
