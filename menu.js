// Function to filter dishes based on category
function filterDishes(category) {
  // Hide all menu categories
  var categories = document.getElementsByClassName("menu-category");
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.display = "none";
  }

  // Show the selected category
  document.getElementById(category).style.display = "block";
}

// Show Dosa menu by default on page load
window.onload = function () {
  filterDishes("Dosa");
};
