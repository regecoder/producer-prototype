<template lang="pug">
  .form
    .form-panel-title
      .form-title Nouvelle oeuvre
      .form-subtitle Droits d'auteurs
    .list
      .list-header
        .author Auteur
        .capacity Qualité
        .percentage Pourcentage
        .command
      .list-content(:class="{ active: itemActive(1) }" @click="activateItem(1)")
        .author Rege
        .capacity Auteur
        .percentage 20%
        .command
          .icon-delete(@click="")
      .list-content(:class="{ active: itemActive(2) }" @click="activateItem(2)")
        .author Samuel Airiau-Croisier
        .capacity Réalisateur
        .percentage 5%
        .command
          .icon-delete(@click="")
    .form-panel-command
      button(type="button" @click="handlePreviousStep()") Etape précédente
      button(type="button" @click="saveModel()") Enregistrer
</template>

<script>
import videoEditMixin from 'Modules/videos/mixins/video-edit.mixin';

export default {
  mixins: [
    videoEditMixin
  ],
  data() {
    return {
      step: {
        order: 4,
        storeKey: 'authorRights'
      },
      activeIndex: -1
    };
  },

  methods: {
    saveModel: function () {
      console.log('video-edit-step-4: saveModel');
    },

    itemActive: function (index) {
      return (index === this.activeIndex);
    },

    activateItem: function (index) {
      this.activeIndex = index;
    }
  }
};
</script>
