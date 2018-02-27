<template lang="pug">
  #dashboard
    .name dashboard
</template>

<script>

export default {
  data () {
    return {
    };
  },
  created: function () {
    document.title = this.name;
  }
};
</script>

<style scoped>
</style>
