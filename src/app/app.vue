<template lang="pug">
  #app
    core-layout
</template>

<script>
// Workaround qui permet aux composants enfants d'intégrer le mixin login sans erreur
// eslint-disable-next-line no-unused-vars
import { authService } from 'Core/services';

import CoreLayout from 'Core/components/core-layout';

export default {
  components: {
    CoreLayout
  }
};
</script>
