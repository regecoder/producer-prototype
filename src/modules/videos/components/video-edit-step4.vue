<template lang="pug">
  .form
    .form-panel.form-panel-title
      .form-title Nouvelle oeuvre
      .form-subtitle Droits d'auteurs
    .form-panel
      .list
        .list-header
          .author Titulaire
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
        .list-command
          .form-field-button
            button(type="button" @click="addCustomSociety()") Ajouter
    form(name="show-form" @submit.prevent="")
      .form-section
        .form-row.form-field-text
          label(for="name") Nom du titulaire
          input(type="text" id="name")
        .form-row.form-field-text
          label(for="capacity") Qualité du titulaire
          input(type="text" id="capacity")
      .form-section
        .form-section-title Territoires d'exploitation
        form-right-territory(
          :model="model[0].territory"
        )
    .form-panel-command
      button(type="button" @click="handlePreviousStep()") Etape précédente
      button(type="button" @click="saveModel()") Enregistrer
</template>

<script>
import formRightTerritoryComponent from 'Core/components/core-form-right-territory';
import videoEditMixin from 'Modules/videos/mixins/video-edit.mixin';

export default {
  components: {
    formRightTerritory: formRightTerritoryComponent
  },

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

  created: function () {
    this.model.push(
      {
        territory: {
          scope: 'world',
          excluded: [],
          included: []
        }
      }
    );
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
