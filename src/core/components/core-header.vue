<template lang="pug">
  .header
    img.logo(:src="logoPath")
    .baseline La blockchain au service de la diffusion des œuvres audiovisuelles du spectacle vivant
</template>

<script>
  const logoPath = require('Core/assets/images/logo.png');

  export default {
    data () {
      return {
        logoPath
      };
    }
  };
</script>
