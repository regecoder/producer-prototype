<template lang="pug">
  .component
    .form-title Nouvelle vidéo
    router-view
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created: function () {
    document.title = 'Scenso Producer: Nouvelle vidéo';
  }
};
</script>
