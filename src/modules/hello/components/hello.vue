<template lang="pug">
  #hello
    .name {{ name }}
</template>

<script>

export default {
  data() {
    return {
      name: 'hello'
    };
  },
  created: function () {
    document.title = this.name;
  }
};
</script>

<style scoped>
</style>
