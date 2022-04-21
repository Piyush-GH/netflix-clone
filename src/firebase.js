import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUrx_j7OCLQCil0wGgoHbBOtyovS2bjBo",
    authDomain: "netlfix-clone-f3aa4.firebaseapp.com",
    projectId: "netlfix-clone-f3aa4",
    storageBucket: "netlfix-clone-f3aa4.appspot.com",
    messagingSenderId: "961995771705",
    appId: "1:961995771705:web:1994322deeb478c0caa2e8",
    measurementId: "G-3PXHKTY1V7"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export{ auth };
  export default db;
