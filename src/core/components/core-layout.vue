<template lang="pug">
  .layout
    core-header
    router-view
</template>

<script>
import CoreHeader from './core-header';

export default {
  components: {
    CoreHeader
  },
  data () {
    return {
    };
  }
};
</script>
