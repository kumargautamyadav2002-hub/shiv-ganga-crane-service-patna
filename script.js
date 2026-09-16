// ========================================
// SHIV GANGA CRANE SERVICE
// FINAL JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Shiv Ganga Crane Service loaded successfully!");

    // ========================================
    // NAVIGATION
    // ========================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Navigation:", link.textContent);

        });

    });


    // ========================================
    // CALL BUTTON
    // ========================================

    const callButton = document.querySelector("#home > a");

    if (callButton) {

        callButton.addEventListener("click", function () {

            console.log("Call Now clicked");

        });

    }


    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================

    window.addEventListener("scroll", function () {

        const header = document.querySelector("header");

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 5px 25px rgba(0, 0, 0, 0.5)";

        } else {

            header.style.boxShadow = "none";

        }

    });

});