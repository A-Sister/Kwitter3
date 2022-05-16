//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("nameOf_user").innerHTML = "Welcome "+user_name+"!";

    function addRoom() {
          room_name = document.getElementById("roomName").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "add room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
} 

function logOut() {
      window.location = "index.html";
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
}
