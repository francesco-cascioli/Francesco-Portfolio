document.addEventListener("DOMContentLoaded", function () {
    
    emailjs.init("9UaR2ZjBvUWywNGb8");

    
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        
        emailjs.send("service_bbm3d9m", "template_ww77qzf", {
            user_name: name,
            user_email: email,
            message: message,
        }).then(
            function (response) {
                alert("Message sent successfully!");
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                alert("Failed to send message. Please try again.");
                console.error("FAILED...", error);
            }
        );
    });
});




  
  
  