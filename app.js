/* eslint-disable no-undef */
async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()

  // Callback
  creatIndex(data.photographers)
  callbackEvent(portraitFilter, 'portrait', data)
  callbackEvent(artFilter, 'art', data)
  callbackEvent(fashionFilter, 'fashion', data)
  callbackEvent(architectureFilter, 'architecture', data)
  callbackEvent(travelFilter, 'travel', data)
  callbackEvent(sportFilter, 'sport', data)
  callbackEvent(animalsFilter, 'animals', data)
  callbackEvent(eventstFilter, 'events', data)
}

// Fonctions

loadContent()

function callbackEvent (filterArgument, keyword, data) {
  filterArgument.addEventListener('click', function () {
    creatIndex(data.photographers)
    /**
     * @param {condition} compare ('keyword') != data.photographers.tags
     * @param {if statement} add display: none
     */
    for (i = 0; i < data.photographers.length; i++) {
      console.log(data.photographers[i].tags)

      if (!data.photographers[i].tags.includes(keyword)) {
        testCardToRemove[i].classList.add('card-filter')
      }
    }
  })
}

// Litéraux de gabarits
function addFilter (hashtagFilter) {
  return `
  <div class="hastag">
  ${hashtagFilter
    .map(function (itemsFilter) {
      return `
    <div class="photographer-filter">
      <p>${itemsFilter}</p>
    </div>
    `
    })
    .join('')}
</div>
  `
}

function creatIndex (dataToGet) {
  document.getElementById('main-index').innerHTML = `
  <h1 id="principal" class="principal">Nos photographes</h1>
  <div class="container">${dataToGet.map(function (thingsIntoTheData) {
      return ` 
    <div id="testcardtoremove"  class="photographers">
    <img src="/img/${thingsIntoTheData.portrait}" alt="" />
    <a href="./test-page-photographe.html?id=${thingsIntoTheData.id} "class="name">${
      thingsIntoTheData.name
    }</a>
    <div class="location">${thingsIntoTheData.city}</div>
    <div class="bio">${thingsIntoTheData.tagline}</div>
    <div class="price">${thingsIntoTheData.price}€/jour</div>
    ${addFilter(thingsIntoTheData.tags)}
  </div>
    `
    })
    .join('')}
  `
}
// NE PAS OUBLIER DE REMPLACER LE INNER HTML (voir test.js)

// DOM éléments
const portraitFilter = document.getElementById('portaits')
const artFilter = document.getElementById('art')
const fashionFilter = document.getElementById('fashion')
const architectureFilter = document.getElementById('architecture')
const travelFilter = document.getElementById('travel')
const sportFilter = document.getElementById('sport')
const animalsFilter = document.getElementById('animals')
const eventstFilter = document.getElementById('events')
const testCardToRemove = document.getElementsByClassName('photographers')
// const principal = document.getElementById('principal')

