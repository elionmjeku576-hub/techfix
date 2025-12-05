// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault(); // Ndalon dërgimin e menjëhershëm

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }

    document.getElementById("successMessage").style.display = "block";

    // Pas 2 sekondave pastrohet forma
    setTimeout(() => {
        document.getElementById("contactForm").reset();
    }, 2000);
});
// LOGIN FORM VALIDATION
document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault(); // Ndalon dërgimin e formës

    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPassword").value.trim();

    if (email === "" || pass === "") {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }

    document.getElementById("loginMessage").style.display = "block";

    // Pas 1.5 sekondave pastrohen fushat
    setTimeout(() => {
        document.getElementById("loginForm").reset();
    }, 1500);
});
// REGISTER FORM VALIDATION
document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("regName").value.trim();
    let surname = document.getElementById("regSurname").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let pass = document.getElementById("regPassword").value.trim();
    let confirm = document.getElementById("regConfirm").value.trim();

    if (name === "" || surname === "" || email === "" || pass === "" || confirm === "") {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }

    if (pass !== confirm) {
        alert("Fjalëkalimet nuk përputhen!");
        return;
    }

    document.getElementById("registerMessage").style.display = "block";

    setTimeout(() => {
        document.getElementById("registerForm").reset();
    }, 1500);
});
