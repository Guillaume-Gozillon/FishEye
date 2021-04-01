/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class Lightbox {
  static init () {
  /**
    * To avoid Event Delegation => e.target
    * @param {EventTarget | currentTarget} e
    * @returns {string[]}
    */

    // init() : when image is clicked, it give us the [index]
    document.getElementById('picture-photographer')
      .addEventListener('click', e => {
        if (e.target.classList == 'img-page') {
        // Build array to loop through
          const gallery = Array
            .from(e.currentTarget.querySelectorAll('img, source'))
            .map(x => x.getAttribute('src'))

          // Select element targeted
          const imgTarget = e.target.getAttribute('src')

          new Lightbox(imgTarget, gallery)
        }
      })
    // Same features for video
    document.getElementById('picture-photographer')
      .addEventListener('click', e => {
        if (e.target.classList == 'video-page') {
          const gallery = Array
            .from(e.currentTarget.querySelectorAll('img, source'))
            .map(x => x.getAttribute('src'))

          const vidTarget = e.currentTarget
            .querySelector('source')
            .getAttribute('src')

          new Lightbox(vidTarget, gallery)
        }
      })
  }

  constructor (data, gallery) {
    this.lightElement = this.buildLightbox(data)
    document.body.appendChild(this.lightElement)

    this.data = data
    this.gallery = gallery

    this.onKeyUp = this.onKeyUp.bind(this)
    document.addEventListener('keyup', this.onKeyUp)
  }

  /**
    * Close the lightbox
    * @param {KeyboardEvent} e
    */

  onKeyUp (e) {
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    }
  }

  /**
    * Close the lightbox
    * @param {MouseEvent | KeyboardEvent} e
    */

  close (e) {
    e.preventDefault()
    this.lightElement.classList.add('fadeOut')

    window.setTimeout(() => {
      this.lightElement.remove(this.lightElement)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  /**
    * Next image in the lightbox
    * @param {MouseEvent | KeyboardEvent} e
    */

  next (e) {
    e.preventDefault()

    const iterate = document
      .getElementsByClassName('lightbox__container')[0]
      .firstElementChild.getAttribute('src')

    this.lightboxDOM.innerHTML = ''

    let j = this.gallery.findIndex(i => i === iterate)
    if (j === this.gallery.length - 1) { j = -1 }
    this.lightboxDOM.append(this.buildLightbox(this.gallery[j + 1]))
  }

  /**
    * Previous image in the lightbox
    * @param {MouseEvent | KeyboardEvent} e
    */

  prev (e) {
    e.preventDefault()

    const iterate = document
      .getElementsByClassName('lightbox__container')[0]
      .firstElementChild.getAttribute('src')

    this.lightboxDOM.innerHTML = ''

    let j = this.gallery.findIndex(i => i === iterate)
    if (j === 0) { j = this.gallery.length }
    this.lightboxDOM.append(this.buildLightbox(this.gallery[j - 1]))
  }

  /**
   * Build the lightbox
   * @param {String} SRC image/video
   * @return {HTMLElement} Build DOM for the lightbox
   */

  buildLightbox (img) {
    this.lightboxDOM = document.createElement('div')
    this.lightboxDOM.classList.add('lightbox')
    this.lightboxDOM.insertAdjacentHTML('afterbegin', `
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précedent</button>
      ${img.includes('jpg') ? this.imgLightbox(img) : this.videoLightbox(img)}`)

    this.lightboxDOM.querySelector('.lightbox__close')
      .addEventListener('click', this.close.bind(this))

    this.lightboxDOM.querySelector('.lightbox__next')
      .addEventListener('click', this.next.bind(this))

    this.lightboxDOM.querySelector('.lightbox__prev')
      .addEventListener('click', this.prev.bind(this))
    return this.lightboxDOM
  }

  imgLightbox (data) {
    return `
    <div class="lightbox__container">
      <img src="${data}" alt="">
    </div>`
  }

  videoLightbox (data) {
    return `
    <div class="lightbox__container">
      <video src="${data}" type="video/mp4" alt="" preload loop autoplay></video>
    </div>`
  }
}
