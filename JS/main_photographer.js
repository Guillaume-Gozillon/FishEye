/* eslint-disable no-new */
/* eslint-disable eqeqeq */
import { HeaderPhotographer } from './Class/Profil.js'
import { buildCardDOM } from './Class/sort.js'
import { Lightbox } from './Class/Lightbox.js'

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
  const sortByLike = resultMedia.sort((a, b) => b.likes - a.likes)
  const sortByDate = resultMedia.sort(function (a, b) {
    const c = new Date(a.date)
    const d = new Date(b.date)
    return c - d
  })
  const sortByTitle = resultMedia.sort(function (a, b) {
    if (a.firstname < b.firstname) { return -1 }
    if (a.firstname > b.firstname) { return 1 }
    return 0
  })

  console.log('sans trie', resultMedia)

  // Build profil photographer
  new HeaderPhotographer(resultPhoto[0])

  // Build DOM photographer
  buildCardDOM.cardSorter(resultMedia, sortByLike, sortByDate, sortByTitle)

  new Lightbox(resultMedia[2])
})
