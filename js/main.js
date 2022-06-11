

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




// When the user clicks on the button, open the modal
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);
window.addEventListener('click', windowOnClick);        
                                                                   


function openModal() {
  // modal.classList.toggle("modal-box");
  modal.style.display = 'block'
  // console.log('clicked');
}

function closeModal() {
  modal.style.display = 'none'
}

function windowOnClick(event) {
  if (event.target === modal) {
      closeModal();
  }
}

