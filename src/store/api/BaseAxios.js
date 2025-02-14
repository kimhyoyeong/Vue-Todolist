import axios from 'axios'

const BASE_URL = 'https://api.stickinteractive.com'

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Controll-Allow-Origin': '*'
}

function responseInterceptors(axiosInst) {
    axiosInst.interceptors.response.use(
        function (response) {
            return response.data
        },
        function (error) {
            if (error.response.status === 403) {
                return Promise.reject({
                    code: 403,
                    message: "인증 기간이 만료 되었습니다.",
                    // 인증 정보 불일치
                })
            } else if (error.response.status === 401) {
                return Promise.reject({
                    code: 401,
                    message: "인증 정보가 없습니다.",
                })
            }
        }
    )
    return axiosInst
}

// 인증이 필요 없는 기본 통신 axios instance
export function axiosDefault() {
    return responseInterceptors(
        axios.create({
            baseURL: BASE_URL,
            headers: DEFAULT_HEADERS,
            timeout: 3000,
        })
    )
}
