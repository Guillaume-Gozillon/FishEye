async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatIndex(data.photographers)


  const portraitFilter = document.getElementById('portaits')
  const artFilter = document.getElementById('art')
  const fashionFilter = document.getElementById('fashion')
  const architectureFilter = document.getElementById('architecture')
  const travelFilter = document.getElementById('travel')
  const sportFilter = document.getElementById('sport')
  const animalsFilter = document.getElementById('animals')
  const eventstFilter = document.getElementById('events')

  const testCardToRemove = document.getElementsByClassName('photographers')



  eventstFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('events')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })

  animalsFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('animals')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })


  sportFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('sport')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })


  travelFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('travel')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })

  architectureFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('architecture')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })

  fashionFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('fashion')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })

  portraitFilter.addEventListener('click', function (){

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('portrait')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })

  artFilter.addEventListener('click', function () {

    creatIndex(data.photographers)

    for (i = 0; i < data.photographers.length; i++) {

      console.log(data.photographers[i].tags)
      if (!data.photographers[i].tags.includes('art')) {
        testCardToRemove[i].classList.add('tosort')
      }
    }
  })

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

const insertTest = document.getElementById('principal');
insertTest.insertAdjacentHTML('afterend', creatIndex)
