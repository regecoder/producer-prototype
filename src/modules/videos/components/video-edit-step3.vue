<template lang="pug">
  .component
    form.form(name="show-form" @submit.prevent="")
      .form-panel
        .form-panel-title Sociétés d'auteurs
        .form-section
          .form-field.form-field-checkbox(v-for="authorsSociety in authorsSocieties")
            input(type="checkbox"
              :id="authorsSociety.name"
              :value="authorsSociety.name"
              v-model="model.authorsSocieties[authorsSociety.name]"
            )
            label(:for="authorsSociety.name") {{ authorsSociety.label }}
            .tag {{ authorsSociety.tag }}
      .form-panel.form-command-panel
        button(type="button" @click="preHandleNextStep()") Je passe à l'étape suivante
        router-link(:to="getPreviousStep()" replace) Je reviens à l'étape précédente
</template>

<script>
import videoEditMixin from 'Modules/videos/mixins/video-edit.mixin';

const authorsSocieties = [
  {
    name: 'privateCopy',
    label: 'Copie privée',
    tag: '2%'
  },
  {
    name: 'sacem',
    label: 'SACEM',
    tag: '10%'
  },
  {
    name: 'sacd',
    label: 'SACD',
    tag: '5%'
  },
  {
    name: 'scam',
    label: 'SCAM',
    tag: '5%'
  }
];

export default {
  mixins: [
    videoEditMixin
  ],
  data() {
    return {
      step: {
        order: 3,
        storeKey: 'exploitation'
      },
      authorsSocieties
    };
  },
  methods: {
    preHandleNextStep: function () {
      // Supprime les sociétés d'auteurs non cochées (=false) du modèle
      deleteUnselectedAuthorsSocieties(this.model.authorsSocieties);
      this.handleNextStep();
    }
  }
};

function deleteUnselectedAuthorsSocieties(authorsSocietiesData) {
  const keys = Object.keys(authorsSocietiesData);
  keys.forEach((element) => {
    if (!authorsSocietiesData[element]) {
      delete authorsSocietiesData[element];
    }
  });
}
</script>
