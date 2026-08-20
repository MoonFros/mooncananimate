/* =========================================================
   MOONCANANIMATE 2.0
   CONTENT DATABASE
========================================================= */


/* =========================================================
   FEATURED ANIMATIONS
========================================================= */

const animations = [

    {
        title: "Star Walker",
        type: "Short Film",
        video: "6WT2fUeS22k",
        description:
            "A journey through the galaxy searching for the perfect cup of tea."
    },

    {
        title: "First Animation",
        type: "Skit",
        video: "MNKxN8yAelo",
        description:
            "When someone tells you to do something you already want to do."
    }

];


/* =========================================================
   SHORTS
========================================================= */

const shorts = [

    {
        title: "First Animation",
        video: "MNKxN8yAelo",
        description: "My first little animation."
    },

    {
        title: "Blur Gameplay",
        video: "fSXlIjwRXwA",
        description: "A little animation experiment."
    }

    // Add more Shorts below

];


/* =========================================================
   UPCOMING PROJECTS
========================================================= */

const upcomingProjects = [

    {
        title: "Project Moon",
        description:
            "A new animation currently being developed.",
        image:
            "assets/projects/project-moon.jpg",
        status:
            "In Production"
    },

    {
        title: "Untitled Animation",
        description:
            "An idea currently escaping from my brain into Blender.",
        image:
            "assets/projects/another-project.jpg",
        status:
            "Concept"
    }

];


/* =========================================================
   BEHIND THE SCENES
========================================================= */

const behindTheScenes = [

    {
        title: "Storyboard",
        project: "Project Moon",
        media:
            "assets/behind-scenes/storyboard.jpg",
        mediaType:
            "image"
    },

    {
        title: "Rough Animation",
        project: "Project Moon",
        media:
            "assets/behind-scenes/rough-animation.mp4",
        mediaType:
            "video"
    },

    {
        title: "Clean Lineart",
        project: "Project Moon",
        media:
            "assets/behind-scenes/lineart.jpg",
        mediaType:
            "image"
    },

    {
        title: "Color & Lighting",
        project: "Project Moon",
        media:
            "assets/behind-scenes/coloring.mp4",
        mediaType:
            "video"
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const animationsGrid =
    document.getElementById("animations-grid");

const shortsGrid =
    document.getElementById("shorts-grid");

const upcomingGrid =
    document.getElementById("upcoming-grid");

const btsGrid =
    document.getElementById("bts-grid");


/* =========================================================
   INTERSECTION OBSERVER
========================================================= */

const observerOptions = {

    threshold: 0.08,

    rootMargin:
        "0px 0px -40px 0px"

};


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        observerOptions
    );


/* =========================================================
   FEATURED ANIMATIONS
========================================================= */

function renderAnimations() {

    if (!animationsGrid) return;

    animationsGrid.innerHTML = "";

    animations.forEach(animation => {

        const card =
            document.createElement("article");

        card.className =
            "animation-card reveal";

        card.innerHTML = `

            <div class="video-container">

                <iframe
                    src="https://www.youtube.com/embed/${animation.video}"
                    title="${animation.title}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>

            </div>

            <div class="card-content">

                <div class="flex justify-between items-start gap-3 mb-3">

                    <h3 class="text-xl font-bold">
                        ${animation.title}
                    </h3>

                    <span class="card-tag">
                        ${animation.type}
                    </span>

                </div>

                <p class="text-sm text-gray-400 leading-relaxed">
                    ${animation.description}
                </p>

            </div>

        `;

        animationsGrid.appendChild(card);

        observer.observe(card);

    });

}


/* =========================================================
   SHORTS
========================================================= */

function renderShorts() {

    if (!shortsGrid) return;

    shortsGrid.innerHTML = "";

    shorts.forEach(short => {

        const card =
            document.createElement("a");

        card.href =
            `https://www.youtube.com/shorts/${short.video}`;

        card.target = "_blank";

        card.rel =
            "noopener noreferrer";

        card.className =
            "short-card reveal";

        card.innerHTML = `

            <div class="short-thumbnail">

                <img
                    src="https://img.youtube.com/vi/${short.video}/maxresdefault.jpg"
                    alt="${short.title}"
                    loading="lazy"
                    onerror="
                        this.onerror=null;
                        this.src='https://img.youtube.com/vi/${short.video}/hqdefault.jpg';
                    "
                >

                <div class="short-overlay">

                    <div class="play-button">

                        <i class="fa-solid fa-play"></i>

                    </div>

                </div>

            </div>

            <div class="card-content">

                <h3 class="font-bold mb-1">
                    ${short.title}
                </h3>

                <p class="text-xs text-gray-400">
                    ${short.description}
                </p>

            </div>

        `;

        shortsGrid.appendChild(card);

        observer.observe(card);

    });

}


/* =========================================================
   UPCOMING PROJECTS
========================================================= */

function renderUpcomingProjects() {

    if (!upcomingGrid) return;

    upcomingGrid.innerHTML = "";

    upcomingProjects.forEach(project => {

        const card =
            document.createElement("article");

        card.className =
            "project-card reveal";

        card.innerHTML = `

            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                    "
                >

                <span class="status-badge">
                    ${project.status}
                </span>

            </div>

            <div class="p-6">

                <h3 class="text-2xl font-bold mb-2">
                    ${project.title}
                </h3>

                <p class="text-gray-400 text-sm leading-relaxed">
                    ${project.description}
                </p>

            </div>

        `;

        upcomingGrid.appendChild(card);

        observer.observe(card);

    });

}


/* =========================================================
   BEHIND THE SCENES
========================================================= */

function renderBehindTheScenes() {

    if (!btsGrid) return;

    btsGrid.innerHTML = "";

    behindTheScenes.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "bts-card reveal";

        let mediaHTML = "";


        /* VIDEO */

        if (item.mediaType === "video") {

            mediaHTML = `

                <video
                    class="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    playsinline
                    preload="metadata"
                >

                    <source
                        src="${item.media}"
                        type="video/mp4"
                    >

                    Your browser does not support video.

                </video>

            `;

        }


        /* IMAGE */

        else {

            mediaHTML = `

                <img
                    src="${item.media}"
                    alt="${item.title}"
                    loading="lazy"
                >

            `;

        }


        card.innerHTML = `

            <div class="bts-media">

                ${mediaHTML}

            </div>

            <div class="p-5">

                <p class="text-xs text-moon-glow uppercase tracking-wider font-bold mb-1">
                    ${item.project}
                </p>

                <h3 class="font-bold text-lg">
                    ${item.title}
                </h3>

            </div>

        `;

        btsGrid.appendChild(card);

        observer.observe(card);

    });

}


