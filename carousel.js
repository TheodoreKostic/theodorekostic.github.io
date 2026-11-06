const carousel = document.getElementById("project-carousel");

if (carousel) {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");

    const previousButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");
    const status = document.getElementById("carousel-status");

    let currentSlide = 0;

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.hidden = i !== currentSlide;
        });

        dots.forEach((dot, i) => {
            const isActive = i === currentSlide;

            dot.classList.toggle("active", isActive);

            if (isActive) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }
        });

        status.textContent =
            `Figure ${currentSlide + 1} of ${slides.length}`;
    }

    previousButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            showSlide(currentSlide - 1);
        }

        if (event.key === "ArrowRight") {
            showSlide(currentSlide + 1);
        }
    });

    showSlide(0);
}