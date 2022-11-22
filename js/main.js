const openButton = document.querySelector('#open'),
      closeButton = document.querySelector('#close'),
      modal = document.querySelector('#modal'),
      modalInner = document.querySelector('.modal-feedback__inner')

openButton.addEventListener('click', () => {
  modal.classList.remove('d-none')
  modal.classList.add('d-flex')
})

closeButton.addEventListener('click', () => {
  modal.classList.remove('d-flex')
  modal.classList.add('d-none')
})

modal.addEventListener('click', (e) => {
  let target = e.target
  if (target.contains(modalInner)){
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
  }
})