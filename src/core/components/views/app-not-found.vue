<template lang="pug">
  #app-not-found
    .name app-not-found
    .path {{path}}
</template>

<script>
export default {
  data() {
    return {
      path: this.$route.path
    };
  }
};
</script>
