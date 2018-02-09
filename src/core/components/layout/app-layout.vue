<template lang="pug">
  #app-layout.layout
    app-header.header
    router-view.content
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
