<template lang="pug">
  #navbar
    .name {{ name }}
    .path {{path}}
</template>

<script>
export default {
  data() {
    return {
      name: 'not-found',
      path: this.$route.path
    };
  }
};
</script>

<style scoped>
</style>
