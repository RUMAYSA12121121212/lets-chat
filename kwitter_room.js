
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  var firebaseConfig = {
    apiKey: "AIzaSyDRw9XFuOWEezDa9zAynNGBgpBfHvsWuR8",
    authDomain: "kwitter-e4635.firebaseapp.com",
    databaseURL: "https://kwitter-e4635-default-rtdb.firebaseio.com",
    projectId: "kwitter-e4635",
    storageBucket: "kwitter-e4635.appspot.com",
    messagingSenderId: "550779849572",
    appId: "1:550779849572:web:400c5693370e0e21834871"
  };
  
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "  + user_name + " !";

function addRoom()
{ 
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"

    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";