function login(){
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          window.location.href="http://wrichiekkar.me/MemberPage"
        } else {
          // No user is signed in.
        }
      });

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    window.alert(email + password);



}