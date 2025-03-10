document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownContent = document.querySelector(".nav-dropdown-content");

  dropdown.addEventListener("mouseenter", () => {
    dropdownContent.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none";
  });
});
