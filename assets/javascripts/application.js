document.addEventListener('DOMContentLoaded', () => {
  title = document.querySelector('h1')
  title.addEventListener('click', (element) => {
    element.target.style.color = 'red'
    element.target.innerHTML = 'Красный цвет'
  })
})
