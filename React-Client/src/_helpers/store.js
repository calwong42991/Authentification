import { createStore, applyMiddleware } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { root } from '../_reducers';

const loggerMiddleWare = createLogger();

export const store = {
  
}