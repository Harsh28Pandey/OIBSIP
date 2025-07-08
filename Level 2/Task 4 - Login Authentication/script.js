document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("regUsername").value;
            const password = document.getElementById("regPassword").value;
            localStorage.setItem("user", JSON.stringify({ username, password }));
            alert("Registration successful! Please login.");
            window.location.href = "index.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                localStorage.setItem("isLoggedIn", true);
                window.location.href = "secure.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});
