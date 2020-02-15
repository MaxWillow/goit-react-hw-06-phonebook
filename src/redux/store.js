import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { saveToLS, loadStateFromLS } from '../utils/localeStorage';

const persistedState = loadStateFromLS();

const store = createStore(rootReducer, persistedState, devToolsEnhancer());

store.subscribe(() => saveToLS(store.getState()));

export default store;
