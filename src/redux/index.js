import configureStore from './configureStore';
import sagas from './sagas';
import store from './store';

export default () => configureStore(store, sagas);
