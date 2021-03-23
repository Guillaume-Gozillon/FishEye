/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class Lightbox {
  static init () {
    // When image is clicked, it show the lightbox
    document.getElementById('picture-photographer')
      .addEventListener('click', e => {
        if (e.target.classList == 'img-page') {
        // Build Event's array
          const gallery = Array
            .from(e.currentTarget.querySelectorAll('img, source'))
            .map(x => x.getAttribute('src'))

          // Build element targeted
          const imgTarget = e.target.getAttribute('src')
          console.log('image Target :', imgTarget)

          new Lightbox(imgTarget, gallery)
        }
      })
    // Same for video
    document.getElementById('picture-photographer')
      .addEventListener('click', e => {
        if (e.target.classList == 'video-page') {
          const gallery = Array
            .from(e.currentTarget.querySelectorAll('img, source'))
            .map(x => x.getAttribute('src'))

          const vidTarget = e.target
          console.log('video Target :', vidTarget)

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
    * @param {MouseEvent} e
    */

  close (e) {
    e.preventDefault()
    this.lightElement.classList.add('fadeOut')

    window.setTimeout(() => {
      this.lightElement.remove(this.lightElement)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  next (e) {
    e.preventDefault()

    const iterate = document
      .getElementsByClassName('lightbox')[0]
      .getElementsByTagName('img')[0]
      .getAttribute('src')

    this.lightboxDOM.innerHTML = ''

    let j = this.gallery.findIndex(i => i === iterate)
    if (j === this.gallery.length - 1) { j = -1 }
    this.lightboxDOM.append(this.buildLightbox(this.gallery[j + 1]))
  }

  prev (e) {
    e.preventDefault()

    const iterate = document
      .getElementsByClassName('lightbox')[0]
      .getElementsByTagName('img')[0]
      .getAttribute('src')

    this.lightboxDOM.innerHTML = ''

    let j = this.gallery.findIndex(i => i === iterate)
    if (j === 0) { j = this.gallery.length }
    this.lightboxDOM.append(this.buildLightbox(this.gallery[j - 1]))
  }

  /**
   * @param {String} URL de l'image
   * @return {HTMLElement}
   */

  buildLightbox (img) {
    this.lightboxDOM = document.createElement('div')
    this.lightboxDOM.classList.add('lightbox')
    this.lightboxDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
      <img src="${img}" alt="">
    </div>`
    this.lightboxDOM.querySelector('.lightbox__close')
      .addEventListener('click', this.close.bind(this))
    this.lightboxDOM.querySelector('.lightbox__next')
      .addEventListener('click', this.next.bind(this))
    this.lightboxDOM.querySelector('.lightbox__prev')
      .addEventListener('click', this.prev.bind(this))
    return this.lightboxDOM
  }
}

/*
  buildLightbox (img) {
    this.lightboxDOM = document.createElement('div')
    this.lightboxDOM.classList.add('lightbox')
    this.lightboxDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
      <img src="${img}" alt="">
    </div>`
    this.lightboxDOM.querySelector('.lightbox__close')
      .addEventListener('click', this.close.bind(this))
    this.lightboxDOM.querySelector('.lightbox__next')
      .addEventListener('click', this.next.bind(this))
    this.lightboxDOM.querySelector('.lightbox__prev')
      .addEventListener('click', this.prev.bind(this))
    return this.lightboxDOM
  }
  /*

/*
<video alt="" preload loop autoplay>
  <source src=/img/Art_Wooden_Horse_Sculpture.mp4" type="video/mp4">
</video>
*/
