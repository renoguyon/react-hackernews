import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
};

const version = '/v0';

firebase.initializeApp(config);

export default firebase.database().ref(version);
