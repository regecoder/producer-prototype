<template lang="pug">
  #app
    layout
</template>

<script>
// Workaround qui permet aux composants enfants d'intégrer le mixin login sans erreur
// eslint-disable-next-line no-unused-vars
import { authService } from 'Core/services';

import layout from 'Core/components/layout/layout';

export default {
  components: {
    layout
  }
};
</script>
