import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC0flvxdLi1WcXfx9LhRWJJb-pjFEnVuok",
    authDomain: "push-notification-reactjs.firebaseapp.com",
    projectId: "push-notification-reactjs",
    storageBucket: "push-notification-reactjs.appspot.com",
    messagingSenderId: "410451915353",
    appId: "1:410451915353:web:b536c66f587fa708a9b748"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;