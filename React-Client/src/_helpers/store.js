import { createStore, applyMiddleware } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {  } from '../_reducers';

const loggerMiddleWare = createLogger();

export const store = {
  
}