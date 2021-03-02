/* eslint-disable eqeqeq */
import { FactoryMedia } from './FactoryMedia.class.js'
import { HeaderPhotographer } from './baniere.class.js'

async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  return data
}

loadContent().then((data) => {
  /**
   * Recherche l'ID associé à la page
   * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
   * @param {URLSearchParams.get()}  params.get('id') => isole l'ID de l'URL
   * @param {filter()} compare si ID = URL
   */

  const requestId = window.location.search
  const urlParams = new URLSearchParams(requestId)

  // Créé un nouveau tableau filtrant le JSON si data.photographer OU data.media en fonction de l'ID
  const photographerSorted = data.photographers
  const resultPhotographe = photographerSorted.filter(newPhotographerArray => newPhotographerArray.id == (urlParams.get('id')))

  const toSort = data.media
  const mediaSorted = toSort.filter(newMediaArray => newMediaArray.photographerId == (urlParams.get('id')))

  // VIGNETTE SUPERIEUR ------->

  const x = resultPhotographe[0]
  const buildHTML = new HeaderPhotographer(x.name, x.id, x.city, x.country, x.tags, x.tagline, x.price, x.portrait)
  buildHTML.createCard()

  // ITERATION IMAGES + VIDEOS ------->
  const domElement = new FactoryMedia(mediaSorted)
  domElement.build()

  const sortPhoto = document.getElementById('sort-photo')
  sortPhoto.addEventListener('change', () => {
    if (sortPhoto.value == 'trend') {
      console.log('TEST :', mediaSorted)
      mediaSorted.sort((a, b) => b.likes - a.likes)
      domElement.mediaSorted = mediaSorted
      // Fix error
      domElement.build()
    }
  })
})
