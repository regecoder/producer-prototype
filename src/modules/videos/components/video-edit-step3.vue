<template lang="pug">
  .form
    .form-title Nouvelle vidéo
    form(name="show-form" @submit.prevent="")
      .form-section
        .form-section-title Sociétés d'auteurs
        .form-row.form-row-checkbox(
          v-for="(authorsSociety, index) in defaultAuthorsSocieties"
        )
          .form-field-checkbox
            input(
              type="checkbox"
              :id="getAuthorsSocietyId(index)"
              :value="authorsSociety.label"
              v-model="model.authorsSocieties[authorsSociety.label]"
            )
            label(:for="getAuthorsSocietyId(index)") {{ authorsSociety.label }}
          .form-field-percentage
            .text {{ authorsSociety.percentage }}
            .unit %
        .form-row.form-row-checkbox_edit(
          v-for="(authorsSociety, index) in customAuthorsSocieties"
        )
          .form-field-checkbox_edit
            input(
              type="checkbox"
              :value="authorsSociety.label"
              v-model="authorsSociety.checked"
            )
            input(type="text" v-model="authorsSociety.label")
          .form-field-percentage
            input(type="text" v-model="authorsSociety.percentage")
            .unit %
          .form-field-command
            .icon.icon-delete
        .form-row.form-field-button
          button(type="button" @click="addCustomAuthorsSociety()") Ajouter une société d'auteurs
    .form-command-panel
      button(type="button" @click="handlePreviousStep()") Etape précédente
      button(type="button" @click="preHandleNextStep()") Je passe à l'étape suivante
</template>

<script>
import videoEditMixin from 'Modules/videos/mixins/video-edit.mixin';

const defaultAuthorsSocieties = [
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

  created: function () {
    getCustomAuthorsSocieties(this);
  },

  methods: {
    addCustomAuthorsSociety: function () {
      customAuthorsSocieties.push({
        checked: true
      });
    },

    getAuthorsSocietyId: function (index) {
      return `authors-society${index}`;
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

function getCustomAuthorsSocieties(self) {
  console.log(self.$store.state.video);
}
</script>
