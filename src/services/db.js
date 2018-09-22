import Dexie from 'dexie';

const db = new Dexie('ReactReduxSampleDB');
db.version(1).stores({
  sites: '++id, url, imgUrl, user, password',
});

export default db;
