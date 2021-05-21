
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDY3PhtvMKl4q7iDZ3Icb-E6xT24W60Z4Q",
  authDomain: "kwitertest.firebaseapp.com",
  databaseURL: "https://kwitertest-default-rtdb.firebaseio.com",
  projectId: "kwitertest",
  storageBucket: "kwitertest.appspot.com",
  messagingSenderId: "789906101288",
  appId: "1:789906101288:web:e5b8769a2a8dcece9f111d",
  measurementId: "G-NJENP580ZF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
      })
  }