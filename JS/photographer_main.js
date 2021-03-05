/* eslint-disable eqeqeq */
import { display } from './display.js'
import { FactoryMedia } from './FactoryMedia.class.js'
import { HeaderPhotographer } from './baniere.class.js'

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
   * @param {String} resultPhotographe New JSON array for data.photographer
   * @param {String} mediaSorted New JSON array for data.media
   */

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
  display.trieLesCartes(mediaSorted)
})
