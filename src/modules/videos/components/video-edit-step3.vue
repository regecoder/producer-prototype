<template lang="pug">
  .component
    form.form(name="show-form" @submit.prevent="")
      .form-panel
        .form-panel-title Sociétés d'auteurs
        .form-section
          .form-field.form-field-checkbox(v-for="authorsSociety in defaultAuthorsSocieties")
            input(
              type="checkbox"
              :id="authorsSociety.name"
              :value="authorsSociety.name"
              v-model="model.authorsSocieties[authorsSociety.name]"
            )
            label(:for="authorsSociety.name") {{ authorsSociety.label }}
            .percentage {{ authorsSociety.percentage }}
            .unit %
          .form-field.form-field-checkbox.form-field-checkbox-custom(
            v-for="(authorsSociety, index) in customAuthorsSocieties"
          )
            input(
              type="checkbox"
              :value="getCustomAuthorsSocietyName(index)"
              v-model="authorsSociety.checked"
            )
            input.input-label(type="text" v-model="authorsSociety.label")
            input.input-percentage(type="text" v-model="authorsSociety.percentage")
            .unit %
          button(type="button" @click="addCustomAuthorsSociety()") Ajouter une société d'auteurs
      .form-panel.form-command-panel
        button(type="button" @click="preHandleNextStep()") Je passe à l'étape suivante
        router-link(:to="getPreviousStep()" replace) Je reviens à l'étape précédente
</template>

<script>
import videoEditMixin from 'Modules/videos/mixins/video-edit.mixin';

const defaultAuthorsSocieties = [
  {
    name: 'privateCopy',
    label: 'Copie privée',
    percentage: 2
  },
  {
    name: 'sacem',
    label: 'SACEM',
    percentage: 10
  },
  {
    name: 'sacd',
    label: 'SACD',
    percentage: 5
  },
  {
    name: 'scam',
    label: 'SCAM',
    percentage: 5
  }
];

const customAuthorsSocieties = [];

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
      defaultAuthorsSocieties,
      customAuthorsSocieties
    };
  },

  methods: {
    addCustomAuthorsSociety: function () {
      customAuthorsSocieties.push({
        // checked: true
      });
    },

    getCustomAuthorsSocietyName: function (index) {
      return `custom${index}`;
    },

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
