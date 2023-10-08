function typer() {
    var typed = new Typed('.typing', {
        strings: ["Web Designer", "Web Developer", "Coder"],
        typeSpeed: 60,
        loop: true,
        fadeOutClass: 'typed-fade-out',
        backSpeed: 30,
    });
}

typer()


// aside
const nav = document.querySelector(".nav"),
    navList = document.querySelectorAll("li"),
    totalNavList = navList.length;
const allSection = document.querySelectorAll(".section")

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection()
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j)
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this)
        if (window.innerWidth < 1200) {
            asideSectionToggle()
        }
    })
}
function addBackSection(num) {
    allSection[num].classList.add("back-section")
}
function removeBackSection() {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function showSection(elem) {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("active")
    }
    const target = elem.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(elem) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = elem.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const dataSectionIndex = this.getAttribute("data-section-index");
    // console.log(dataSectionIndex);
    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(dataSectionIndex)
})

// nav toggler
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navToggler.addEventListener("click", () => {
    asideSectionToggle()
})
function asideSectionToggle() {
    aside.classList.toggle("open")
    navToggler.classList.toggle("open")
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.toggle("open")
    }
}