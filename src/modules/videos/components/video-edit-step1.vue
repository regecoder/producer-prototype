<template lang="pug">
.form
    .form-panel--header
      .form-title Nouvelle oeuvre
      .form-subtitle Vidéo
    form.form-panel(name="show-form" @submit.prevent="")
      .form-section
        .form-section-title Spectacle
        .form-row.form-field-text
          label(for="show-title") Titre du spectacle
          input(type="text" id="show-title" v-model="model.show.title")
        .form-row.form-field-text
          label(for="show-author") Auteur, Compagnie
          input(type="text" id="show-author" v-model="model.show.author")
        .form-row.form-field-select
          label(for="show-domain") Domaine
          select(id="show-domain" v-model="model.show.domain")
            option(value="")
            option(value="1") Théâtre
            option(value="2") Musique
            option(value="3") Danse
      .form-section
        .form-section-title Captation
        .form-row.form-field-text
          label(for="recording-date") Date de captation
          input(type="date" id="recording-date" v-model="model.recording.date")
        .form-row.form-field-text
          label(for="recording-location") Lieu de captation
          input(type="text" id="recording-location" v-model="model.recording.location")
      .form-section
        .form-section-title Production
        .form-row.form-field-text
          label(for="production-producer") Producteur, Société de production
          input(type="text" id="production-producer" v-model="model.production.producer")
        .form-row.form-field-text
          label(for="production-contact") Nom du contact
          input(type="text" id="production-contact" v-model="model.production.contact")
        .form-row.form-field-text
          label(for="production-email") email de contact
          input(type="email" id="production-email" v-model="model.production.email")
    .form-panel--command
      button(type="button" @click="handleNextStep()") Passer à l'étape suivante
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
        storeKey: 'video'
      }
    };
  }
};
</script>
