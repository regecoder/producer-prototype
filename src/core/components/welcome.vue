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
  button {
    cursor: pointer;;
    padding: 2px 5px;
    border: 1px solid #aaa;
  }
</style>
