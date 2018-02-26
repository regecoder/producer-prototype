<template lang="pug">
  .form
    .form-panel.form-panel-title
      .form-title Nouvelle oeuvre
      .form-subtitle Droits d'exploitation
    form.form-panel(name="show-form" @submit.prevent="")
      .form-section
        .form-section-title Sociétés d'auteurs
        .form-row.form-row-checkbox(
          v-for="(authorSociety, index) in defaultAuthorSocieties"
        )
          .form-field-checkbox
            input(
              type="checkbox"
              :id="'as-' + index"
              v-model="authorSociety.checked"
            )
            label(:for="'as' + index") {{ authorSociety.label }}
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
          button(type="button" @click="addCustomSociety()") Ajouter
      form-section-right-duration(
        :model="model.duration"
      )
      form-section-right-territory(
        :model="model.territory"
      )

    .form-panel.form-panel-command
      button(type="button" @click="requestPreviousStep()") Etape précédente
      button(type="button" @click="requestNextStep()") Je passe à l'étape suivante
</template>

<script>
import formSectionRightDurationComponent from './video-edit-right-duration';
import formSectionRightTerritoryComponent from './video-edit-right-territory';
import videoEditMixin from '../mixins/video-edit.mixin';

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
  components: {
    formSectionRightDuration: formSectionRightDurationComponent,
    formSectionRightTerritory: formSectionRightTerritoryComponent
  },

  mixins: [
    videoEditMixin
  ],

  data() {
    return {
      step: {
        order: 2,
        storeKey: 'exploitationRights'
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

    requestNextStep: function () {
      saveAuthorSocieties(this.model.authorSocieties);
      this.handleNextStep();
    },

    requestPreviousStep: function () {
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
