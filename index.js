import data from './data.json' assert { type: 'json' }

const cards = document.getElementById('cards')

data.forEach(data => {
  const box = document.createElement('div')
  box.classList.add('box', `box${data.category}`)

  const iconContainer = document.createElement('div')
  iconContainer.style.display = 'flex'
  iconContainer.style.alignItems = 'center'

  const category = document.createElement('div')
  category.classList.add('category')
  category.innerText = data.category

  const icon = document.createElement('img')
  icon.setAttribute('src', data.icon)
  icon.setAttribute('alt', `${data.category}-icon`)

  iconContainer.appendChild(icon)
  iconContainer.appendChild(category)

  // category.appendChild(icon)
  // category.innerHTML = icon
  // category.innerText = data.category

  const scoreContainer = document.createElement('div')
  scoreContainer.classList.add('scoreContainer')
  scoreContainer.style.display = 'flex'

  const score = document.createElement('div')
  score.classList.add('score')
  score.innerText = `${data.score}`
  score.style.marginRight = '8px'

  const percentage = document.createElement('div')
  percentage.classList.add('percentage')
  percentage.innerText = '/ 100'

  scoreContainer.appendChild(score)
  scoreContainer.appendChild(percentage)

  box.appendChild(iconContainer)
  box.appendChild(scoreContainer)

  cards.appendChild(box)
})
