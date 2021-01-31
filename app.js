/* eslint-disable no-undef */
async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()

  // Callback
  creatIndex(data.photographers)
  callbackEvent(portraitFilter, 'portrait')
  callbackEvent(artFilter, 'art')
  callbackEvent(fashionFilter, 'fashion')
  callbackEvent(architectureFilter, 'architecture')
  callbackEvent(travelFilter, 'travel')
  callbackEvent(sportFilter, 'sport')
  callbackEvent(animalsFilter, 'animals')
  callbackEvent(eventstFilter, 'events')

  /**
  * @param {condition} If keyword != data.photographers.tags
  * @param {condition} Else add display: none
  */

  function callbackEvent (filterArgument, keyword) {
    filterArgument.addEventListener('click', function () {
      creatIndex(data.photographers)

      for (i = 0; i < data.photographers.length; i++) {
        console.log(data.photographers[i].tags)

        if (!data.photographers[i].tags.includes(keyword)) {
          testCardToRemove[i].classList.add('filter')
        }
      }
    })
  }
}

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
const principal = document.getElementById('principal')

// Fonction lancées
loadContent()
principal.insertAdjacentHTML('afterend', creatIndex)

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

