function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
function toggleTheme() {
    var body = document.querySelector("body");
    body.classList.toggle("dark-theme");
}
function toggleAccordion(button) {
    var content = button.nextElementSibling;
    content.classList.toggle("active");
}
function viewMore() {
    // Redirect to the new page
    window.location.href = "newpage.html";
}
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Display the modal
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}