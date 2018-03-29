export default {
  methods: {
    handleNextStep,
    handlePreviousStep
  },
  computed: {
    // Alias
    localStore: function () {
      return this.$store.state.video;
    },
    model: function () {
      return this.localStore[this.step.storeKey];
    },
    showTitle: function () {
      let title = this.localStore.work.show.title;
      if (!title) {
        title = 'Nouvelle oeuvre';
      }
      return title;
    }
  }
};

function getNextStepName (currentStep) {
  const nextStepName = `video-add-step${currentStep.order + 1}`;
  return nextStepName;
}

function getPreviousStepName (currentStep) {
  const previousStepName = `video-add-step${currentStep.order - 1}`;
  return previousStepName;
}

function handleNextStep () {
  save(this);
  this.$router.push({
    name: getNextStepName(this.step)
  });
}

function handlePreviousStep () {
  save(this);
  this.$router.push({
    name: getPreviousStepName(this.step)
  });
}

function save (self) {
  self.$store.commit('setVideoData', {
    key: self.step.storeKey,
    value: self.model
  });
}
