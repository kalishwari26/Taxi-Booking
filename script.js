// document.addEventListener('DOMContentLoaded', () => {
//     const steps = document.querySelectorAll('.step');

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target); // Optional: Stop observing once it has become visible
//             }
//         });
//     }, {
//         threshold: 0.1 // Adjust this value to control when the animation triggers
//     });

//     steps.forEach(step => {
//         observer.observe(step);
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.hero,.hero-image img, .hero-image2 img, .hero-image3 img,.services,.how-it-works,.why-choose-us,.featured-destinations,.footer,.step, .point, .testimonial, .trust-badge');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once it has become visible
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focus');
    });
    input.addEventListener('blur', () => {
        if (input.value === "") {
            input.classList.remove('focus');
        }
    });
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
};
