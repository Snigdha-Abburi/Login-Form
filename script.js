
function validateLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let validEmail = "user@gmail.com";
    let validPassword = "12345";

    if (email === validEmail && password === validPassword) {

        document.getElementById("message").innerHTML =
            "Login Successful!";

        document.getElementById("message").style.color = "green";

    } 
    else {

        document.getElementById("message").innerHTML =
            "Invalid Email or Password!";

        document.getElementById("message").style.color = "red";
    }

    return false;
}
