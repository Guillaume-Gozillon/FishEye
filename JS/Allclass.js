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
  const id = urlParams.get('id')
  console.log('Id :', id)

  // Créé un nouveau tableau filtrant le JSON si data.photographer OU data.media en fonction de l'ID
  const photographerSorted = data.photographers
  const resultPhotographe = photographerSorted.filter(newPhotographerArray => newPhotographerArray.id == (urlParams.get('id')))

  const toSort = data.media
  const mediaSorted = toSort.filter(newMediaArray => newMediaArray.photographerId == (urlParams.get('id')))
  console.log('Tableau des photos filtrées :', mediaSorted)

  // VIGNETTE SUPERIEUR ------->

  const x = resultPhotographe[0]

  const buildHTML = new HeaderPhotographer(x.name, x.id, x.city, x.country, x.tags, x.tagline, x.price, x.portrait)
  buildHTML.createCard()

  // ITERATION IMAGES + VIDEOS ------->

  const tryTheNewOne = new FactoryMedia(mediaSorted)
  tryTheNewOne
})

/*
const images = dataSortedById.mediaSorted.map(imageRaw => return new ImageMedia(imageRaw.name, imageRaw.id, imageRaw.photographerId, imageRaw.image, imageRaw .tags, imageRaw.likes, imageRaw.date, imageRaw.price))
*/

/*
sortPhoto.addEventListener('change', () => {
  if (sortPhoto.value == 'trend') { // POPULARITE
    return creatCard(sortedData.sort((a, b) => b.likes - a.likes))
  } else if (sortPhoto.value == 'date') { // DATE
    creatCard(sortedData.sort(function (a, b) {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateA - dateB
    }))
  } else if (sortPhoto.value == 'title') { // TITRE
    creatCard(sortedData.sort(function (a, b) {
      const titleA = a.name.toLowerCase()
      const titleB = b.name.toLowerCase()
      if (titleA < titleB) return -1
      if (titleA > titleB) return 1
      return dateA - dateB
    }))
  }
})
*/
