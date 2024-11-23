function showMessage() {
    alert("Welcome to Car Dealership! Explore our wide range of cars today.");
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});
