/* eslint-disable eqeqeq */
/* eslint-disable no-new */
export class Lightbox {
  static clickArr () {
    document.getElementById('picture-photographer').addEventListener('click', e => {
      if (e.target.classList == 'img-page') {
        const firedEvent = e.currentTarget.querySelectorAll('img')
        const imgArr = Array.from(firedEvent, x => x.getAttribute('src'))
        console.log('Tableau target :', imgArr)
        console.log('Current :', e.target.getAttribute('src'));
        new Lightbox(e.target.getAttribute('src'))
      }
    })
  }

  constructor (data) {
    this.init(data)

    // window.setTimeout(() => {
    // this.lightElement.parentElement.removeChild(this.lightElement)
    // }, 500)
  }

  init (data) {
    document.getElementById('picture-photographer').addEventListener('click', e => {
      if (e.target.classList == 'img-page') {
      //  this.lightElement = this.buildLightbox(data)
      //  document.body.appendChild(this.lightElement)
      }
    })
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
      <img src="/img/Travel_Adventure_Door.jpg" alt="">
    </div>`
    // lightDOM.querySelector('lightbox__close').addEventListener('click', this.close.bind(this))
    return lightDOM
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

/*
      firstArraySorter (normal, byLike, byDate, byTitle) {
    const arrayToSort = []

    arrayToSort.push(normal)
    console.log('array NOT sorted', arrayToSort)

    const sortPhoto = document.getElementById('sort-photo')
    sortPhoto.addEventListener('change', () => {
      // arrayToSort.shift(normal)
      if (sortPhoto.value === 'trend') {
        // arrayToSort.push(byLike)
        arrayToSort.sort((a, b) => b.likes - a.likes)
        console.log('array sorted', arrayToSort)
      }
    })
  }
  */
}

Lightbox.clickArr()