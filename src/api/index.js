import Request from './request'

const http = new Request()
http.interceptor().request = (options) => {
    // 可以对options进行修改，例如添加全局的header等
    // console.log('请求前拦截👆: ', options)
    // 必须返回options
    // 初始化地址
    options.url = import.meta.env.VITE_API_URL + options.url
    // 跨域请求时是否携带凭证（cookies）
    options.withCredentials = true
    options.data = {
        realIP: '116.25.146.177',
        ...options.data,
        timestamp: Date.parse(new Date()) / 1000
    }
    return options
}

http.interceptor().response = (response) => {
    // console.log('请求后拦截👇: ', response)
    // 可以对response进行修改，例如处理错误信息等
    // 必须返回response
    return response
}

const $kmir = {
    http,
}

export {
    http
}
uni.$kmir = $kmir;