function login() {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let emailmsg = document.getElementById("email-msg");
    let passwordmsg = document.getElementById("password-msg");

    let user = localStorage.getItem(email);
    let data = JSON.parse(user);
    console.log(data);
    if (email === "") {
        document.querySelector("#email-msg").textContent =
            "Please enter a valid email address.";
    } else if (email === data.email && pass === data.pass) {
        location.href = "index.html";
    } else {
        document.querySelector("#password-msg").textContent = "Wrong password.";
    }
}
