import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import xueshengList from '@/views/pages/xuesheng/list'
import xueshengDetail from '@/views/pages/xuesheng/formModel'
import xueshengAdd from '@/views/pages/xuesheng/formAdd'
import xueshengRegister from '@/views/pages/xuesheng/register'
import xueshengCenter from '@/views/pages/xuesheng/center'
import jiaoshiList from '@/views/pages/jiaoshi/list'
import jiaoshiDetail from '@/views/pages/jiaoshi/formModel'
import jiaoshiAdd from '@/views/pages/jiaoshi/formAdd'
import newsList from '@/views/pages/news/list'
import kaoshixinxiList from '@/views/pages/kaoshixinxi/list'
import kaoshixinxiDetail from '@/views/pages/kaoshixinxi/formModel'
import kaoshixinxiAdd from '@/views/pages/kaoshixinxi/formAdd'
import kaochangxinxiList from '@/views/pages/kaochangxinxi/list'
import kaochangxinxiDetail from '@/views/pages/kaochangxinxi/formModel'
import kaochangxinxiAdd from '@/views/pages/kaochangxinxi/formAdd'
import chengjixinxiList from '@/views/pages/chengjixinxi/list'
import chengjixinxiDetail from '@/views/pages/chengjixinxi/formModel'
import chengjixinxiAdd from '@/views/pages/chengjixinxi/formAdd'
import exampaperList from '@/views/pages/exam/exampaperList'
import examination from '@/views/pages/exam/examination'
import examrecordList from '@/views/pages/exam/examrecordList'
import examfailrecord from '@/views/pages/exam/examfailrecord'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'xueshengList',
			component: xueshengList
		}, {
			path: 'xueshengDetail',
			component: xueshengDetail
		}, {
			path: 'xueshengAdd',
			component: xueshengAdd
		}
		, {
			path: 'xueshengCenter',
			component: xueshengCenter
		}
		, {
			path: 'jiaoshiList',
			component: jiaoshiList
		}, {
			path: 'jiaoshiDetail',
			component: jiaoshiDetail
		}, {
			path: 'jiaoshiAdd',
			component: jiaoshiAdd
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'kaoshixinxiList',
			component: kaoshixinxiList
		}, {
			path: 'kaoshixinxiDetail',
			component: kaoshixinxiDetail
		}, {
			path: 'kaoshixinxiAdd',
			component: kaoshixinxiAdd
		}
		, {
			path: 'kaochangxinxiList',
			component: kaochangxinxiList
		}, {
			path: 'kaochangxinxiDetail',
			component: kaochangxinxiDetail
		}, {
			path: 'kaochangxinxiAdd',
			component: kaochangxinxiAdd
		}
		, {
			path: 'chengjixinxiList',
			component: chengjixinxiList
		}, {
			path: 'chengjixinxiDetail',
			component: chengjixinxiDetail
		}, {
			path: 'chengjixinxiAdd',
			component: chengjixinxiAdd
		}
		, {
			path: 'exampaperList',
			component: exampaperList
		}, {
			path: 'examrecordList',
			component: examrecordList
		}, {
			path: 'examfailrecord',
			component: examfailrecord
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/xueshengRegister',
		component: xueshengRegister
	}
	, {
		path: '/examination',
		component: examination
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
