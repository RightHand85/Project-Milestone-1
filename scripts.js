document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate that all fields are filled
    if (name === "" || email === "" || message === "") {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";
    } else {
        document.getElementById("error-message").style.display = "none";
        document.getElementById("success-message").style.display = "block";
    }
});

