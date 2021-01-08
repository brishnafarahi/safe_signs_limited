const img_container = document.querySelector(".logo-container");
const img = document.querySelector(".login-img img")

img_container.addEventListener("mousemove", (e) => {
    let xAxis = ((e.pageX - img_container.getBoundingClientRect().x) - (img_container.getBoundingClientRect().width/2)) / 20;
    let yAxis = ((e.pageY - img_container.getBoundingClientRect().y) - (img_container.getBoundingClientRect().height/2)) / 10;
    img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // console.log(e.pageX, e.pageY)
    // console.log(img_container.innerWidth, window.innerHeight)
    // console.log(`rotateY(${xAxis}deg) rotateX(${yAxis})`)
    // console.log((e.pageX - img_container.getBoundingClientRect().x) - (img_container.getBoundingClientRect().width/2))
    // console.log((e.pageY - img_container.getBoundingClientRect().y) - (img_container.getBoundingClientRect().height/2))

});


img_container.addEventListener("mouseenter", (e) => {
    img.style.transition = "none";
});

img_container.addEventListener("mouseleave", (e) => {
    img.style.transition = "all 1s ease";
    img.style.transform = `rotateY(0deg) rotateX(0deg)`;
});