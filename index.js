
document.getElementById("open-btn").addEventListener("click", function() {
    //when clicking open button, turn overlay into block element 
    document.getElementById("overlay").style.display = "block";
})

document.getElementById("close-btn").addEventListener("click", function() {
    //when clicking close button, hide the display of the overlay element
    document.getElementById("overlay").style.display = "none";
})