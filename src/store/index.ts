import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './modules/rootReducers';

import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

const store = createStore(
  rootReducers,
  composeWithDevTools(),
);

export default store;