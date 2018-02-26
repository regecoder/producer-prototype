<template lang="pug">
  .component
    .component-panel--header
      .component-title Simulateur
    .component-panel--content
      .video-widget--short
        .video-title {{ model.work.show.title }}
        .video-subtitle {{ model.work.show.author }}
      .simulator
        .simulator-command
          .simulator-command-subscription
            .subscription1-icon.button-action + 1
            .subscription1-icon.button-action + 10
            .subscription1-icon.button-action + 100
            .subscription1-icon.button-action + 1000
          .simulator-command-subscription
            .subscription1-icon.button-action + 1
            .subscription1-icon.button-action + 10
            .subscription1-icon.button-action + 100
            .subscription1-icon.button-action + 1000
        .simulator-dashboard
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

  computed: {
    model: function () {
      return this.$store.state.video;
    }
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
