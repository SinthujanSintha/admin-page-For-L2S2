


function pop1 (){
// Get the modal
var modal = document.getElementById('my1');
											
// Get the button that opens the modal
var btn = document.getElementById('bt1');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('closet')[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
        modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
}
}