document.querySelector(".error").style.display = "none";

document.querySelector("#form").addEventListener("submit", (e) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phoneNum = document.getElementById("phoneNum").value;
    const dof = document.getElementById("date-of-birth").value;
    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmpassword").value;

    // user
    const user = {
        email: email,
        fname: fname,
        lname: lname,
        phoneNum: phoneNum,
        dof: dof,
        pass: pass,
        confirmPass: confirmPass,
    };

    // check all input must be filled
    if (
        !email ||
        !fname ||
        !lname ||
        !phoneNum ||
        !dof ||
        !pass ||
        !confirmPass
    ) {
        document.querySelector(".error").textContent =
            "All field is required !";
        document.querySelector(".error").style.display = "block";
        window.location.href = "#error";
    }
    // Check validity of email
    const emailRegexp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.match(emailRegexp)) {
        document.querySelector("#email-msg").textContent =
            "Please enter a valid email address.";
    } else {
        document.querySelector("#email-msg").style.display = "none";
    }

    // Check validity of first name
    if (fname == "") {
        document.querySelector("#fname-msg").textContent =
            "Please enter a valid first name.";
    } else {
        document.querySelector("#fname-msg").style.display = "none";
    }

    // Check validity of last name
    if (lname == "") {
        document.querySelector("#lname-msg").textContent =
            "Please enter a valid last name.";
    } else {
        document.querySelector("#lname-msg").style.display = "none";
    }

    // Check validity of phone number
    const phonenumRegexp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phoneNum.match(phonenumRegexp)) {
        document.querySelector("#phoneNum-msg").textContent =
            "Please enter a valid phone number";
    } else {
        document.querySelector("#phoneNum-msg").style.display = "none";
    }

    // Check validity of date of birth
    if (dof == "") {
        document.querySelector("#dof-msg").textContent =
            "Please enter a valid date of birth.";
    } else {
        document.querySelector("#dof-msg").style.display = "none";
    }

    // Check validity of password
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!pass.match(passwordRegexp)) {
        document.querySelector("#password-msg").textContent =
            "Password does not meet minimum requirements.";
    } else {
        document.querySelector("#password-msg").style.display = "none";
    }

    // Check validity of confirm password to make sure same as password
    if (confirmPass == "") {
        document.querySelector("#confirmpassword-msg").textContent =
            "Please enter a valid confirm password.";
    } else if (!pass.match(confirmPass)) {
        document.querySelector("#confirmpassword-msg").textContent =
            "Confirm Password is not the same as Password";
    }

    if (
        email != "" &&
        fname != "" &&
        lname != "" &&
        phoneNum.match(phonenumRegexp) &&
        dof != "" &&
        pass.match(passwordRegexp) &&
        confirmPass.match(pass)
    ) {
        let json = JSON.stringify(user);
        localStorage.setItem(email, json);
        alert(
            "Your register is succesfull! You can click to login button below"
        );
    }
});

document.querySelector("#confirmpassword").addEventListener("change", () => {
    if (
        document
            .getElementById("password")
            .value.match(document.getElementById("confirmpassword").value)
    ) {
        document.querySelector("#confirmpassword-msg").style.display = "none";
    }
});
