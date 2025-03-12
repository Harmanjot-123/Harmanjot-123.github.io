// Change background color
function changeBackground() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
}

// Display greeting based on time
function displayGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    document.getElementById("greeting").innerText = greeting;
}

// Form submission handling
document.addEventListener("DOMContentLoaded", function() {
    displayGreeting();
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            
            document.getElementById("form-message").innerText = `Thank you, ${name}! Your message has been received.`;
            form.reset();
        });
    }
});
