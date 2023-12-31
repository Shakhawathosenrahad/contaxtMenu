const contextmenu = document.querySelector(".contextmenu");

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    Object.assign(contextmenu.style, {
        opacity: 1,
        pointerEvents: "all"
    })
    if (e.clientX / innerWidth * 100 < 50) {
        contextmenu.style.left = (e.clientX + (parseInt(getComputedStyle(contextmenu).width) / 2 - 25)) + "px";
    }
    else {
        contextmenu.style.left = (e.clientX - (parseInt(getComputedStyle(contextmenu).width) / 2 + 10)) + "px";
    }
    if(e.clientY / innerHeight * 100 < 50) {
        contextmenu.style.top = (e.clientY + (parseInt(getComputedStyle(contextmenu).height) / 2 - 20)) + "px";
    }
    else {
        contextmenu.style.top = (e.clientY -+ (parseInt(getComputedStyle(contextmenu).height) / 2 + 10)) + "px";
    }

    let lists = contextmenu.querySelectorAll("h4");

    lists.forEach((list, index) => {
        list.addEventListener("click", function() {
            if(index === 0) {
                history.back();
            }

            else if(index === 1) {
                history.forward();
            }

            else if(index === 2) {
                history.go(0);
            }

            else if(index === 4) {
                location.href = location.origin;
            }

            else if(index === 6) {
                print()
            }
        })
    })

    document.addEventListener("click", e => {
        if(e.target.dataset.id !== "menu") {
            Object.assign(contextmenu.style, {
                opacity: 0,
                pointerEvents: "none"
            })
        }
    })
})






// google mail search bar

const burgerMenu = document.querySelector(".googleSearch .burgerMenu");
const searchInput = document.querySelector(".search input[type='search']")
const googleParent = document.querySelector(".search .google")
const google = googleParent.querySelectorAll(".google span");
let animating = -5;

burgerMenu.addEventListener("click", menuHandler);

function menuHandler() {
    this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active");
};

setTimeout(() => {
    google.forEach(goo => {
        goo.innerHTML = "";
        goo.classList.add("animationStarted")
        goo.style.background = goo.style.color;
        goo.style.transform = "translateY(-10px)";

        Object.assign(goo.style, {
            width: "15px",
            height: "15px"
        })
        
        goo.addEventListener("animationiteration", function(e) {
            if (e.elapsedTime === 1.8) {
                goo.classList.remove("animationStarted");

                Object.assign(goo.style, {
                    width: "0",
                    height: "0"
                })
                if(google[5].style.width === "0px") {   
                    googleParent.innerHTML = `<label for="search" style="color: #f0f2f5; cursor: text;">Search Anything</label>`;
                    googleParent.style.left = "50px";
                    googleParent.style.transform = "translate(0, -50%)";
                    searchInput.removeAttribute("disabled", true)
                }
            }
        })
    })
}, 1000);


searchInput.addEventListener("focus", function() {
    burgerMenu.style.transform = "translateY(-50%) rotate(180deg)";
    burgerMenu.classList.add("arrowTransform");
    burgerMenu.removeEventListener("click", menuHandler);

    searchInput.addEventListener("blur", function() {
        if(!this.value) {
            burgerMenu.style.transform = "translateY(-50%) rotate(0deg)";
            burgerMenu.classList.remove("arrowTransform");
            burgerMenu.addEventListener("click", menuHandler);
        }
    })
})


