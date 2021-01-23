async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatCard(data.photographers)
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

function creatCard (image) {
  document.getElementById('main-index').innerHTML = `
  <h1 class="principal">Nos photographes</h1>
  <div class="container">${image.map(function (thingsIntoTheData) {
    return ` 
    <div class="photographers">
    <img src="/ID_pict/${thingsIntoTheData.portrait}" alt="" />
    <div class="name">${thingsIntoTheData.name}</div>
    <div class="location">${thingsIntoTheData.city}</div>
    <div class="bio">${thingsIntoTheData.tagline}</div>
    <div class="price">${thingsIntoTheData.price}/jour</div>
    ${addFilter(thingsIntoTheData.tags)}
  </div>
    `
  }).join('')}
  `
}
