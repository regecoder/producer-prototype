<template lang="pug">
  #video-edit
    //- .name video-edit
    img(:src="defaultPath")
</template>

<script>
const defaultPath = require('../assets/images/regecoder.png');

export default {
  data() {
    return {
      defaultPath
    };
  },
  created: function () {
    document.title = this.name;
  }
};
</script>

<style scoped>
</style>
