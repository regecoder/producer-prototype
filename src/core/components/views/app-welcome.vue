<template lang="pug">
  #app-welcome
    .name app-welcome
    button(@click="login()") LOGIN
</template>

<script>
import loginMixin from 'Core/mixins/app-login.mixin';

export default {
  mixins: [
    loginMixin
  ],
  data() {
    return {
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
