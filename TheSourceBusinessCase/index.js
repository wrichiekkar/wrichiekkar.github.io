firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.href="http://wrichiekkar.me/TheSourceBusinessCase/MemberPage"
    } else {
    }
  });

function login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Incorrect login, try again")

      });
}