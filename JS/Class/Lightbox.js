/* eslint-disable eqeqeq */
/* eslint-disable no-new */
class Lightbox {
  static init () {
    document.getElementById('picture-photographer').addEventListener('click', e => {
      if (e.target.classList == 'img-page') {
        console.log('Target :', e.target)
        console.log('SRC :', e.target.src)
        console.log('Current :', e.currentTarget.querySelectorAll('img'))
        e.preventDefault()
        new Lightbox(e.target.src)
      }
    })
  }

  /**
   * @param {String} URL de l'image
   */

  constructor (data) {
    // this.lightElement = this.buildLightbox(data)
    // document.body.appendChild(this.lightElement)
    //  window.setTimeout(() => {
    //    this.lightElement.parentElement.removeChild(this.lightElement)
    //  }, 500)
    console.log('test')
  }

  openLightbox (media) {
    const imageLight = new Image()
    imageLight.src = media.image
    const container = this.lightElement.querySelector('lightbox__container')
    container.appendChild(imageLight)
  }

  /**
    * Close the lightbox
    * @param {MouseEvent} e
    */

  close () {
    this.lightElement.classList.add('fadeOut')
  }

  /**
   * @param {String} URL de l'image
   * @return {HTMLElement}
   */
  buildLightbox (data) {
    const lightDOM = document.createElement('div')
    lightDOM.classList.add('lightbox')
    lightDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
        <img src="/img/Travel_Lonesome.jpg" alt="">
    </div>`
    // lightDOM.querySelector('lightbox__close').addEventListener('click', this.close.bind(this))
    return lightDOM
  }
}

Lightbox.init()

/*
    <div class="lightbox">
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précedent</button>
        <div class="lightbox__container">
            <img src="/img/Art_Triangle_Man.jpg" alt="">
        </div>
    </div>
    */
