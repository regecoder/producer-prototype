<template lang="pug">
  .form
    .form-title Nouvelle vidéo
    form(name="show-form" @submit.prevent="")
      .form-section
        .form-section-title Sociétés d'auteurs
        .form-row.form-row-checkbox(
          v-for="(authorSociety, index) in defaultAuthorSocieties"
        )
          .form-field-checkbox
            input(
              type="checkbox"
              :id="'author-society' + index"
              v-model="authorSociety.checked"
            )
            label(:for="'author-society' + index") {{ authorSociety.label }}
          .form-field-percentage
            .text {{ authorSociety.percentage }}
            .unit %
        .form-row.form-row-checkbox_edit(
          v-for="(authorSociety, index) in customAuthorSocieties"
        )
          .form-field-checkbox_edit
            input(
              type="checkbox"
              v-model="authorSociety.checked"
            )
            input(type="text" v-model="authorSociety.label")
          .form-field-percentage
            input(type="text" v-model="authorSociety.percentage")
            .unit %
          .form-field-command
            .icon.icon-delete(@click="deleteCustomSociety(index)")
        .form-row.form-field-button
          button(type="button" @click="addCustomSociety()") Ajouter une société d'auteurs
    .form-command-panel
      button(type="button" @click="preHandlePreviousStep()") Etape précédente
      button(type="button" @click="preHandleNextStep()") Je passe à l'étape suivante
</template>

<script>
import videoEditMixin from 'Modules/videos/mixins/video-edit.mixin';

const defaultAuthorSocieties = [
  {
    label: 'Copie privée',
    percentage: 2
  },
  {
    label: 'SACEM',
    percentage: 10
  },
  {
    label: 'SACD',
    percentage: 5
  },
  {
    label: 'SCAM',
    percentage: 5
  }
];

const customAuthorSocieties = [];

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
      defaultAuthorSocieties,
      customAuthorSocieties
    };
  },

  created: function () {
    loadAuthorSocieties(this.model.authorSocieties);
  },

  methods: {
    addCustomSociety: function () {
      customAuthorSocieties.push({
        checked: true
      });
    },

    deleteCustomSociety: function (index) {
      customAuthorSocieties.splice(index, 1);
    },

    preHandleNextStep: function () {
      saveAuthorSocieties(this.model.authorSocieties);
      this.handleNextStep();
    },

    preHandlePreviousStep: function () {
      saveAuthorSocieties(this.model.authorSocieties);
      this.handlePreviousStep();
    }
  }
};

function loadAuthorSocieties(modelObject) {
  const properties = Object.keys(modelObject);
  // Supprime toutes les sociétés personnalisées dans la vue
  customAuthorSocieties.splice(0);
  properties.forEach((property) => {
    const index = defaultAuthorSocieties.findIndex(
      element => element.label === property
    );
    if (index > -1) {
      defaultAuthorSocieties[index].checked = true;
    } else {
      customAuthorSocieties.push({
        label: property,
        checked: true
      });
    }
  });
}

function saveAuthorSocieties(modelObject) {
  // Supprime toutes les sociétés existantes dans le modèle
  const properties = Object.keys(modelObject);
  properties.forEach((property) => {
    delete modelObject[property];
  });
  // Ajoute les sociétés sélectionnées
  defaultAuthorSocieties.forEach((society) => {
    if (society.checked) {
      modelObject[society.label] = true;
    }
  });
  // Ajoute les sociétés personnalisées
  customAuthorSocieties.forEach((society) => {
    if (society.checked && typeof society.label !== 'undefined' && society.label !== '') {
      modelObject[society.label] = true;
    }
  });
}
</script>
