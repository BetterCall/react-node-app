import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQfvSt4UYoABHdgiU8WjZ0Xr0eK1jq6JA",
  authDomain: "meetup-5b9e2.firebaseapp.com",
  databaseURL: "https://meetup-5b9e2.firebaseio.com",
  projectId: "meetup-5b9e2",
  storageBucket: "meetup-5b9e2.appspot.com",
  messagingSenderId: "512361653028"
};
firebase.initializeApp(config);


const snapshotToArray = (snapshot) => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

const db = firebase.database()
const auth = firebase.auth();

export {
  auth,
  db,
  snapshotToArray
};
