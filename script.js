
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove",function (dets) {
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8,
    })
})

image.addEventListener("mouseenter",function (dets) {
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff9c"
    })
})
image.addEventListener("mouseleave",function (dets) {
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
                backgroundColor:"#fff"
    })
})