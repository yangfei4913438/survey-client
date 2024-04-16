import { request } from '@/core/ajax';

// 提交答卷
export async function postAnswer<T>(answerInfo: any) {
  return await request<T>({ name: 'answer', data: answerInfo });
}
