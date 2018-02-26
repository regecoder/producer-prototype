<template lang="pug">
  .form
    .form-panel.form-panel-title
      .form-title Simulateur
    .form-panel.form-panel-command
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
