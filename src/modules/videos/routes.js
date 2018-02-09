import VideoEdit from './components/video-edit';

export default [
  {
    path: '/videos/add',
    name: 'videos-add',
    component: VideoEdit,
    meta: {
      requiresAuth: false
    }
  }
];
