var modal = document.getElementById('my1');

document.getElementById("bt1").addEventListener("click", myFunction);
document.getElementsByClassName('closet')[0].addEventListener("click", myFunction1);
window.addEventListener("click",myFunction2(event));
// Get the modal

											

 function myFunction() {
        modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function myFunction1 () {
        modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function myFunction2(event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
}
