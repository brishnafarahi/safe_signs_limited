const img_container = document.querySelector(".login-img");
const img = document.querySelector(".login-img img")

img_container.addEventListener("mousemove", (e) => {
    let xAxis = (499 - e.pageX) / 15;
    let yAxis = (492.5 - e.pageY) / 15;
    img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // console.log(e.pageX, e.pageY)
    // console.log(img_container.innerWidth, window.innerHeight)
    console.log(`rotateY(${xAxis}deg) rotateX(${yAxis})`)
});


img_container.addEventListener("mouseenter", (e) => {
    img.style.transition = "none";
});

img_container.addEventListener("mouseleave", (e) => {
    img.style.transition = "all 1s ease";
    img.style.transform = `rotateY(0deg) rotateX(0deg)`;
});