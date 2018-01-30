<template lang="pug">
  #welcome
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
      name: 'welcome'
    };
  }
};
</script>

<style scoped>
</style>
