/*
With Redux toolkit
*/

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as types from './types';

const contactsReducer = createReducer([], {
  [types.ADD_CONTACT]: (state, action) => {
    return [action.payload, ...state];
  },

  [types.DELETE_CONTACT]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [types.SEARCH_CONTACT]: (state, action) => {
    return action.payload;
  },
});

const notifyReducer = createReducer('', {
  [types.SHOW_NOTIFICATION]: (state, action) => {
    return action.payload;
  },
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notifyText: notifyReducer,
});

/*
Without Redux toolkit
*/

// import { combineReducers } from 'redux';
// import * as types from './types';

// const contactReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [payload.contact, ...state];

//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload.id);

//     default:
//       return state;
//   }
// };

// const searchReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.SEARCH_CONTACT:
//       return payload.value;

//     default:
//       return state;
//   }
// };

// const notifyReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.SHOW_NOTIFICATION:
//       return payload.text;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts: contactReducer,
//   filter: searchReducer,
//   notifyText: notifyReducer,
// });
