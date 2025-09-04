// navbar, login & sign up
const navItem = document.querySelectorAll(".navbar-group > .navbar-item");

navItem.forEach((nav) => {
    const navDown = nav.querySelector(".navbar-down");
    if (navDown) {
        nav.addEventListener("mouseenter", () => {
            navDown.classList.add("navbar-expand");
        });
        nav.addEventListener("mouseleave", () => {
            navDown.classList.remove("navbar-expand");
        });
    }
});


const menuToggle = document.querySelector(".navbar-toggle");

menuToggle.addEventListener("click", (e) => {
    document.querySelector(".navbar-group").classList.toggle("navbar-expand");
    document.querySelector(".navbar-action").classList.toggle("navbar-expand");

    e.target.classList.toggle("navbar-expand");
});




// gambar slider
const sliderItems = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if (sliderItems) {
    sliderItems.forEach((slider, index) => {
        if (index === 0) {
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })
    
    setInterval(() => {
        sliderItems.forEach((slider, index) => {
            if(sliderActive === index) {
                slider.setAttribute("data-show", "show");
            } else {
                slider.setAttribute("data-show", "hidden");
            }
        });

        if(sliderActive === sliderItems.length - 1 ) {
            sliderActive= 0;
        } else {
            sliderActive++;
        }


    }, 5000)
}

// typing 
const typedText = document.querySelector(".typing-text");
const cursor = document.querySelector(".cursor");

const textArray = ["let's upgrade let your skill", "Build your future with code", "Master coding, master the future", "Your coding journey starts here"];
const typingDelay = 200;
const clearDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursor.classList.contains("typing"))
            cursor.classList.add("typing");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("typing");
        setTimeout(clear, newTextDelay);
    }
}

function clear() {
    if(charIndex > 0) {
        if(cursor.classList.contains("typing"))
            cursor.classList.add("typing");
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(clear, clearDelay);
    } else {
        cursor.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", 
    function () {
        if(textArray.length)
        setTimeout(type, newTextDelay + 250)
    }
)
