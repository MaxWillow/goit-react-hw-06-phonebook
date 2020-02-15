import { combineReducers } from 'redux';
import * as types from './types';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [payload.contact, ...state];

    case types.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const searchReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SEARCH_CONTACT:
      return payload.value;

    default:
      return state;
  }
};

const notifyReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SHOW_NOTIFICATION:
      return payload.text;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactReducer,
  filter: searchReducer,
  notifyText: notifyReducer,
});
