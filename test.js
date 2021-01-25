async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  // creatIndex(data.photographers)
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

function counter () {
  
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
  }).join()}
  `
}

function creatCard (dataForTheCard) {
  document.getElementById('picture-photographer').innerHTML = `
  ${dataForTheCard.map(function (thingsForCards) {
    return `
    <div class="picture-photographer_presentation">
    <img class="img-page" src="/img/${thingsForCards.image}" alt="">
    <div class="text-presentation">
        <p>${thingsForCards.tags}</p>
        <div class="price-and-count">
            <p>70€</p>
            <p class="paddeur">${thingsForCards.likes} ❤</p>
        </div>
    </div>
</div>
    `
  }).join('')}
  `
}
