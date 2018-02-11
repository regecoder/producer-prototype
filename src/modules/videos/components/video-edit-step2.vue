<template lang="pug">
  .component
    form.form(name="show-form" @submit.prevent="")
      .form-panel.form-input-panel
        .form-panel-title Production
        .form-section
          p.form-field
            label(for="producer") Société de production
            input(type="text" id="producer" name="producer")
          p.form-field
            label(for="contact") Nom du contact
            input(type="text" id="contact" name="contact")
          p.form-field
            label(for="email") email de contact
            input(type="email" id="email" name="email")
      .form-panel.form-command-panel
        button(type="button" @click="requestNextStep()") Je passe à l'étape suivante
        router-link(:to="getPreviousStep()" replace) Je reviens à l'étape précédente
</template>

<script>

  export default {
    data() {
      return {
        requestNextStep,
        getPreviousStep
      };
    },
    created: function () {
      // document.title = this.name;
    }
  };

  function requestNextStep() {
    this.$router.push({
      name: 'videos-add-step3'
    });
  }

  function getPreviousStep() {
    return {
      name: 'videos-add-step1'
    };
  }
</script>
