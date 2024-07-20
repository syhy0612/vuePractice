import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import EchartsBar from '../views/EchartsBar.vue';
import EchartsLine from '../views/EchartsLine.vue';
import EchartsPie from '../views/EchartsPie.vue';
import EchartsScatter from '../views/EchartsScatter.vue';
import EchartsMap from '../views/EchartsMap.vue';
import EchartsGauge from '../views/EchartsGauge.vue';
import EchartsRadar from '../views/EchartsRadar.vue';
import EchartsFunnel from '../views/EchartsFunnel.vue';
import Others from '../views/Others.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/vuePractice',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/echartsBar',
      name: 'echartsBar',
      component: EchartsBar
    },
    {
      path: '/echartsLine',
      name: 'echartsLine',
      component: EchartsLine
    },
    {
      path: '/echartsPie',
      name: 'echartsPie',
      component: EchartsPie
    },
    {
      path: '/echartsScatter',
      name: 'echartsScatter',
      component: EchartsScatter
    },
    {
      path: '/echartsMap',
      name: 'echartsMap',
      component: EchartsMap
    },
    {
      path: '/echartsGauge',
      name: 'echartsGauge',
      component: EchartsGauge
    },
    {
      path: '/echartsRadar',
      name: 'echartsRadar',
      component: EchartsRadar
    },
    {
      path: '/echartsFunnel',
      name: 'echartsFunnel',
      component: EchartsFunnel
    },
    {
      path: '/others',
      name: 'others',
      component: Others
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.afterEach((to, from) => {
  if (to.name === 'NotFound') {
    setTimeout(() => {
      router.push({ name: 'Home' });
    }, 3000);
  }
});

export default router;