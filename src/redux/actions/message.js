import { SEND_MESSAGE, DELETE_MESSAGE } from '../types';

export const sendMessage = (data) => ({
  type: SEND_MESSAGE,
  payload: data
})

export const deleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  payload: id
})
