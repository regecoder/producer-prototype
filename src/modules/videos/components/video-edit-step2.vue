<template lang="pug">
  .component
    form.form(name="show-form" @submit.prevent="")
      .form-panel
        .form-panel-title Production
        .form-section
          p.form-field
            label(for="producer") Société de production
            input(type="text" id="producer" v-model="model.producer")
          p.form-field
            label(for="contact") Nom du contact
            input(type="text" id="contact" v-model="model.contact")
          p.form-field
            label(for="email") email de contact
            input(type="email" id="email" v-model="model.email")
      .form-panel.form-command-panel
        button(type="button" @click="handleNextStep()") Je passe à l'étape suivante
        router-link(:to="getPreviousStep()" replace) Je reviens à l'étape précédente
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
