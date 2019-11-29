import * as firebase from 'firebase/app';
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCb0heU0FzozXzFWbThwufRzjw4ixUJbag",
  authDomain: "rhine-react.firebaseapp.com",
  databaseURL: "https://rhine-react.firebaseio.com",
  projectId: "rhine-react",
  storageBucket: "rhine-react.appspot.com",
  messagingSenderId: "502684960743",
  appId: "1:502684960743:web:817e5d0a0d816b1bbd1f42",
  measurementId: "G-MTZ6LDCEPX"
};

firebase.initializeApp(firebaseConfig);
export default firebase;