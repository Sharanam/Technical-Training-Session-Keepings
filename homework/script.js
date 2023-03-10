function main() {
    // generate carousel-indicator
    let carouselIndicator = document.querySelector(".carousel-indicators");
    let carouselInner = document.querySelector(".carousel-inner");

    for (let i = 0; i < carouselInner.childElementCount; i++) {
        let li = document.createElement("li");
        li.setAttribute("data-target", "#myCarousel");
        li.setAttribute("data-slide-to", i);
        if (i == 0) {
            li.setAttribute("class", "active");
        }
        carouselIndicator.appendChild(li);
    }

}

// window.onload = main;