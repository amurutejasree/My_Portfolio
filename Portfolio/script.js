document.addEventListener("DOMContentLoaded", () => {
  const hireMeBtn = document.querySelector(".hire__me");
  const portfolioBtn = document.querySelector(".portfolio");

  hireMeBtn.addEventListener("click", () => {
    window.location.href = "#contact";
  });

  portfolioBtn.addEventListener("click", () => {
    window.location.href = "#projects";
  });


  // Close the navigation menu on link click for mobile
  const checkbox = document.getElementById("check");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      checkbox.checked = false;
    });
  });
});
