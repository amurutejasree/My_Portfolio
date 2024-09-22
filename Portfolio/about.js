document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseenter", () => {
            service.style.transform = "translateY(-10px)";
            service.style.background = "#007bff";
            service.style.color = "#fff";
            service.querySelector("i").style.color = "#fff";
        });

        service.addEventListener("mouseleave", () => {
            service.style.transform = "translateY(0)";
            service.style.background = "#f9f9f9";
            service.style.color = "#333";
            service.querySelector("i").style.color = "#007bff";
        });
    });
});
