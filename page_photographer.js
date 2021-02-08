/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()

  /**
   * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
   * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
   * @param {filter()} compare si ID = URL
   */

  const toSort = data.media
  const params = new URLSearchParams(window.location.search)
  const result = toSort.filter(word => word.photographerId == (params.get('id')))




  const peopleToSort = data.photographers
  const resultPhotographe = peopleToSort.filter(toTarget => toTarget.id == (params.get('id')))

  console.log('HEYYY4', resultPhotographe);

  sortPhoto.addEventListener('change', function (event) {
    const elt = document.querySelectorAll('select')

    if (event.target.value = 'date') {
      creatCard(result.sort((a, b) => a.likes - b.likes))
    } 




    console.log('CONDITION', event.target.value)
  })

  
createIdentity(resultPhotographe)

function createIdentity(newData) {
  document.getElementById('vignette-photographe').innerHTML = `
${newData.map(function (thingsForIdentity) {
  return `
  <section id="vignette-photographe" class="vignette-photographe">
  <div class="main-content-photographer">
      <div class="firstElement">
          <h1 class="firstName">${thingsForIdentity.name}</h1>
          <h2 class="location-photographer">${thingsForIdentity.city}, ${thingsForIdentity.country}</h2>
          <p class="bio-photographer">${thingsForIdentity.tagline}</p>
          <div class="hastag">
              <div class="photographer-filter">
                  <p>#Event</p>
              </div>
              <div class="photographer-filter">
                  <p>#Travel</p>
              </div>
              <div class="photographer-filter">
                  <p>#Animals</p>
              </div>
          </div>
      </div>
      <button class="btn-contact">Contactez-moi</button>
  </div>
  <img class="image" src="/FishEye/img/${thingsForIdentity.portrait}" alt="">
</section>
  `
})}
  `

}







  creatCard(result)
  console.log('HEY', result)

  // Litéraux de gabarits
  function creatCard (dataForTheCard) {
    document.getElementById('picture-photographer').innerHTML = `
  ${dataForTheCard.map(function (thingsForCards) {
      return `
    <div class="picture-photographer_presentation">
    <img class="img-page" src="/FishEye//img/${thingsForCards.image}" alt="">
    <div class="text-presentation">
        <p>${thingsForCards.tags}</p>
        <div class="price-and-count">
            <p>${thingsForCards.price}€</p>
            <p class="paddeur">${thingsForCards.likes} ❤</p>
        </div>
    </div>
</div>
    `
    })
    .join('')}
  `
  }
}

// DOM éléments
const sortPhoto = document.getElementById('sort-photo')

// Fonction lancées
loadContent()
