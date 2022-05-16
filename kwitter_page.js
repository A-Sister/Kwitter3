//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDDgVqm6y55pBYg_S0nI1GQUNC6ixHjcKM",
      authDomain: "kwitter-fbb0a.firebaseapp.com",
      databaseURL: "https://kwitter-fbb0a-default-rtdb.firebaseio.com",
      projectId: "kwitter-fbb0a",
      storageBucket: "kwitter-fbb0a.appspot.com",
      messagingSenderId: "189375277426",
      appId: "1:189375277426:web:1eb7a4edf3c8abd756d5eb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("userName");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").innerHTML = "";
}

function logout() {
      window.location = "index.html";
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
}
