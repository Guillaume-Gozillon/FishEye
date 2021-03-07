/* eslint-disable eqeqeq */
import { display } from './Class/display.js'
// import { FactoryMedia } from './Class/FactoryMedia.class.js'
import { HeaderPhotographer } from './Class/baniere.class.js'

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
   * @param {String} resultPhoto New JSON array for data.photographer
   * @param {String} mediaSorted New JSON array for data.media
   */

  const photo = data.photographers
  const resultPhoto = photo.filter(PhotoArr => PhotoArr.id == (urlParams.get('id')))

  const media = data.media
  const resultMedia = media.filter(mediaArr => mediaArr.photographerId == (urlParams.get('id')))

  // VIGNETTE SUPERIEUR ------->

  const buildHTML = new HeaderPhotographer(resultPhoto[0])
  buildHTML.createCard()

  // ITERATION IMAGES + VIDEOS ------->

  const domApp = (data) => {
    console.log(typeof display.trieLesCartes.bind(display))
    if (display.trieLesCartes(data) === undefined) {
      display.initDOM(data)
    } else {
      display.trieLesCartes(data)
    }
  }

  domApp(resultMedia)
})
