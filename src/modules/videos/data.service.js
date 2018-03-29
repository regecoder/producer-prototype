import { store } from 'App';

import media101 from './data/media101';

export default initMedia;

function initMedia () {
  if (!store.state.video.mediaLoaded) {
    loadMedia();
    store.commit('setMediaLoaded', true);
  }
}

function loadMedia () {
  const keys = [
    'work',
    'exploitationRights',
    'authorRights'
  ];

  keys.forEach((key) => {
    const data = {
      key,
      value: media101[key]
    };
    store.commit('setVideoData', data);
  });
}
