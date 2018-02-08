<template lang="pug">
  #layout
    app-header
    router-view
</template>

<script>
import appHeader from './header';

export default {
  components: {
    appHeader
  },
  data() {
    return {
    };
  }
};
</script>
