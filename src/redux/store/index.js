import { combineReducers } from 'redux';

import auth from './auth';
import site from './site';

export default combineReducers({
  auth,
  site,
});
