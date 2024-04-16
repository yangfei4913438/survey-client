import { request } from '@/core/ajax';

export async function getQuestionById<T>(id: string) {
  return await request<T>({ name: 'question', id });
}
