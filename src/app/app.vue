<template lang="pug">
  #app
    app-layout
</template>

<script>
// Workaround qui permet aux composants enfants d'intégrer le mixin login sans erreur
// eslint-disable-next-line no-unused-vars
import { authService } from 'Core/services';

import AppLayout from 'Core/components/layout/app-layout';

export default {
  components: {
    AppLayout
  }
};
</script>
