	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import xuesheng from '@/views/xuesheng/list'
	import chengjixinxi from '@/views/chengjixinxi/list'
	import examquestion from '@/views/exam/examquestion/list'
	import jiaoshi from '@/views/jiaoshi/list'
	import kaoshixinxi from '@/views/kaoshixinxi/list'
	import exampaper from '@/views/exampaper/list'
	import kaochangxinxi from '@/views/kaochangxinxi/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'
	import exampaperlist from '@/views/exam/exampaperlist/list'
	import examination from '@/views/exam/exampaperlist/examination'
	import examrecord from '@/views/exam/examrecord/list'
	import examfailrecord from '@/views/exam/examfailrecord/list'
	import jiaoshiRegister from '@/views/jiaoshi/register'
	import jiaoshiCenter from '@/views/jiaoshi/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/jiaoshiCenter',
			name: '教师个人中心',
			component: jiaoshiCenter
		}
		,{
			path: '/news',
			name: '公告资讯',
			component: news
		}
		,{
			path: '/xuesheng',
			name: '学生',
			component: xuesheng
		}
		,{
			path: '/chengjixinxi',
			name: '成绩信息',
			component: chengjixinxi
		}
		,{
			path: '/examquestion',
			name: '试题管理',
			component: examquestion
		}
		,{
			path: '/jiaoshi',
			name: '教师',
			component: jiaoshi
		}
		,{
			path: '/kaoshixinxi',
			name: '考试信息',
			component: kaoshixinxi
		}
		,{
			path: '/exampaper',
			name: '试卷管理',
			component: exampaper
		}
		,{
			path: '/kaochangxinxi',
			name: '考场信息',
			component: kaochangxinxi
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		, {
			path: '/exampaperlist',
			name: '考试列表',
			component: exampaperlist
		}, {
			path: '/examrecord',
			name: '考试记录',
			component: examrecord
		}, {
			path: '/examfailrecord',
			name: '错题本',
			component: examfailrecord
		}
		]
	},
	{
		path: '/jiaoshiRegister',
		name: '教师注册',
		component: jiaoshiRegister
	},
	{
		path: '/examination',
		name: '考试',
		component: examination
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
