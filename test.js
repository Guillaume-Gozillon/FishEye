async function loadImages() {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatCard(data.photographers)
}

loadImages()

function creatCard (image) {
  document.getElementById('test-card-photographer').innerHTML = `
  <h3 class="name">${image.map(function(food) {
    return food.city
  }).join(' - ')}</h3>
  `
}

function creatCard (image) {
  document.getElementById('test-card-photographer').innerHTML = `
  <h3 class="name">${image.map(function(thingsIntoTheData) {
    return thingsIntoTheData.city
  }).join(' - ')}</h3>
  `
}