async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatIndex(data.photographers)
  creatCard(data.media)
}

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
    <a href="./photographe.html"class="name">${thingsIntoTheData.name}</a>
    <div class="location">${thingsIntoTheData.city}</div>
    <div class="bio">${thingsIntoTheData.tagline}</div>
    <div class="price">${thingsIntoTheData.price}/jour</div>
    ${addFilter(thingsIntoTheData.tags)}
  </div>
    `
  }).join('')}
  `
}

function creatCard () {

}

const portaitsFilter = document.getElementById('portaits')

portaitsFilter.addEventListener('click', function () {
  console.log('hello')
})
