<template lang="pug">
  .form-sector
    .form-sector-title Territoires d'exploitation
    .form-block.form-control--radio
      input(
        type="radio"
        name="te-scope"
        value="world"
        id="te-wr"
        v-model="model.scope"
      )
      label(for="te-wr") Monde
    .form-block.form-control--radio
      input(
        type="radio"
        name="te-scope"
        value="france"
        id="te-fr"
        v-model="model.scope"
      )
      label(for="te-fr") France
    .form-block(v-show="includedTerritoriesEnabled")
      .form-block-title Territoires à inclure
      .form-control--button
        button(type="button" @click="addIncludedTerritories()") Ajouter
    .form-block(v-show="excludedTerritoriesEnabled")
      .form-block-title Territoires à exclure
      .form-control--button
        button(type="button" @click="addExcludedTerritories()") Ajouter
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
    };
  },

  computed: {
    excludedTerritoriesEnabled: function () {
      return (
        this.model.scope === 'world'
      );
    },

    includedTerritoriesEnabled: function () {
      return (
        this.model.scope === 'france'
      );
    }
  },

  methods: {
    addExcludedTerritories: function () {
      // https://www.apple.com/choose-country-region/
    },

    addIncludedTerritories: function () {
      // https://www.apple.com/choose-country-region/
    }
  }
};
</script>
