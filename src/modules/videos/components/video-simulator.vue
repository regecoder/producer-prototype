<template lang="pug">
  .view
    .view-area--header
      .view-title Simulateur de revenus
    .view-area--content
      .video-widget--short
        .video-widget-title {{ model.work.show.title }}
        .video-widget-subtitle {{ model.work.show.author }}
      .simulator
        .simulator-command-panel
          .simulator-command-panel-title Simulateur de vues
          .simulator-subscription
            .simulator-subscription-actionbar
              .button--action(@click="addView(0, 1)") + 1
              .button--action(@click="addView(0, 10)") + 10
              .button--action(@click="addView(0, 100)") + 100
              .button--action(@click="addView(0, 1000)") + 1000
            .simulator-subscription-comment Forfait B to C à 10€
          .simulator-subscription
            .simulator-subscription-actionbar
              .button--action(@click="addView(1, 1)") + 1
              .button--action(@click="addView(1, 10)") + 10
              .button--action(@click="addView(1, 100)") + 100
              .button--action(@click="addView(1, 1000)") + 1000
            .simulator-subscription-comment Forfait B to B à 40€
        .simulator-dashboard
          .simulator-total
            .block
              .caption Vues
              .value {{ totalViews }}
            .block
              .caption Revenus
              .value {{ dashboard.totalRevenue }}€
          .simulator-sharing
            .simulator-sharing-header
              .caption Titulaire de droits
              .caption--percentage %
              .caption
              .caption
              .caption--revenue Revenus
            .simulator-sharing-content(
              v-for="item in dashboard.sharing"
              v-bind:class="[item.category ? 'category' : 'item']"
            )
              .value {{ item.label }}
              .value--percentage(v-if="!item.categoryPercentage") {{ item.percentage }}
                span(v-if="item.percentage") %
              .value--percentage(v-else)
              .value {{ item.name }}
              .value--percentage {{ item.categoryPercentage }}
                span(v-if="item.categoryPercentage") %
              .value--revenue(v-if="item.percentage") {{ sharingRevenue(item) }}
              .value--revenue(v-else)
    .view-area--command-panel
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
