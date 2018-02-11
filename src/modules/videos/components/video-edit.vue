<template lang="pug">
  .component
    .form-title Nouvelle video
    router-view
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    created: function () {
      // document.title = this.name;
    }
  };
</script>
