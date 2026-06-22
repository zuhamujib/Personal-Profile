console.log("JS is running");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");

    fetch("components/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(err => console.error(err));

    fetch("components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.error(err));
});
