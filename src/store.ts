import { createStore } from 'redux';
import notesReducer from './notesReducer';

export default createStore(notesReducer);