/* import axios from "axios";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "Access-Controll-Allow-Origin": "*",
};

const BASE_URL = "http://api.stickinteractive.com/";

function responseInterceptors(axiosInst) {
  axiosInst.interceptors.response.use(
    function(response) {
      return response.data;
    },
    function(error) {
      if (error.response.status === 403) {
        return Promise.reject({
          code: 403,
          message: "인증 기간이 만료 되었습니다.",
          // 인증 정보 불일치
        });
      } else if (error.response.status === 401) {
        return Promise.reject({
          code: 401,
          message: "인증 정보가 없습니다.",
        });
      }
      return axiosInst;
    }
  );
}

// 인증이 필요 없는 기본 통신 axios instance
export function axiosDefault() {
  return responseInterceptors(
    axios.create({
      baseURL: BASE_URL,
      headers: DEFAULT_HEADERS,
    })
  );
} */

import axios from "axios";

/*
    axios 인스턴스를 생성합니다.
    생성할때 사용하는 옵션들 (baseURL, timeout, headers 등)은 다음 URL에서 확인할 수 있습니다.
    https://github.com/axios/axios 의 Request Config 챕터 확인
*/
const instance = axios.create({
  baseURL: "http://api.stickinteractive.com/",
  timeout: 1000,
});

/*
    1. 요청 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 요청 바로 직전 - 인자값: axios config
    2) 요청 에러 - 인자값: error
*/
instance.interceptors.request.use(
  function(config) {
    // 요청 바로 직전
    // axios 설정값에 대해 작성합니다.
    return config;
  },
  function(error) {
    // 요청 에러 처리를 작성합니다.
    return Promise.reject(error);
  }
);

/*
    2. 응답 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 응답 정성 - 인자값: http response
    2) 응답 에러 - 인자값: http error
*/
instance.interceptors.response.use(
  function(response) {
    /*
        http status가 200인 경우
        응답 바로 직전에 대해 작성합니다. 
        .then() 으로 이어집니다.
    */
    return response;
  },

  function(error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.    
    */
    return Promise.reject(error);
  }
);

// 생성한 인스턴스를 익스포트 합니다.
export default instance;
