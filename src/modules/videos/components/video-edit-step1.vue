<template lang="pug">
.form
    .form-title Nouvelle vidéo
    form(name="show-form" @submit.prevent="")
    .form-section
      .form-section-title Spectacle
      .form-row.form-field-text
        label(for="name") Nom du spectacle
        input(type="text" id="name" v-model="model.name")
      .form-row.form-field-text
        label(for="author") Auteur, Compagnie
        input(type="text" id="author" v-model="model.author")
      .form-row.form-field-select
        label(for="domain") Domaine
        select(id="domain" name="domain" v-model="model.domain")
          option(value="")
          option(value="1") Théâtre
          option(value="2") Musique
          option(value="3") Danse
    .form-section
      .form-row.form-field-text
        label(for="recording-date") Date de captation
        input(type="date" id="recording-date" v-model="model.recordingDate")
      .form-row.form-field-text
        label(for="recording-location") Lieu de captation
        input(type="text" id="recording-location" v-model="model.recordingLocation")
    .form-command-panel
      button(type="button" @click="handleNextStep()") Je passe à l'étape suivante
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
        order: 1,
        storeKey: 'show'
      }
    };
  }
};
</script>
