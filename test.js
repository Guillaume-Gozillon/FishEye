async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  
  creatIndex(data.photographers)
  //creatCard(data.media)
  portraitFilter.addEventListener('click', function () {
    if (data.photographers.tags !== 'portrait') {
      logo.classList.remove('logo')
    }
  })
}

let portraitFilter =  document.getElementById('portrait')
let logo = document.getElementById('logo')

loadImages()

function addFilter (hashtag) {
  return `
  <div class="hastag">
  ${hashtag.map(function (hashtagItems) {
    return `
    <div class="photographer-filter">
      <p>${hashtagItems}</p>
    </div>
    `
  }).join('')}
</div>
  `
}


function creatIndex (dataToGet) {
  document.getElementById('main-index').innerHTML = `
  <h1 class="principal">Nos photographes</h1>
  <div class="container">${dataToGet.map(function (thingsIntoTheData) {
    return ` 
    <div class="photographers">
    <img src="/img/${thingsIntoTheData.portrait}" alt="" />
    <a href="./test-page-photographe.html"class="name">${thingsIntoTheData.name}</a>
    <div class="location">${thingsIntoTheData.city}</div>
    <div class="bio">${thingsIntoTheData.tagline}</div>
    <div class="price">${thingsIntoTheData.price}/jour</div>
    ${addFilter(thingsIntoTheData.tags)}
  </div>
    `
  }).join('')}
  `
}

//creer une classe pour identifier la carte
// au click on ecoute l'ID
// on compare le tag à l'objet.tags
// condition : on parcours la partie "tags" (boucle for) d'un objet média pour verifier si tags = true
// si le tag est true alors la carte-photographe ne bouge pas
// sinon on supprime la carte