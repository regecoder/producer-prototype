<template lang="pug">
  .view
    .name core-not-found
    .path {{path}}
</template>

<script>
export default {
  data () {
    return {
      path: this.$route.path
    };
  }
};
</script>
