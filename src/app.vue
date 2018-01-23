<template lang="pug">
  #app
    .name {{ name }}
    auth-header
    navbar
    router-view
</template>

<script>
import Navbar from 'Core/components/navbar';
import AuthHeader from 'Modules/auth/components/header';

export default {
  data() {
    return {
      name: 'app'
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
