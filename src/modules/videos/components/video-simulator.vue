<template lang="pug">
  .component
    .component-panel--header
      .component-title Simulateur
    .component-panel--content
    .component-panel--command
      button(type="button" @click="exit()") Retour
      button(type="button" data-alert="error" @click="reset()") Remettre à zéro
</template>

<script>

export default {
  data() {
    return {
    };
  },

  created: function () {
  },

  methods: {
    exit: function () {
      this.$router.push({
        name: 'video-add'
      });
    },

    reset: function () {
    }
  }
};
</script>
