import {
  PUSH_MESSAGE, SET_IPFS, SET_TOPIC, SET_USER,
} from './state-types';

export const actionPushMessage = payload => ({
  type: PUSH_MESSAGE,
  payload,
});

export const actionSetUser = payload => ({
  type: SET_USER,
  payload,
});

export const actionSetTopic = payload => ({
  type: SET_TOPIC,
  payload,
});


export const actionSetIpfsNode = payload => ({
  type: SET_IPFS,
  payload,
});
