/* eslint-disable eqeqeq */
import { display } from './Class/display.js'
import { HeaderPhotographer } from './Class/profil.class.js'

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

  // Build profil picture
  new HeaderPhotographer(resultPhoto[0]).createCard()

  // Build photo or video card
  display.initDOM(resultMedia)
  display.cardSorter(resultMedia)

  const domApp = (data) => {
    // fetch

    if (display.cardSorter(data)) {
      display.cardSorter(data)
    } else {
      display.buildDOM(data)
    }
  }

  domApp(resultMedia)
})
