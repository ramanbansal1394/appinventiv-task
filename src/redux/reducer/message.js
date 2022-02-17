import { SEND_MESSAGE, DELETE_MESSAGE } from '../types';

const INITIAL_STATE = {
  list: [],
  error: ''
};

const messageReducer = (state = INITIAL_STATE, action) => {
  let temp;

  switch (action.type) {
    case SEND_MESSAGE:
      temp = state.list.slice()
      temp.push(action.payload)

      return {
        ...state,
        list: temp
      };

    case DELETE_MESSAGE:
      temp = state.list.slice()
      const index = temp.findIndex(data => data.id = action.payload)
      if (index > -1) {
        temp.splice(index, 1)
      }
      return {
        ...state,
        list: temp
      };

    default:
      return state;
  }
};

export default messageReducer;