/* =========================================================
   INITIALIZE CONTENT
========================================================= */

renderAnimations();

renderShorts();

renderUpcomingProjects();

renderBehindTheScenes();


/* =========================================================
   OBSERVE STATIC REVEAL ELEMENTS
========================================================= */

document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================================================
   STAR BACKGROUND
========================================================= */

const canvas =
    document.getElementById("star-canvas");


if (canvas) {

    const ctx =
        canvas.getContext("2d");

    let stars = [];


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

        initStars();

    }


    class Star {

        constructor() {

            this.x =
                Math.random() *
                canvas.width;

            this.y =
                Math.random() *
                canvas.height;

            this.size =
                Math.random() * 1.8;

            this.opacity =
                Math.random();

            this.speed =
                Math.random() * 0.05 + 0.01;

            this.growing =
                Math.random() > 0.5;

        }


        update() {

            if (this.growing) {

                this.opacity += 0.005;

                if (this.opacity >= 1) {

                    this.growing = false;

                }

            }

            else {

                this.opacity -= 0.005;

                if (this.opacity <= 0.2) {

                    this.growing = true;

                }

            }


            this.y -= this.speed;


            if (this.y < 0) {

                this.y =
                    canvas.height;

                this.x =
                    Math.random() *
                    canvas.width;

            }

        }


        draw() {

            ctx.fillStyle =
                `rgba(255,255,255,${this.opacity})`;

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }

    }


    function initStars() {

        stars = [];

        const area =
            canvas.width *
            canvas.height;

        const starCount =
            Math.floor(area / 6000);


        for (
            let i = 0;
            i < starCount;
            i++
        ) {

            stars.push(
                new Star()
            );

        }

    }


    function animateStars() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        stars.forEach(star => {

            star.update();

            star.draw();

        });


        requestAnimationFrame(
            animateStars
        );

    }


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    resizeCanvas();

    animateStars();

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobile-menu-btn"
    );

const mobileMenu =
    document.getElementById(
        "mobile-menu"
    );


if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "hidden"
            );

        }
    );


    /* Close mobile menu after clicking a link */

    document
        .querySelectorAll(".mobile-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.add(
                        "hidden"
                    );

                }
            );

        });

}


/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar =
    document.getElementById(
        "navbar"
    );


if (navbar) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 40) {

                navbar.classList.add(
                    "scrolled"
                );

            }

            else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

const form =
    document.getElementById(
        "contact-form"
    );

const submitButton =
    document.getElementById(
        "submit-btn"
    );

const formStatus =
    document.getElementById(
        "form-status"
    );


if (
    form &&
    submitButton &&
    formStatus
) {

    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            submitButton.disabled = true;


            const buttonText =
                submitButton.querySelector(
                    "span"
                );


            if (buttonText) {

                buttonText.textContent =
                    "Sending...";

            }


            formStatus.classList.add(
                "hidden"
            );


            const data =
                new FormData(form);


            try {

                const response =
                    await fetch(
                        form.action,
                        {
                            method: "POST",

                            body: data,

                            headers: {
                                Accept:
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    form.reset();


                    formStatus.textContent =
                        "Message sent! I'll get back to you soon. 🌙";


                    formStatus.className =
                        "text-sm text-center text-green-400";

                }

                else {

                    throw new Error(
                        "Form submission failed"
                    );

                }

            }

            catch (error) {

                formStatus.textContent =
                    "Something went wrong. Please try again.";


                formStatus.className =
                    "text-sm text-center text-red-400";

            }

            finally {

                submitButton.disabled = false;


                if (buttonText) {

                    buttonText.textContent =
                        "Send Message";

                }

            }

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById(
        "current-year"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}
