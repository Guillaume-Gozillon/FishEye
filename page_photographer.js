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
  const result = toSort.filter(newArray => newArray.photographerId == (params.get('id')))

  const peopleToSort = data.photographers
  const resultPhotographe = peopleToSort.filter(toTarget => toTarget.id == (params.get('id')))
  const sortPhoto = document.getElementById('sort-photo')

  sortPhoto.addEventListener('change', () => {
    if (sortPhoto.value == 'trend') { // POPULARITE
      return creatCard(result.sort((a, b) => b.likes - a.likes))
    } else if (sortPhoto.value == 'date') { // DATE
      creatCard(result.sort(function (a, b) {
        console.log('RESULTA :', result)
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA - dateB
      }))
    } else if (sortPhoto.value == 'title') { // TITRE
      creatCard(result.sort(function (a, b) {
        console.log('RESULTA :', result)
        const titleA = a.name.toLowerCase()
        const titleB = b.name.toLowerCase()
        if (titleA < titleB) return -1
        if (titleA > titleB) return 1
        return dateA - dateB
      }))
    }
  })

  creatCard(result)
  createIdentity(resultPhotographe)

  function createIdentity (newData) {
    document.getElementById('vignette-photographe').innerHTML = `
  ${newData.map(function (thingsForIdentity) {
  return `
  <section id="vignette-photographe" class="vignette-photographe">
  <div class="main-content-photographer">
      <div class="firstElement">
          <h1 class="firstName">${thingsForIdentity.name}</h1>
          <h2 class="location-photographer">${thingsForIdentity.city}, ${thingsForIdentity.country}</h2>
          <p class="bio-photographer">${thingsForIdentity.tagline}</p>
          ${addPhotographeFilter(thingsForIdentity.tags)}
      </div>
      <button class="btn-contact">Contactez-moi</button>
  </div>
  <img class="image" src="/img/${thingsForIdentity.portrait}" alt="">
</section>
  `
})}
  `
  }
  // Template des hastag
  function addPhotographeFilter (hashtagPhotographeFilter) {
    return `
    <div class="hastag">
    ${hashtagPhotographeFilter.map(function (itemsPhotographeFilter) {
        return `
      <div class="photographer-filter">
        <p>${itemsPhotographeFilter}</p>
      </div>
      `
      })
      .join('')}
  </div>
    `
  }

  creatCard(result)
  console.log('HEY', result)

  function imageForPhotographe (toTry) {
    return `
  <img class="img-page" src="/img/${toTry}" alt="">
  `
  }

  function videoForPhotographe (anotherTry) {
    return `
    <video class="img-page" alt="" preload loop autoplay>  
      <source src="/img/${anotherTry}" type="video/mp4">
    </video>
  `
  }

  // Litéraux de gabarits
  function creatCard (dataForTheCard) {
    document.getElementById('picture-photographer').innerHTML = `
  ${dataForTheCard.map(function (thingsForCards) {
      return `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
        ${thingsForCards.image ? imageForPhotographe(thingsForCards.image) : ''}
        ${thingsForCards.video ? videoForPhotographe(thingsForCards.video) : ''}
      </div>
      <div class="text-presentation">
        <p>${thingsForCards.name}</p>
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

loadContent()
