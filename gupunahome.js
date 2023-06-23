var firebaseConfig = {
    apiKey: "AIzaSyBp9sLeuTyiWjAsi4oYkoSoOOh69POkdDE",
    authDomain: "trident-5f484.firebaseapp.com",
    databaseURL: "https://trident-5f484-default-rtdb.firebaseio.com",
    projectId: "trident-5f484",
    storageBucket: "trident-5f484.appspot.com",
    messagingSenderId: "1049979158837",
    appId: "1:1049979158837:web:7ed3777916c57ddb9c8c7c",
    measurementId: "G-MLMHHJZW1X"
  };
  firebase.initializeApp(firebaseConfig)
  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");
document.getElementById("username").innerHTML="bem-vindo(a)" + username + "!"
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitterpage.html"
}
function getData() { firebase.database().ref("/").on('value', function(snapshot)
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childeSnapshot)
{childKey = childSnapshot.Key;
roomNames = childeKey
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +" </div><hr>";
document.getElementById("output").innerHTML += row;
})})}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.seItem("room_name", name);
    window.location = "kwitterPage.html";
}
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("home_name");
    window.location = "index.html"; 
}
