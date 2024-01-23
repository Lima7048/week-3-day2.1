const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");
const cookieNotice = document.getElementById("cookie-notice")

acceptButton.addEventListener("click", () => {
    console.log("Accepted!");
});
declineButton.addEventListener("click", () => {
    console.log("Declined!");
});

acceptButton.addEventListener("click", () => {
    document.cookie = "cookiesAccepted=true";
});
declineButton.addEventListener("click", () => {
    cookieNotice.style.display = "none";
    document.cookie = "cookiesAccepted=false";
});


const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (!cookiesAccepted) {
    cookieNotice.style.display = "block";
}

const toggleThemeButton = document.getElementById("dark")

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    // document.body.style.background("black")

});