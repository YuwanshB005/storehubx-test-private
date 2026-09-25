import './style.css'

const openBtn = document.getElementById('open-btn')
const overlay = document.getElementById('overlay')
const cancelBtn = document.getElementById('cancel-btn')
const confirmBtn = document.getElementById('confirm-btn')

function openModal() {
  overlay.hidden = false
  confirmBtn.focus()
}

function closeModal() {
  overlay.hidden = true
  openBtn.focus()
}

openBtn.addEventListener('click', openModal)
cancelBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal()
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !overlay.hidden) closeModal()
})

confirmBtn.addEventListener('click', () => {
  confirmBtn.textContent = 'Deleted'
  confirmBtn.disabled = true
  setTimeout(closeModal, 400)
})
