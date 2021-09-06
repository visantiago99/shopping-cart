import { combineReducers } from 'redux';
import mercadoReducer from './mercadoReducer';

const rootReducer = combineReducers({
  mercadoReducer,
});

export default rootReducer;