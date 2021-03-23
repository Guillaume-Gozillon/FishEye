/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class Lightbox {
  static init () {
    document.getElementById('picture-photographer').addEventListener('click', e => {
      if (e.target.classList == 'img-page') {
        // Build Event's array
        const firedEvent = e.currentTarget.querySelectorAll('img, source')
        const fileArr = Array.from(firedEvent)
        const gallery = fileArr.map(x => x.getAttribute('src'))
        console.log(gallery)

        // Build element targeted
        const imgTarget = e.target.getAttribute('src')
        console.log('image Target :', imgTarget)

        new Lightbox(imgTarget, gallery)
      }
    })

    document.getElementById('picture-photographer').addEventListener('click', e => {
      if (e.target.classList == 'video-page') {
        // Build Event's array
        const firedEvent = e.currentTarget.querySelectorAll('img, source')
        const fileArr = Array.from(firedEvent)
        const gallery = fileArr.map(y => y.getAttribute('src'))
        console.log(gallery)

        // Build element targeted
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

    const truc = document.getElementsByClassName('lightbox')[0].getElementsByTagName('img')[0].getAttribute('src')
    console.log('truc', truc)

    this.lightDOM.innerHTML = ''

    const j = this.gallery.findIndex(i => i === truc)
    // console.log(this.gallery.findIndex(i => i === this.data))
    console.log(j)

    this.lightDOM.append(this.buildLightbox(this.gallery[j + 1]))
    console.log('lightdom', this.lightDOM)
  }

   prev (e) {
    e.preventDefault()

    const truc = document.getElementsByClassName('lightbox')[0].getElementsByTagName('img')[0].getAttribute('src')
    console.log('truc', truc)

    this.lightDOM.innerHTML = ''

    const j = this.gallery.findIndex(i => i === truc)
    // console.log(this.gallery.findIndex(i => i === this.data))
    console.log(j)

    this.lightDOM.append(this.buildLightbox(this.gallery[j - 1]))
    console.log('lightdom', this.lightDOM)
   }

  /**
   * @param {String} URL de l'image
   * @return {HTMLElement}
   */

  buildLightbox (img) {
    this.lightDOM = document.createElement('div')
    this.lightDOM.classList.add('lightbox')
    this.lightDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
      <img src="${img}" alt="">
    </div>`
    this.lightDOM.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))

    this.lightDOM.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
    this.lightDOM.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
    return this.lightDOM
  }
}

// Pour trouver l'index : this.images.findIndex(i => i === this.data)

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
