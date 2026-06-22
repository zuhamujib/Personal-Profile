console.log("JS is running");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    fetch("navigation/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(err => console.error(err));
});
