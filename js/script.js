const hamburger = document.querySelector('#hamburger')
const modal = document.querySelector('#modal')
const clouse = document.querySelector('#clouse')

hamburger.addEventListener('click', (e) => {
  let path = e.currentTarget.querySelector('.nav-modal')
  modal.style.display = 'block'
})

clouse.addEventListener('click', (e) => {
  let path = e.currentTarget.querySelector('.clouse')
  modal.style.display = 'none'
})
