import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz42Icj3CXiwb2jsmdDWbsf2nTSAH4kkQ",
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIL,
  authDomain: "expensifyapp-be6d5.firebaseapp.com",
  databaseURL: "https://expensifyapp-be6d5.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default };

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log("Log In");
//   } else {
//     console.log("Log Out");
//   }
// });

// EXAMPLES

// db.ref("expenses").push({
//   description: "Coffee",
//   note: "",
//   amount: 0,
//   createdAt: 0
// });

// db.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 0,
//   createdAt: 0
// });

// db.ref("expenses").push({
//   description: "Shopping",
//   note: "",
//   amount: 0,
//   createdAt: 0
// });

// db.ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// db.ref("expenses").on(
//   "value",
//   snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   },
//   e => {
//     console.log(e);
//   }
// );

// db.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// firebase
//   .database()
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "Paul 3"
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch(e => {
//     console.log(e);
//   });

// firebase
//   .database()
//   .ref("data")
//   .remove()
//   .then(() => {
//     console.log("Success");
//   })
//   .catch(e => {
//     console.log(e);
//   });
