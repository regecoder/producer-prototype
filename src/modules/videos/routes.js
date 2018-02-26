import VideoEdit from './components/video-edit';
import VideoEditStep1 from './components/video-edit-step1';
import VideoEditStep2 from './components/video-edit-step2';
import VideoEditStep3 from './components/video-edit-step3';
import VideoSimulation from './components/video-simulation';

export default [
  {
    path: '/videos/add',
    name: 'video-add',
    component: VideoEdit,
    meta: {
      requiresAuth: true
      // requiresAuth: false
    },
    redirect: {
      name: 'video-add-step1'
    },
    children: [
      {
        path: 'step1',
        name: 'video-add-step1',
        component: VideoEditStep1
      },
      {
        path: 'step2',
        name: 'video-add-step2',
        component: VideoEditStep2
      },
      {
        path: 'step3',
        name: 'video-add-step3',
        component: VideoEditStep3
      }
    ]
  },
  {
    path: '/videos/simulation',
    name: 'video-simulation',
    component: VideoSimulation
  }
];
