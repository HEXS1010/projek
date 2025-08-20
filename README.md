# projek
NIH CODENYA KAK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODING LEARN</title>
    <link rel="stylesheet" href="/css/style.css">
    
    <!-- font code -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">


</head>
<body>

    <!-- navbar mulai -->
    <header>
        <nav class="navbar">
            <img  class="navbar-logo" src="/img/logo coding 1.png" alt="logo">
            <ul class="navbar-grup">
                <li class="navbar-item">Home</li>
                <li class="navbar-item">Learn
                    <ul class="navbar-down">
                        <li class="navbar-item">WEB DEV</li>
                        <li class="navbar-item">Game dev </li>
                        <li class="navbar-item">CYBERSECURITY</li>
                    </ul>
                </li class="navbar-item">
                <li class="navbar-item">Language
                    <ul class="navbar-down">
                        <li class="navbar-item">Html, Css, Javasript</li>
                        <li class="navbar-item">C++, C#, Java</li>
                        <li class="navbar-item">React.js, Boostrapt, Tailwindcss</li>
                    </ul>
                </li class="navbar-item">
                <li class="navbar-item">Kontak</li>
            </ul>
            <div class="navbar-action">
                <button>login</button>
                <button>Sign up</button>
            </div>
        </nav>
    </header>
    <!-- navbar akhir -->

    <!-- halaman awal/slider awal mulai -->
    <div class="slider-container">
        <div class="slider-item">
            <img src="/img/pixel 1.png" alt="">
            <div class="slider-content">
                <h2 class="slider-title">Let’s Upgrade late your skill</h2>
                <p class="slider-decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor veniam, nam facilis reprehenderit impedit.</p>
                <a class="slider-action" href="#">Get Started</a>
            </div>
        </div>
        <div class="slider-item">
            <img src="/img/pixel 2.jpg" alt="">
            <div class="slider-content">
                <h2 class="slider-title">Let’s Upgrade late your skill</h2>
                <p class="slider-decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor veniam, nam facilis reprehenderit impedit.</p>
                <a class="slider-action" href="#">Get Started</a>
            </div>
        </div>
        <div class="slider-item">
            <img src="/img/pixel 3.jpg" alt="">
            <div class="slider-content">
                <h2 class="slider-title">Let’s Upgrade late your skill</h2>
                <p class="slider-decription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor veniam, nam facilis reprehenderit impedit.</p>
                <a class="slider-action" href="#">Get Started</a>
            </div>
        </div>
    </div>
    <!-- halaman utama/slider awal akhir-->

    <script src="/js/script.js"></script>
</body>
</html>

css
:root {
    --primary: #050a26;
    --secondery: #ffc700;
    --color-text: #ffffff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Source Code Pro", monospace;
    font-style: normal;
}

.html, body {
    background-color: var(--primary);
    overflow-x: hidden;
}
/* navbar awal */
.navbar {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #000;
    outline: 1px solid white;
    font-weight: 700;
    z-index: 1000;
    position: fixed;
    width: 100%;
}

.navbar ul {
    list-style: none;
    color: white;
}

.navbar-logo {
    height: 3rem;
}

.navbar-grup {
    display: flex;
    gap: 2rem;
    padding: 1rem;
}

.navbar-item {
    padding: 0.5rem;
    position: relative;
    text-wrap: nowrap;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    width: fit-content;

}

.navbar-item:hover {
    border-color: black;
}

.navbar .navbar-down {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--secondery);
    padding: 1rem;
    border: 1px solid rgb(0, 0, 0);
    display: none;
    box-shadow: 5px 5px 0 rgb(255, 255, 255);
    color: black;
}

.navbar-down.navbar-expand {
    display: block;
    animation: menuReveal 200ms linear;
}


.navbar .navbar-action button {
    border: 1px solid rgb(0, 0, 0);
    background: var(--secondery);
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 200ms;
    color: black;
    font-weight: 700;
}

.navbar .navbar-action button:hover {
    box-shadow: 5px 5px 0 rgb(255, 255, 255);
    transform: translate(-5px, -5px);
}

@keyframes menuReveal {
    from {
        transform: translateY(-0.5rem);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
/* navbar akhir */

/* halaman awal/slider awal */

.slider-container {
    background-color: black;
    width: 100vw;
    height: 100hv;
}

.slider-container .slider-item {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    position: absolute;
    transition: opacity 3000ms;
    isolation: isolate;
}

.slider-container .slider-item[data-show="show"] {
    opacity: 1;
}
.slider-container .slider-item[data-show="hidden"] {
    z-index: -1;
    opacity: 0;
}

.slider-container .slider-item::before {
    content:'';
    width: 100%;
    height:100%;
    position: absolute;
    background-image: linear-gradient(to top, black, rgba(0, 0, 0, 0.475), transparent);
}

.slider-container .slider-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider-item .slider-content {
    position: absolute;
    color: var(--secondery);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.slider-content .slider-title {
    font-size: 2rem;
}


.slider-content .slider-description {
    font-weight: 200;
    width: 50ch;
    margin: 0 auto;
    line-height: 2;

}

.slider-content .slider-action {
    color: var(--color-text);
    border: 2px solid var(--secondery);
    padding: 0.5rem 1.5rem;
    font-size: 1.1rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 4px;
    width: fit-content;
    position: relative;
    isolation: isolate;
}
    
.slider-content .slider-action::before {
    content: '';
    background-color: var(--secondery);
    position: absolute;
    inset: 0;
    z-index: -1;
    width: 0;
    transition: all 500ms;
}

.slider-content .slider-action:hover {
    color: black;
    transition: all 500ms;

}
.slider-content .slider-action:hover::before {
    width: 100%;

}





/* hp */
@media only screen and (max-width : 600px) {
    body {
    }
}

javascript
// Navbar, login & sign up
        const navItem = document.querySelectorAll(".navbar-grup > .navbar-item");

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





// gambar slider
const sliderItems = document.querySelectorAll(".slider-item");

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

        if(sliderActive === sliderItems.length -1) {
            sliderActive= 0;
        } else {
            sliderActive++;
        }

    }, 5000)
}
