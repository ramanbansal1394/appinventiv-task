import { SEND_MESSAGE } from '../types';

export const sendMessage = (payload) => ({
  type: SEND_MESSAGE,
  payload
})
