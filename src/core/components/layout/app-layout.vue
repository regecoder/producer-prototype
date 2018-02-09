<template lang="pug">
  #app-layout
    app-header
    router-view
</template>

<script>
import AppHeader from './app-header';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
    };
  }
};
</script>
