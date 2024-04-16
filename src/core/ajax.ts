import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

import { apiConfig, ConfigKeyType } from '@/consts';

/**
 * 创建 axios 实例
 * */
const instance = axios.create({
  timeout: 30 * 1000, // 30秒超时
});

/**
 * 配置异常重试
 * */
axiosRetry(instance, { retries: 3, retryDelay: (retryCount) => retryCount * 1000 });

// 返回信息处理
instance.interceptors.response.use((res) => {
  return res.data;
});

interface IRequestParam {
  name: ConfigKeyType;
  data?: any;
  id?: string;
  axiosConfig?: AxiosRequestConfig;
}

export const request = <T>({ name, data, id, axiosConfig }: IRequestParam): Promise<T> => {
  const { url, method, needId } = apiConfig[name];

  // 判断一下路由
  const reqUrl = needId ? `${url}/${id}` : url;

  switch (method) {
    case 'get':
      return get<T>(reqUrl, axiosConfig);
    case 'post':
      return post<T>(reqUrl, data!, axiosConfig);
    case 'patch':
      return patch<T>(reqUrl, data!, axiosConfig);
    case 'delete':
      return del<T>(reqUrl, axiosConfig);
    default:
      return put<T>(reqUrl, data!, axiosConfig);
  }
};

export const get = <T>(url: string, axiosConfig?: AxiosRequestConfig): Promise<T> => {
  return instance.get<any, T, any>(url, axiosConfig);
};

export const post = <T>(url: string, data: any, axiosConfig?: AxiosRequestConfig): Promise<T> => {
  return instance.post<any, T, any>(url, data, axiosConfig);
};

export const put = <T>(url: string, data: any, axiosConfig?: AxiosRequestConfig): Promise<T> => {
  return instance.put<any, T, any>(url, data, axiosConfig);
};

export const patch = <T>(url: string, data: any, axiosConfig?: AxiosRequestConfig): Promise<T> => {
  return instance.patch<any, T, any>(url, data, axiosConfig);
};

export const del = <T>(url: string, axiosConfig?: AxiosRequestConfig): Promise<T> => {
  return instance.delete<any, T, any>(url, axiosConfig);
};
