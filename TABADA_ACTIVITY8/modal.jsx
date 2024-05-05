var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var submitButton = document.getElementById("submitButton");

//click the button and modal appears 
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        document.getElementById('errorMessage').textContent = '*Please fill in the required fields.';
    } else {
        modal.style.display = "block";
        document.getElementById("modalMessage").innerText = "Your message has been submitted. Thank you!";
        document.getElementById("contactForm").reset();
        document.getElementById('errorMessage').textContent = '';
    }
});

//closes the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
