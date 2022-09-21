const firebaseConfig = {
    apiKey: "AIzaSyAYOCZ7_kW4vOEW5mJuAHRBYMbfUNb7Dj4",
    authDomain: "parakeet-cf5c3.firebaseapp.com",
    databaseURL: "https://parakeet-cf5c3-default-rtdb.firebaseio.com",
    projectId: "parakeet-cf5c3",
    storageBucket: "parakeet-cf5c3.appspot.com",
    messagingSenderId: "126376769541",
    appId: "1:126376769541:web:0da30c4baf234f8893446c"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room' id=+"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.data().ref("/").child(room_name).update({
    purpose : "adding room name"
  });


    localStorage.setItem("room_name", room_name);


    window.location = "parrakeet_page.html";
}

function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name);
    window.location = "parrakeet_page.html";
}