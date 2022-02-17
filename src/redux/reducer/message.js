import { SEND_MESSAGE } from '../types';

const INITIAL_STATE = {
  list: [],
  error: ''
};

const messageReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      const temp = state.list.slice()
      temp.push(action.payload)

      return {
        ...state,
        list: temp
      };

    default:
      return state;
  }
};

export default messageReducer;