/* 모오르겠...

import axios, {AxiosInstance} from 'axios';
const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Access-Controll-Allow-Origin': '*'
}
const BASE_URL = 'http://api.stickinteractive.com'
function responseInterceptors(axiosInst: AxiosInstance) {
	axiosInst.interceptors.response.use(
		function (response) {
			return response.data;
		},
		function (error) {
			if (error.response.status === 403) {
				return Promise.reject({
					code: 403,
					message: '인증 기간이 만료 되었습니다.'

				})
			} else if (error.response.status === 401) {
				return Promise.reject({
					code: 401,
					message: '인증 정보가 없습니다.'
				});
			}
			return axiosInst;
		}
	);
}

export function axiosDefault() {
	return responseInterceptors(
		axios.create({
			baseURL: BASE_URL,
			headers: DEFAULT_HEADERS,
		})
	)
}
*/

import axios from "axios";

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Access-Controll-Allow-Origin': '*'
}
const BASE_URL = 'http://api.stickinteractive.com'

const instance = axios.create({
	baseURL : BASE_URL,
	headers: DEFAULT_HEADERS,
});

export default instance;