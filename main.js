const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.loginButton')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

// function fired off when an event/click is fired off
// check the target of the event
function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}
