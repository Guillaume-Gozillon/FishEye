export class Lightbox {
  static init () {
    const links = document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]')
      .forEach(links => links.addEventListener('click', e => {
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href'))
      }))
  }

  /**
   * @param {String} URL de l'image
   */

  constructor (url) {
    const lightElement = this.buildLightbox(url)
    document.body.appendChild(lightElement)
  }

  /**
   * @param {String} URL de l'image
   * @return {HTMLElement}
   */
  buildLightbox (url) {
    const lightDOM = document.createElement('div')
    lightDOM.classList.add('lightbox')
    lightDOM.innerHTML = `
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précedent</button>
    <div class="lightbox__container">
        <img src="/img/${url.image}" alt="">
    </div>`
    return lightDOM
  }
}

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
