export default {
  methods: {
    handleNextStep,
    getPreviousStep
  },
  computed: {
    model: function () {
      return this.$store.state.video[this.step.storeKey];
    }
  }
};

function getNextStepName(currentStep) {
  const nextStepName = `videos-add-step${currentStep.order + 1}`;
  return nextStepName;
}

function getPreviousStepName(currentStep) {
  const previousStepName = `videos-add-step${currentStep.order - 1}`;
  return previousStepName;
}

function handleNextStep() {
  save(this);
  this.$router.push({
    name: getNextStepName(this.step)
  });
}

function getPreviousStep() {
  return {
    name: getPreviousStepName(this.step)
  };
}

function save(self) {
  self.$store.commit('setVideoData', {
    key: self.step.storeKey,
    value: self.model
  });
}
