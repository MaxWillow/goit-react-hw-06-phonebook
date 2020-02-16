/*
With Redux toolkit
*/

import { createAction } from '@reduxjs/toolkit';
import * as types from './types';

export const addContact = createAction(types.ADD_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const searchContact = createAction(types.SEARCH_CONTACT);
export const showNotify = createAction(types.SHOW_NOTIFICATION);

/*
Without Redux toolkit
*/

// import * as types from './types';

// export const addContact = contact => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     contact,
//   },
// });

// export const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const searchContact = value => ({
//   type: types.SEARCH_CONTACT,
//   payload: {
//     value,
//   },
// });

// export const showNotify = text => ({
//   type: types.SHOW_NOTIFICATION,
//   payload: {
//     text,
//   },
// });
