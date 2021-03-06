<template lang="pug">
  .form-view
    .form-area--header
      .form-view-title {{ showTitle }}
      .form-view-subtitle Droits d'exploitation
    form.form-area(name="show-form" @submit.prevent="")
      .form-sector
        .form-sector-title Sociétés d'auteurs
        .form-block--checkbox(
          v-for="(authorSociety, index) in defaultAuthorSocieties"
        )
          .form-control--checkbox
            input(
              type="checkbox"
              :id="'as-' + index"
              v-model="authorSociety.checked"
            )
            label(:for="'as' + index") {{ authorSociety.label }}
          .form-control--percentage
            .text {{ authorSociety.percentage }}
            .unit %
        .form-block--checkbox--edit(
          v-for="(authorSociety, index) in customAuthorSocieties"
        )
          .form-control--checkbox--edit
            input(
              type="checkbox"
              v-model="authorSociety.checked"
            )
            input(type="text" v-model="authorSociety.label")
          .form-control--percentage
            input(type="text" v-model.number="authorSociety.percentage")
            .unit %
          .form-control--command
            .icon.icon-delete(@click="deleteCustomSociety(index)")
        .form-block.form-control--button
          button(type="button" @click="addCustomSociety()") Ajouter
      right-duration(
        :model="model.duration"
      )
      right-territory(
        :model="model.territory"
      )
    .form-area--command-panel
      button(type="button" @click="requestPreviousStep()") Etape précédente
      button(type="button" @click="requestNextStep()") Passer à l'étape suivante
</template>

<script>
import { authorSocieties } from '../video.service';
import rightDurationComponent from './video-edit-right-duration';
import rightTerritoryComponent from './video-edit-right-territory';
import videoEditMixin from '../mixins/video-edit.mixin';

const defaultAuthorSocieties = authorSocieties;

const customAuthorSocieties = [];

export default {
  components: {
    rightDuration: rightDurationComponent,
    rightTerritory: rightTerritoryComponent
  },

  mixins: [
    videoEditMixin
  ],

  data () {
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

function loadAuthorSocieties (modelObject) {
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
        checked: true,
        label: property,
        percentage: modelObject[property]
      });
    }
  });
}

function saveAuthorSocieties (modelObject) {
  // Supprime toutes les sociétés existantes dans le modèle
  const properties = Object.keys(modelObject);
  properties.forEach((property) => {
    delete modelObject[property];
  });
  // Ajoute les sociétés sélectionnées
  defaultAuthorSocieties.forEach((society) => {
    if (societyValid(society)) {
      modelObject[society.label] = society.percentage;
    }
  });
  // Ajoute les sociétés personnalisées
  customAuthorSocieties.forEach((society) => {
    if (societyValid(society)) {
      modelObject[society.label] = society.percentage;
    }
  });
}

function societyValid (society) {
  let valid = false;
  if (society.checked &&
    typeof society.label !== 'undefined' && society.label !== '' &&
    typeof society.percentage !== 'undefined' && society.percentage !== '') {
    valid = true;
  }
  return valid;
}
</script>
