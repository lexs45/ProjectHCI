const images = document.querySelectorAll(".slide2"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");


let current = 0;



function changeImage() {
    images.forEach(img => {
        img.classList.remove("show");
        img.style.display = "none";
    });

    images[current].classList.add("show");
    images[current].style.display = "block";
}
// calling first time
changeImage();


//  slider next proses
next.addEventListener("click", function(){
    current++;

    if(current > images.length -1){
        current = 0;
    }else if(current < 0){
        current = images.length - 1;
    }
    changeImage();
});

prev.addEventListener("click", function(){
    current--;

    if(current > images.length -1){
        current = 0;
    }else if(current < 0){
        current = images.length - 1;
    }
    changeImage();
})

// auto change in 5b seconds
// setInterval(()=>{
//     next.click();
// },8000);