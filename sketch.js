var firebaseConfig = {
    apiKey: "AIzaSyDtKCViosSBQ9ofJxOiI_g5R0Qy_m__1sk",
    authDomain: "svic-118f0.firebaseapp.com",
    projectId: "svic-118f0",
    storageBucket: "svic-118f0.appspot.com",
    messagingSenderId: "129831693308",
    appId: "1:129831693308:web:b54d5a2496196cee962079",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function save() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user_data = {
        username: username,
        password: password
    }

    database.ref().child('users/' + username).set(user_data)
}


var form = document.getElementById("form");
var button = document.getElementById("Button");
var index = 0;

form.addEventListener('submit', e => {
    // console.log("working");
    // var schoolIndex = ("schools/school") + index

    //database.ref(schoolIndex).set({
    //   Username: username.value,
    //   password: password.value
    // })
    e.preventDefault();
    checkInput();
})

function eyeFunction() {
    var eye = document.getElementById("password");
    var eye1 = document.getElementById("hide1");
    var eye2 = document.getElementById("hide2");

    if (eye.type === 'password') {
        eye.type = 'text';
        eye1.style.display = "block";
        eye2.style.display = "none";
    }
    else {
        eye.type = 'password';
        eye1.style.display = "none";
        eye2.style.display = "block";
    }
}

function checkInput() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username cannot be blank');
    }
    else {
        setSucess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password cannot be blank');
    }
    else {
        setSucess(password);
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSucess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control sucess';
    }
}

function setup() {
    var backgorund_image = loadImage("backdrop.jpg");
}

function draw() {
    background(backgorund_image);
}
function pressed() {
    button.mousePressed(() => {
    })
}
