<template lang="pug">
  .component
    .component-panel--header
      .component-title Simulateur
    .component-panel--content
      .video-widget--short
        .video-title {{ model.work.show.title }}
        .video-subtitle {{ model.work.show.author }}
      .simulator
        .simulator-command
          .simulator-command-subscription
            .subscription1-icon.button-action(@click="addView(0, 1)") + 1
            .subscription1-icon.button-action(@click="addView(0, 10)") + 10
            .subscription1-icon.button-action(@click="addView(0, 100)") + 100
            .subscription1-icon.button-action(@click="addView(0, 1000)") + 1000
          .simulator-command-subscription
            .subscription1-icon.button-action(@click="addView(1, 1)") + 1
            .subscription1-icon.button-action(@click="addView(1, 10)") + 10
            .subscription1-icon.button-action(@click="addView(1, 100)") + 100
            .subscription1-icon.button-action(@click="addView(1, 1000)") + 1000
        .simulator-dashboard
          .simulator-dashboard-global
            .simulator-dashboard-label Nombre de vues
            .simulator-dashboard-view {{ totalViews }}
            .simulator-dashboard-label Revenu
            .simulator-dashboard-revenue {{ dashboard.totalRevenue }}
          .simulator-dashboard-sharing
            .simulator-dashboard-sharing-header
              .label Droits
              .value Pourcentage
              .label
              .value
              .value Revenue
            .simulator-dashboard-sharing-content(
              v-for="item in dashboard.sharing"
            )
              .label {{ item.label }}
              .value(v-if="!item.categoryPercentage") {{ item.percentage }}
              .value(v-else)
              .label {{ item.name }}
              .value {{ item.categoryPercentage }}
              .value {{ sharingRevenue(item) }}
    .component-panel--command
      button(type="button" @click="exit()") Retour
      button(type="button" data-alert="error" @click="resetView()") Remettre à zéro
</template>

<script>
import {
  authorSocieties,
  sharingCategory
} from '../video.service';

class SharingItem {
  constructor (label) {
    this.label = label;
    this.percentage = null;
    this.name = null;
    this.categoryPercentage = null;
    this.revenue = 0;
  }
}

const dashboard = {
  views: {
    subscription1: 0,
    subscription2: 0
  },
  sharing: [],
  totalRevenue: 0
};

const subscriptions = [
  {
    name: 'subscription1'
  },
  {
    name: 'subscription2'
  }
];

export default {
  data () {
    return {
      dashboard
    };
  },

  computed: {
    model: function () {
      return this.$store.state.video;
    },

    totalViews: function () {
      return computeViews(this.dashboard.views);
    }
  },

  created: function () {
    initializeSharing(this);
  },

  methods: {

    addView: function (subscriptionIndex, increment) {
      const subscriptionName = subscriptions[subscriptionIndex].name;
      this.dashboard.views[subscriptionName] += increment;
    },

    exit: function () {
      this.$router.push({
        name: 'video-add'
      });
    },

    resetView: function () {
      dashboard.totalRevenue = 0;
      dashboard.views.subscription1 = 0;
      dashboard.views.subscription2 = 0;
    },

    sharingRevenue: function (sharingItem) {
      let revenue = 0;
      if (!(typeof dashboard.totalRevenue === 'undefined' || typeof sharingItem.percentage === 'undefined')) {
        revenue = dashboard.totalRevenue * (sharingItem.percentage / 100);
        if (sharingItem.categoryPercentage) {
          revenue *= (sharingItem.categoryPercentage / 100);
        }
        revenue = Math.round(revenue);
      }
      return revenue;
    }
  }
};

function computeRevenue (views) {
  dashboard.totalRevenue = (views.subscription1 * 1) + (views.subscription2 * 4);
}

function computeViews (views) {
  const viewSubscriptions = Object.keys(views);
  let numberViews = 0;
  viewSubscriptions.forEach((subscriptionName) => {
    numberViews += dashboard.views[subscriptionName];
  });
  computeRevenue(views);
  return numberViews;


  // console.log(numberViews);
  // return numberViews;

  // return Object.keys(views).reduce((total, subscriptionName) =>
  //   total + dashboard.views[subscriptionName]
  // );
}

function initializeSharing (self) {
  self.dashboard.sharing = [];
  Object.keys(sharingCategory).forEach((categoryKey) => {
    const category = sharingCategory[categoryKey];
    const item = new SharingItem(category.label);
    switch (categoryKey) {
      case 'author':
        self.dashboard.sharing.push(item);
        initializeSharingAuthor(self);
        break;
      case 'producer':
        item.percentage = category.percentage;
        self.dashboard.sharing.push(item);
        initializeSharingProducer(self, item.percentage);
        break;
      case 'distributor':
      case 'editor':
        item.percentage = category.percentage;
        item.name = category.name;
        self.dashboard.sharing.push(item);
        break;
      default:
    }
  });
}

function initializeSharingAuthor (self) {
  authorSocieties.forEach((society) => {
    const modelAuthorSocieties = self.model.exploitationRights.authorSocieties;
    // Teste si la société d'auteurs est présente dans le modèle
    if (modelAuthorSocieties[society.label]) {
      const item = new SharingItem(society.label);
      item.percentage = modelAuthorSocieties[society.label];
      self.dashboard.sharing.push(item);
    }
  });
}

function initializeSharingProducer (self, producerPercentage) {
  self.model.authorRights.forEach((authorRight) => {
    const item = new SharingItem(authorRight.capacity);
    item.name = authorRight.name;
    item.percentage = producerPercentage;
    item.categoryPercentage = authorRight.percentage;
    self.dashboard.sharing.push(item);
  });
}
</script>
