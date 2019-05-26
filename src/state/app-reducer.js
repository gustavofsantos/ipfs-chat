import {
  PUSH_MESSAGE, SET_IPFS, SET_TOPIC, SET_USER,
} from './state-types';

export const INITIAL_STATE = {
  user: null,
  topic: '',
  messages: [],
  ipfs: null,
};

/**
 *
 * @param {object} state
 * @param {object} action
 * @param {string} action.type
 * @param {object|string} action.payload
 * @returns {*|{user: *}|{topic: *}|{messages: *[]}}
 */
export default function reducer(state, action) {
  switch (action.type) {
    case PUSH_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_TOPIC:
      return { ...state, topic: action.payload };
    case SET_IPFS:
      return { ...state, ipfs: action.payload };
    default:
      return state;
  }
}
