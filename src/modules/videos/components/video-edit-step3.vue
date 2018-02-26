<template lang="pug">
  .form
    .form-panel--header
      .form-title Nouvelle oeuvre
      .form-subtitle Droits d'auteurs
    .form-panel
      .list
        .list-header
          .author Titulaire
          .capacity Qualité
          .percentage Pourcentage
          .command
        .list-content(
          v-for="(item, index) in list"
          :class="{ active: listItemActive(index) }"
          @click="activateListItem(index)"
        )
          .author {{ item.name}}
          .capacity {{ item.capacity}}
          .percentage {{ item.percentage }}%
          .command
            .icon-delete(@click="deleteListItem(index)")
        .list-command
          .form-field-button
            button(type="button" @click="addListItem()") Ajouter
    form.form-panel(name="show-form" @submit.prevent="")
      .form-section
        .form-section-title Titulaire
        .form-row.form-field-text
          label(for="name") Nom du titulaire
          input(type="text" id="name" v-model="formModel.name")
        .form-row.form-field-text
          label(for="capacity") Qualité du titulaire
          input(type="text" id="capacity" v-model="formModel.capacity")
        .form-row.form-field-text
          label(for="percentage") Pourcentage
          .form-field-percentage
            input(type="text"  id="percentage" v-model="formModel.percentage")
            .unit %
      form-section-right-duration(
        :model="formModel.duration"
      )
      form-section-right-territory(
        :model="formModel.territory"
      )
    .form-panel--command
      button(type="button" @click="requestPreviousStep()") Etape précédente
      button(type="button" @click="requestNextStep()") Réaliser une simulation
</template>

<script>
import formSectionRightDurationComponent from './video-edit-right-duration';
import formSectionRightTerritoryComponent from './video-edit-right-territory';
import videoEditMixin from '../mixins/video-edit.mixin';

// let authorRights = [];
const authorRights = [];

class FormAuthorRight {
  constructor() {
    this.name = null;
    this.capacity = null;
    this.percentage = null;
    this.duration = {};
    this.territory = {};
  }
}

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
      formModel: new FormAuthorRight(),
      list: authorRights,
      listActiveIndex: -1
    };
  },

  created: function () {
    // resetForm(this);
    // loadAuthorRights(this);
  },

  methods: {
    listItemActive: function (index) {
      return (index === this.listActiveIndex);
    },

    activateListItem: function (index) {
      this.formModel = authorRights[index];
      this.listActiveIndex = index;
    },

    addListItem: function () {
      authorRights.push(new FormAuthorRight());
      this.activateListItem(authorRights.length - 1);
    },

    deleteListItem: function (index) {
      resetForm(this);
      authorRights.splice(index, 1);
    },

    requestNextStep: function () {
      // saveAuthorRights(this);
      this.$router.push({
        name: 'video-simulator'
      });
    },

    requestPreviousStep: function () {
      // saveAuthorRights(this);
      this.handlePreviousStep();
    }
  }
};

// function loadAuthorRights(self) {
//   authorRights = self.model;
// }

// function saveAuthorRights(self) {
//   self.model = authorRights;
// }

function resetForm(self) {
  self.listActiveIndex = -1;
  self.formModel = new FormAuthorRight();
}
</script>
