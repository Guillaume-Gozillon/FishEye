/* eslint-disable no-new */
/* eslint-disable eqeqeq */
import { HeaderPhotographer } from './Class/Profil.js'
import { buildCardDOM } from './Class/sort.js'

async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  return data
}

/**
 * Sort if ID = URL
 * @param {URL_API} window.location.search fetch => ?id={number}
 */

const requestId = window.location.search
const urlParams = new URLSearchParams(requestId)

loadContent().then((data) => {
/**
 * New Array sorted with ID
 * @param {String} resultPhoto New Arr for data.photographer
 * @param {String} resultMedia New Arr for data.media
 */

  const photo = data.photographers
  const resultPhoto = photo.filter(photoArr => photoArr.id == (urlParams.get('id')))

  const media = data.media
  const resultMedia = media.filter(mediaArr => mediaArr.photographerId == (urlParams.get('id')))

  // Const used to sort element's array

  const sortByLike = (media.filter(mediaArr => mediaArr.photographerId == (urlParams.get('id')))).sort((a, b) => b.likes - a.likes)

  const sortByDate = (media.filter(mediaArr => mediaArr.photographerId == (urlParams.get('id')))).sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })

  const sortByTitle = (media.filter(mediaArr => mediaArr.photographerId == (urlParams.get('id')))).sort(function (a, b) {
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return 0
  })

  // Build profil photographer
  new HeaderPhotographer(resultPhoto[0])

  // Build DOM photographer
  buildCardDOM.cardSorter(resultMedia, sortByLike, sortByDate, sortByTitle)
})
