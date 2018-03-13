import CoreRouterView from 'Core/components/core-router-view';
import VideoEditStep1 from './components/video-edit-step1';
import VideoEditStep2 from './components/video-edit-step2';
import VideoEditStep3 from './components/video-edit-step3';
import VideoSimulator from './components/video-simulator';

export default [
  {
    path: '/videos',
    component: CoreRouterView,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'add',
        name: 'video-add',
        component: CoreRouterView,
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
        path: 'simulator',
        name: 'video-simulator',
        component: VideoSimulator
      }
    ]
  }
];
