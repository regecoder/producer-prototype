<template lang="pug">
  #hello
    .name {{ name }}
</template>

<script>

export default {
  data() {
    return {
      name: 'videos-edit'
    };
  },
  created: function () {
    document.title = this.name;
  }
};
</script>

<style scoped>
</style>
