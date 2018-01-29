<template lang="pug">
  #layout
    .name {{ name }}
    auth-header
    navbar
    router-view
</template>

<script>
import AuthHeader from 'Modules/auth/components/header';
import Navbar from './navbar';

export default {
  data() {
    return {
      name: 'layout'
    };
  },
  components: {
    Navbar,
    AuthHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.name {
  color: green;
}
</style>
