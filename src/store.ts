import { createStore, applyMiddleware } from 'redux';
import {notesReducer} from './notesReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
})

const middleware = applyMiddleware(logger);

export default createStore(notesReducer, middleware);