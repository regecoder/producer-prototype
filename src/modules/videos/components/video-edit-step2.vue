<template lang="pug">
  .form
    .form-title Nouvelle vidéo
    form(name="show-form" @submit.prevent="")
    .form-section
      .form-section-title Production
      .form-row.form-field-text
        label(for="producer") Société de production
        input(type="text" id="producer" v-model="model.producer")
      .form-row.form-field-text
        label(for="contact") Nom du contact
        input(type="text" id="contact" v-model="model.contact")
      .form-row.form-field-text
        label(for="email") email de contact
        input(type="email" id="email" v-model="model.email")
    .form-command-panel
      button(type="button" @click="handlePreviousStep()") Etape précédente
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
        order: 2,
        storeKey: 'production'
      }
    };
  }
};
</script>
