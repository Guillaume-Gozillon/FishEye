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

    for (let i = 0; i < data.photographers.length; i++) {
      console.log(data.photographers[i].tags)

      if (!data.photographers[i].tags.includes(keyword)) {
        testCardToRemove[i].classList.add('card-filter')
      }
    }
  })
}
// filter() itère comme map() mais retourne uniquement les lignes qui valident la condition

// Litéraux de gabarits
function addFilter (hashtagFilter) {
  return `
  <div class="hastag">
  ${hashtagFilter.map(function (itemsFilter) {
    return `
      <p class="photographer-filter">${itemsFilter}</p>`
    })
    .join('')}
</div>`
}

function creatIndex (x) {
  document.getElementById('main-index').innerHTML = `
  <h1 id="principal" class="principal">Nos photographes</h1>
    <div class="container">${x.map(function (y) {
      return ` 
    <div id="testcardtoremove" class="photographers">
      <img src="./img/${y.portrait}" alt=""/>
        <a href="./main-photographe.html?id=${y.id} "class="name">${y.name}</a>
        <div class="location">${y.city}</div>
        <div class="bio">${y.tagline}</div>
        <div class="price">${y.price}€/jour</div>
    ${addFilter(y.tags)}
    </div>`
    })
    .join('')}`
}

document.addEventListener('scroll', onScrollHeader)

function onScrollHeader () {
  if (window.pageYOffset > 120) {
    document.querySelector('.scroll-header').style.display = 'block'
  } else {
    document.querySelector('.scroll-header').style.display = 'none'
  }
}
