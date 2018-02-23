<template lang="pug">
  .form-section
    .form-section-title Durée
    .form-row.form-field-text
      label(for="begin-date") Date de début des droits
      input(type="date" id="begin-date" v-model="model.beginDate")
    .form-row.form-field-text
      label(for="end-date") Date de fin des droits
      input(type="date" id="end-date" v-model="model.endDate")
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
    };
  }
};
</script>
