const toggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#navbarNav");
const icon = toggler.querySelector("img");

// Function to update the icon based on the navbar state
function updateIcon() {
    if (navbarCollapse.classList.contains("show")) {
        icon.src = "./assets/icons/menu-bar-close-icon.svg";
    } else {
        icon.src = "./assets/icons/menu-bar-icon.svg";
    }
}

// Add event listener to the toggler button
toggler.addEventListener("click", updateIcon);

// Close the navbar when a link is clicked
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", function () {
        const collapseInstance = new bootstrap.Collapse(navbarCollapse, {
            toggle: false, // Avoid toggling automatically
        });
        collapseInstance.hide(); // Close the navbar
        icon.src = "./assets/icons/menu-bar-icon.svg"; // Reset icon to closed state
    });
});

// Update the icon when the navbar state changes
navbarCollapse.addEventListener("hidden.bs.collapse", updateIcon);
navbarCollapse.addEventListener("shown.bs.collapse", updateIcon);


// Add event listener to detect scroll
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
});

// Initialize the map and set its view to the desired location
var map = L.map("map").setView([11.159222, 77.354056], 13);

// Load and display OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add a marker at the desired location
L.marker([11.159222, 77.354056])
  .addTo(map)
  .bindPopup("A marker on this location.")
  .openPopup();

document.querySelector(".view-menu-btn").addEventListener("click", function () {
  document.querySelector(".menu-section").scrollIntoView({
    behavior: "smooth",
  });
});

document
  .querySelector(".about-us-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".menu-section").scrollIntoView({
      behavior: "smooth",
    });
  });

function navigateToWhatsApp(phoneNumber) {
  let message =
    "Hello! I would like to know more about your menu and services at Dine On Wheels. Can you provide more details?";
  let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.location.href = whatsappUrl;
}

document
  .getElementById("whatsappReachBtn")
  .addEventListener("click", function () {
    navigateToWhatsApp("9385514851");
  });

document.getElementById("whatsAppBtn").addEventListener("click", function () {
  navigateToWhatsApp("9385514851");
});

document.getElementById("instagramBtn").addEventListener("click", function () {
  let instagramUrl =
    "https://www.instagram.com/dineonwheels_?igsh=MXc5YXlsdmNrbHV3";
  window.location.href = instagramUrl;
});

// Open the modal
function openModal(image) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("imgModal");

  modal.style.display = "flex";
  modalImg.src = image.src;
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside the image
document.getElementById("myModal").addEventListener("click", function (event) {
  var modalImg = document.getElementById("imgModal");
  if (event.target !== modalImg) {
    closeModal();
  }
});
