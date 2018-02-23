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
    form.form-panel(name="show-form" @submit.prevent="")
      .form-section
        .form-section-title Titulaire
        .form-row.form-field-text
          label(for="name") Nom du titulaire
          input(type="text" id="name" v-model="model[0].name")
        .form-row.form-field-text
          label(for="capacity") Qualité du titulaire
          input(type="text" id="capacity" v-model="model[0].capacity")
        .form-row.form-field-text
          label(for="percentage") Pourcentage
          .form-field-percentage
            input(type="text"  id="percentage" v-model="model[0].percentage")
            .unit %
      form-section-right-duration(
        :model="model[0].duration"
      )
      form-section-right-territory(
        :model="model[0].territory"
      )
    .form-panel.form-panel-command
      button(type="button" @click="handlePreviousStep()") Etape précédente
      button(type="button" @click="saveModel()") Enregistrer
</template>

<script>
import formSectionRightDurationComponent from './video-edit-right-duration';
import formSectionRightTerritoryComponent from './video-edit-right-territory';
import videoEditMixin from '../mixins/video-edit.mixin';

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
        order: 3,
        storeKey: 'authorRights'
      },
      activeIndex: -1
    };
  },

  created: function () {
    this.model.push(
      {
        duration: {},
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
