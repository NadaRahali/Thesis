// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBK0R4DyneF5fRsPb9xFzMX_309j6IfmGE",
    authDomain: "login-829f1.firebaseapp.com",
    projectId: "login-829f1",
    storageBucket: "login-829f1.appspot.com",
    messagingSenderId: "229776849607",
    appId: "1:229776849607:web:d8a2a4fc47b5147c781ce2",
    measurementId: "G-FR5G0JKBPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Submit Button {Login button}
const Submit = document.getElementById("submit");
Submit.addEventListener("click", function () {
    event.preventDefault()

    // Inputs 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location.href = "../Dashboard1/dsh.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})

// reset 
const reset = document.getElementById("reset");
reset.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})
