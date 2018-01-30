<template lang="pug">
  #welcome
    .name {{ name }}
</template>

<script>

export default {
  data() {
    return {
      name: 'welcome'
    };
  },
  created: function () {
    document.title = this.name;
  }
};
</script>

<style scoped>
</style>
