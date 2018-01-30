<template lang="pug">
</template>

<script>
import service from '../service';

export default {
  created: function () {
    service.login();
  }
};
</script>
