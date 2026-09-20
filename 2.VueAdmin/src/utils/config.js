const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cl88908169/client/index.html'
        }
    },
    getProjectName(){
        return {
            projectName: "在线考试系统"
        } 
    }
}
export default config
