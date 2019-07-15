firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.alert("Successful Login")
        return window.location.href="http://wrichiekkar.me/TheSourceBusinessCase/MemberPage";
    } else {
        // No user is signed in
    }
});

function login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error: " +errorMessage);

      });
}