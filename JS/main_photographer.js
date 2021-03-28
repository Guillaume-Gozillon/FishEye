/* eslint-disable no-new */
/* eslint-disable eqeqeq */
import { HeaderPhotographer } from './Class/Profil.js'
import { BuildCardDOM } from './Class/sort.js'
import { Lightbox } from './Class/Lightbox.js'
import { Modal } from './components/modal.js'
import { Likes } from './components/likes.js'

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
 * @param {String[]} resultPhoto New array for data.photographer
 * @param {String[]} resultMedia New array for data.media
 */

  const photo = data.photographers
  const resultPhoto = photo
    .filter(photoArr => photoArr.id == (urlParams.get('id')))

  const media = data.media
  const resultMedia = media
    .filter(mediaArr => mediaArr.photographerId == (urlParams.get('id')))

  /**
   * Const used to sort element's array
   * @param {String[]} sortByLike New array to sort by like
   * @param {String[]} sortByDate New array to sort by date
   * @param {String[]} sortByTitle New array to sort by title
   */

  const sortByLike = (media
    .filter(mediaArr => mediaArr.photographerId == (urlParams.get('id'))))
    .sort((a, b) => b.likes - a.likes)

  const sortByDate = (media
    .filter(mediaArr => mediaArr.photographerId == (urlParams.get('id'))))
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })

  const sortByTitle = (media
    .filter(mediaArr => mediaArr.photographerId == (urlParams.get('id'))))
    .sort(function (a, b) {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })

  // Build DOM for profil photographer
  new HeaderPhotographer(resultPhoto[0])
  Modal.init(resultPhoto)
  new Likes(resultPhoto, resultMedia)

  // Build DOM for photographer image/video
  new BuildCardDOM(resultMedia, sortByLike, sortByDate, sortByTitle)
})

Lightbox.init()
