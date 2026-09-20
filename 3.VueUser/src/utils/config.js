const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '考试信息',
					icon: 'icon-common42',
					child:[
						{
							name:'考试信息',
							url:'/index/kaoshixinxiList'
						},
					]
				},
				{
					name: '考场信息',
					icon: 'icon-common48',
					child:[
						{
							name:'考场信息',
							url:'/index/kaochangxinxiList'
						},
					]
				},
				{
					name: '公告资讯',
					icon: 'icon-common43',
					child:[
						{
							name:'公告资讯',
							url:'/index/newsList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "在线考试系统"
        } 
    }
}
export default config
