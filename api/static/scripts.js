// Change style of navbar on scroll
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    var accbar = document.getElementById("accountBar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.className = "w3-bar transparent" + " w3-card" + " w3-animate-top" + " w3-white";
        accbar.className = "dropdown transparent" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        accbar.className = accbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
