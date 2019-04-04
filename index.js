imageNum = 0
function imageSlideshow(){
    imageUrls = ["keyboard.jpg", "gaming.jpg", "arcade.jpg" ]
    imageNum = imageNum % 3
    document.querySelector("header").style.backgroundImage = "url("+ imageUrls[imageNum] + ")"
    imageNum += 1
    setTimeout(imageSlideshow, 5000);
}
imageSlideshow();