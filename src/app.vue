<template lang="pug">
  #app
    layout
</template>

<script>
import Layout from 'Core/components/layout';

export default {
  components: {
    Layout
  },
  beforeCreate: function () {
    this.$store.dispatch('initialize');
  }
};
</script>
