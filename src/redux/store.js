/*
With Redux toolkit
*/

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { saveToLS, loadStateFromLS } from '../utils/localeStorage';

const persistedState = loadStateFromLS();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => saveToLS(store.getState()));

export default store;

/*
Without Redux toolkit
*/

// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import rootReducer from './rootReducer';
// import { saveToLS, loadStateFromLS } from '../utils/localeStorage';

// const persistedState = loadStateFromLS();

// const store = createStore(rootReducer, persistedState, devToolsEnhancer());

// store.subscribe(() => saveToLS(store.getState()));

// export default store;
