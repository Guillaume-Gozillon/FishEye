/* eslint-disable no-undef */
const portraitFilter = document.getElementById('portaits')
const artFilter = document.getElementById('art')
const fashionFilter = document.getElementById('fashion')
const architectureFilter = document.getElementById('architecture')
const travelFilter = document.getElementById('travel')
const sportFilter = document.getElementById('sport')
const animalsFilter = document.getElementById('animals')
const eventstFilter = document.getElementById('events')
const testCardToRemove = document.getElementsByClassName('photographers')
const insertTest = document.getElementById('principal')
insertTest.insertAdjacentHTML('afterend', creatIndex)

async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatIndex(data.photographers)

  callbackEvent(portraitFilter, 'portrait')
  callbackEvent(artFilter, 'art')
  callbackEvent(fashionFilter, 'fashion')
  callbackEvent(architectureFilter, 'architecture')
  callbackEvent(travelFilter, 'travel')
  callbackEvent(sportFilter, 'sport')
  callbackEvent(animalsFilter, 'animals')
  callbackEvent(eventstFilter, 'events')

  function callbackEvent (filterArgument, keyword) {
    filterArgument.addEventListener('click', function () {
      creatIndex(data.photographers)

      for (i = 0; i < data.photographers.length; i++) {
        console.log(data.photographers[i].tags)
        if (!data.photographers[i].tags.includes(keyword)) {
          testCardToRemove[i].classList.add('tosort')
        }
      }
    })
  }
}

loadContent()

function addFilter (hashtagFilter) {
  return `
  <div class="hastag">
  ${hashtagFilter.map(function (itemsFilter) {
    return `
    <div class="photographer-filter">
      <p>${itemsFilter}</p>
    </div>
    `
 }).join('')}
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
