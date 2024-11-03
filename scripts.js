// scripts.js

// JavaScript to handle form submission and send data to the server
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate that all fields are filled
    if (name === "" || email === "" || message === "") {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";
        return; // Exit the function if validation fails
    }

    // Hide the error message if validation passed
    document.getElementById("error-message").style.display = "none";

    try {
        // Send the form data to the server using Fetch API
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        // Parse the response from the server
        const result = await response.json();

        // Check if the submission was successful
        if (result.status === 'success') {
            document.getElementById("success-message").style.display = "block";
        } else {
            document.getElementById("error-message").innerText = 'Error submitting form. Please try again.';
            document.getElementById("error-message").style.display = "block";
        }
    } catch (error) {
        document.getElementById("error-message").innerText = 'Error submitting form. Please try again.';
        document.getElementById("error-message").style.display = "block";
        console.error('Form submission error:', error);
    }
});
