<template lang="pug">
  #header
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
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.4;
  }
</style>
