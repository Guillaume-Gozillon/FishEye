/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class Lightbox {
  static init () {
    document.getElementById('picture-photographer').addEventListener('click', e => {
      if (e.target.classList == 'img-page') {
        const firedEvent = e.currentTarget.querySelectorAll('img, source')
        const fileArr = Array.from(firedEvent)

        const images = fileArr.map(x => x.getAttribute('src'))
        const imgTarget = e.target.getAttribute('src')

        console.log('Tableau target :', fileArr)
        console.log('Current :', imgTarget)
        console.log('images', images[2])
        // Pour trouver l'index : this.images.findIndex(i => i === this.data)

        new Lightbox(imgTarget, images)
      }
    })
  }

  constructor (data, images) {
    this.lightElement = this.buildLightbox(data)
    document.body.appendChild(this.lightElement)

    this.data = data
    this.images = images

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
    this.lightElement = ''
    // eslint-disable-next-line prefer-const
    let j = this.images.findIndex(i => i === this.data)
    console.log(j)
    console.log('TEST', this.buildLightbox(this.images[j + 1]))
    // this.lightElement.innerHTML = this.buildLightbox(this.images[index + 1])
    // this.lightElement = ''
    this.buildLightbox(this.images[j + 1])
  }

  prev (e) {
    e.preventDefault()
  }

  /**
   * @param {String} URL de l'image
   * @return {HTMLElement}
   */

  buildLightbox (img) {
    const lightDOM = document.createElement('div')
    lightDOM.classList.add('lightbox')
    lightDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
      <img src="${img}" alt="">
    </div>`
    lightDOM.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
    lightDOM.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
    lightDOM.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
    return lightDOM
  }
}

/*
  buildVideoLightbox () {
    const lightDOM = document.createElement('div')
    lightDOM.classList.add('lightbox')
    lightDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
      <video alt="" preload loop autoplay>
        <source src=/img/Art_Wooden_Horse_Sculpture.mp4" type="video/mp4">
      </video>
    </div>`
    // lightDOM.querySelector('lightbox__close').addEventListener('click', this.close.bind(this))
    return lightDOM
  }

    <div class="lightbox">
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précedent</button>
        <div class="lightbox__container">
            <img src="/img/Art_Triangle_Man.jpg" alt="">
        </div>
    </div>
*/
