<template lang="pug">
  #world
    .name {{ name }}
</template>

<script>

export default {
  data() {
    return {
      name: 'world'
    };
  },
  created: function () {
    document.title = this.name;
  }
};
</script>

<style scoped>
</style>
