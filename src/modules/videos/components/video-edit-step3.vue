<template lang="pug">
  .form
    .form-area--header
      .form-title {{ showTitle }}
      .form-subtitle Ayants droit producteur
    .form-area
      .list
        .list-header
          .author Titulaire
          .capacity Qualité
          .begin-date Début
          .end-date Fin
          .percentage Pourcentage
          .command
        .list-content(
          v-for="(item, index) in list"
          :class="{ active: listItemActive(index) }"
          @click="activateListItem(index)"
        )
          .author {{ item.name }}
          .capacity {{ item.capacity }}
          .begin-date {{ formattedDate(item.duration.beginDate) }}
          .end-date  {{ formattedDate(item.duration.endDate) }}
          .percentage {{ item.percentage }}%
          .command
            .icon-delete(@click="deleteListItem(index)")
        .list-command
          .form-field-button
            button(type="button" @click="addListItem()") Ajouter
    form.form-area(name="show-form" @submit.prevent="")
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
      right-duration(
        :model="formModel.duration"
      )
      right-territory(
        :model="formModel.territory"
      )
    .form-area--command
      button(type="button" @click="requestPreviousStep()") Etape précédente
      button(type="button" @click="requestNextStep()") Réaliser une simulation
</template>

<script>
import rightDurationComponent from './video-edit-right-duration';
import rightTerritoryComponent from './video-edit-right-territory';
import videoEditMixin from '../mixins/video-edit.mixin';

const authorRights = [];
// const authorRights = [];

class AuthorRight {
  constructor () {
    this.name = null;
    this.capacity = null;
    this.percentage = null;
    this.duration = {};
    this.territory = {};
  }
}

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
        order: 3,
        storeKey: 'authorRights'
      },
      formModel: new AuthorRight(),
      list: authorRights,
      listActiveIndex: -1
    };
  },

  created: function () {
    loadAuthorRights(this);
  },

  methods: {

    formattedDate: function (currentDate) {
      let returnDate = null;
      if (currentDate) {
        returnDate = new Date(currentDate).toLocaleDateString();
      }
      return returnDate;
    },

    listItemActive: function (index) {
      return (index === this.listActiveIndex);
    },

    activateListItem: function (index) {
      this.formModel = authorRights[index];
      this.listActiveIndex = index;
    },

    addListItem: function () {
      authorRights.push(new AuthorRight());
      this.activateListItem(authorRights.length - 1);
    },

    deleteListItem: function (index) {
      resetForm(this);
      authorRights.splice(index, 1);
    },

    requestNextStep: function () {
      saveAuthorRights(this);
      this.$router.push({
        name: 'video-simulator'
      });
    },

    requestPreviousStep: function () {
      saveAuthorRights(this);
      this.handlePreviousStep();
    }
  }
};

function loadAuthorRights (self) {
  authorRights.splice(0);
  authorRights.splice(0, 0, ...self.model);
}

function saveAuthorRights (self) {
  self.model.splice(0);
  self.model.splice(0, 0, ...authorRights);
}

function resetForm (self) {
  self.formModel = new AuthorRight();
  self.listActiveIndex = -1;
}
</script>
