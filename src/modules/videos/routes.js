import VideoEdit from './components/video-edit';
import VideoEditStep1 from './components/video-edit-step1';
import VideoEditStep2 from './components/video-edit-step2';

export default [
  {
    path: '/videos/add',
    name: 'videos-add',
    component: VideoEdit,
    meta: {
      requiresAuth: true
    },
    redirect: {
      name: 'videos-add-step1'
    },
    children: [
      {
        path: 'step1',
        name: 'videos-add-step1',
        component: VideoEditStep1
      },
      {
        path: 'step2',
        name: 'videos-add-step2',
        component: VideoEditStep2
      }
    ]
  }
];
