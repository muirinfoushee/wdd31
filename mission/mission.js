// Select the dropdown
const themeSelector = document.querySelector("#theme-select");

// Select the logo image
const logo = document.querySelector("#logo");

// Function to change theme
function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        logo.setAttribute("src", "byui-logo_white.webp");
    } else {
        document.body.classList.remove("dark");
        logo.setAttribute("src", "byui-logo_blue.webp");
    }
}

// Add event listener
themeSelector.addEventListener("change", changeTheme);

// Run once on page load
changeTheme();
