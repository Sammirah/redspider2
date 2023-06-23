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
    roomname = localStorage.getItem("room_name");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
         name = messageData['name'];
         message = messageData['messa;ge'];
         like = messageData['like'];
         nameWithTag = "<h4>" + name + "<img src='lily.jpg' class='lido'> </h4>";
         messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+firebaseMessageId+ " value="+like+"onclick='updateLike(this.id)'>"
         spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

         row = nameWithTag + messageWithTag + spanWithTag;
         document.getElementById("output").innerHTML += row;

      } });  }); }
getData();
function enviar(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function updateLike(messageId) {
      console.log("botão like pressionado - " + messageId);
      button_id = messageId;
      likes = document.getElementById(button_id).value;
      updateLikes = Number(likes) + 1;
      console.log(updateLikes);
      
      firebase.database().ref(roomname).child(messageId).update({
            like : updatedLikes
      })
}
function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("username")
      window.location.replace("index.html")
}