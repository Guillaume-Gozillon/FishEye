/* eslint-disable no-new */
class Lightbox {
  static init () {
    //const links = document.getElementById('picture-photographer')
    const links = document.querySelectorAll('img[src$=".png"], img[src$=".jpg"], img[src$=".jpeg"], img[src$=".mp4"]')
    const aze = document.querySelectorAll('option')
    console.log('liens', aze);

    links.addEventListener('click', e => {
       // links.forEach(links => links.addEventListener('click', (e) => {
      // e.preventDefault()
      
      console.log('hey', e.target)
      //new Lightbox(e.currentTarget.getAttribute('src'))
    })
  }

  /**
   * @param {String} URL de l'image
   */

  constructor (data) {

    this.lightElement = this.buildLightbox(data)
    document.body.appendChild(this.lightElement)
    window.setTimeout(() => {
     this.lightElement.parentElement.removeChild(this.lightElement)
    }, 500)
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

  close (e) {
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
        <img src="/img/${data.image}" alt="">
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
