<template lang="pug">
  .component
    form.form(name="show-form" @submit.prevent="")
      .form-field-panel
        .form-panel-title Spectacle
        .form-section
          p.form-field
            label(for="name") Nom du spectacle
            input(type="text" id="name" name="name")
          p.form-field
            label(for="author") Auteur, Compagnie
            input(type="text" id="author" name="author")
          p.form-field
            label(for="domain") Domaine
            select(id="domain" name="domain")
              option(value="")
              option(value="1") Théâtre
              option(value="2") Musique
              option(value="3") Danse
        .form-section
          p.form-field
            label(for="recording-date") Date de captation
            input(type="date" id="recording-date" name="recording-date" placeholder="")
          p.form-field
            label(for="recording-location") Lieu de captation
            input(type="text" id="recording-location" name="recording-location")
      .form-command-panel
        button(type="button" @click="requestNextStep()") Je passe à l'étape suivante
</template>

<script>

export default {
  data() {
    return {
      requestNextStep: function () {
        this.$router.push({
          name: 'videos-add-step2'
        });
      }
    };
  },
  created: function () {
    // document.title = this.name;
  }
};
</script>

<style scoped>
</style>
