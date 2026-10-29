
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    const isDark = theme === "dark";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    themeToggle.setAttribute("aria-pressed", String(isDark));
}


// Use the saved choice, or the system preference on the first visit.
const initialTheme =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

setTheme(initialTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});
