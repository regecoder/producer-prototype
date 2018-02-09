<template lang="pug">
  #app-header
    img.logo(:src="logoPath")
    .baseline La blockchain au service de la diffusion des œuvres audiovisuelles du spectacle vivant
</template>

<script>
  const logoPath = require('Core/assets/images/logo.png');

  export default {
    data() {
      return {
        logoPath
      };
    }
  };
</script>

<style lang="scss" scoped>
  .baseline {
    margin-top: 0.3rem;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 2rem;
    font-weight: 300;
  }
</style>
