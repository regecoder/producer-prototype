<template lang="pug">
  .component
    .component-area--header
      .component-title Simulateur de revenus
    .component-area--content
      .video-widget--short
        .video-widget-title {{ model.work.show.title }}
        .video-widget-subtitle {{ model.work.show.author }}
      .simulator
        .simulator-command
          .simulator-command-title Simulateur de vues
          .simulator-command-subscription
            .subscription-actions
              .subscription1-icon.button-action(@click="addView(0, 1)") + 1
              .subscription1-icon.button-action(@click="addView(0, 10)") + 10
              .subscription1-icon.button-action(@click="addView(0, 100)") + 100
              .subscription1-icon.button-action(@click="addView(0, 1000)") + 1000
            .subscription-comment Forfait B to C à 10€
          .simulator-command-subscription
            .subscription-actions
              .subscription1-icon.button-action(@click="addView(1, 1)") + 1
              .subscription1-icon.button-action(@click="addView(1, 10)") + 10
              .subscription1-icon.button-action(@click="addView(1, 100)") + 100
              .subscription1-icon.button-action(@click="addView(1, 1000)") + 1000
            .subscription-comment Forfait B to B à 40€
        .simulator-dashboard
          .simulator-dashboard-total
            .cell
              .label Vues
              .view {{ totalViews }}
            .cell
              .label Revenus
              .revenue {{ dashboard.totalRevenue }}€
          .simulator-dashboard-sharing
            .simulator-dashboard-sharing-header
              .label Titulaire de droits
              .value %
              .label
              .value
              .value Revenus
            .simulator-dashboard-sharing-content(
              v-for="item in dashboard.sharing"
              v-bind:class="[item.category ? 'category' : 'item']"
            )
              .label {{ item.label }}
              .value(v-if="!item.categoryPercentage") {{ item.percentage }}
                span(v-if="item.percentage") %
              .value(v-else)
              .label {{ item.name }}
              .value {{ item.categoryPercentage }}
                span(v-if="item.categoryPercentage") %
              .revenue(v-if="item.percentage") {{ sharingRevenue(item) }}
              .revenue(v-else)
    .component-area--command
      button(type="button" @click="exit()") Retour
      button(type="button" data-alert="error" @click="resetView()") Remettre à zéro
</template>

<script>
import {
  authorSocieties,
  sharingCategory
} from '../video.service';

class SharingItem {
  constructor (label, category = false) {
    this.label = label;
    this.percentage = null;
    this.name = null;
    this.categoryPercentage = null;
    this.revenue = 0;
    this.category = category;
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
      return (revenue === 0 ? '' : `${revenue}€`);
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
  let totalPercentage = 0;
  Object.keys(sharingCategory).forEach((categoryKey) => {
    const category = sharingCategory[categoryKey];
    const item = new SharingItem(category.label, true);
    switch (categoryKey) {
      case 'author':
        self.dashboard.sharing.push(item);
        initializeSharingAuthor(self, item);
        totalPercentage += item.percentage;
        break;
      case 'producer':
        item.percentage = category.percentage;
        totalPercentage += item.percentage;
        self.dashboard.sharing.push(item);
        initializeSharingProducer(self, item.percentage);
        break;
      case 'distributor':
        item.percentage = category.percentage;
        totalPercentage += item.percentage;
        item.name = category.name;
        self.dashboard.sharing.push(item);
        break;
      case 'editor':
        item.percentage = 100 - totalPercentage;
        item.name = category.name;
        self.dashboard.sharing.push(item);
        break;
      default:
    }
  });
}

function initializeSharingAuthor (self, categoryItem) {
  authorSocieties.forEach((society) => {
    const modelAuthorSocieties = self.model.exploitationRights.authorSocieties;
    // Teste si la société d'auteurs est présente dans le modèle
    if (modelAuthorSocieties[society.label]) {
      const item = new SharingItem(society.label);
      item.percentage = modelAuthorSocieties[society.label];
      categoryItem.percentage += modelAuthorSocieties[society.label];
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
