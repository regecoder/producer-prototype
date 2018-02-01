<template lang="pug">
  #welcome
    .name {{ name }}
    button(@click="login()") LOGIN
</template>

<script>
import { store } from '@';

import loginMixin from '../mixins/login';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
      name: 'welcome'
    };
  },
  created: function () {
    console.log('store');
    console.log(store);
  }
};
</script>

<style scoped>
</style>
