/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  return data
}

loadContent().then((data) => {
  /**
   * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
   * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
   * @param {filter()} compare si ID = URL
   */

  const toSort = data.media
  const params = new URLSearchParams(window.location.search)
  const sortedData = toSort.filter(newArray => newArray.photographerId == (params.get('id')))

  const peopleToSort = data.photographers
  const resultPhotographe = peopleToSort.filter(toTarget => toTarget.id == (params.get('id')))
  const sortPhoto = document.getElementById('sort-photo')

  sortPhoto.addEventListener('change', () => {
    if (sortPhoto.value == 'trend') { // POPULARITE
      return creatCard(sortedData.sort((a, b) => b.likes - a.likes))
    } else if (sortPhoto.value == 'date') { // DATE
      creatCard(sortedData.sort(function (a, b) {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA - dateB
      }))
    } else if (sortPhoto.value == 'title') { // TITRE
      creatCard(sortedData.sort(function (a, b) {
        const titleA = a.name.toLowerCase()
        const titleB = b.name.toLowerCase()
        if (titleA < titleB) return -1
        if (titleA > titleB) return 1
        return dateA - dateB
      }))
    }
  })



  class MediaPhotographer {
    constructor () {
      this.mediaCard = document.createElement('div')
      this.mediaCard.classList.add('mediaCard')
      console.log(this);
    }
  }
  const laoumettre = document.getElementById('picture-photographer')

})


  function createImageCard (images) {
    return `
  <img class="img-page" src="/img/${images}" alt="">
  `
  }

  function createVideoCard (videos) {
    return `
    <video class="img-page" alt="" preload loop autoplay>
      <source src="/img/${videos}" type="video/mp4">
    </video>
  `
  }

  // Litéraux de gabarits
  function creatCard (dataForTheCard) {
    document.getElementById('picture-photographer').innerHTML = `
  ${dataForTheCard.map(function (thingsForCards) {
      return `
    <div class="picture-photographer_presentation">
      <div class="wrapper">
        ${thingsForCards.image ? createImageCard(thingsForCards.image) : ''}
        ${thingsForCards.video ? createVideoCard(thingsForCards.video) : ''}
      </div>
      <div class="text-presentation">
        <p>${thingsForCards.name}</p>
        <div class="price-and-count">
            <p>${thingsForCards.price}€</p>
            <p class="paddeur">${thingsForCards.likes} ❤</p>
        </div>
    </div>
</div>
    `
    })
    .join('')}
  `
  }
  })





  function createNewIdentity (name, city, country, tagline, portrait) {

    function createTheNewContent () {

      document.getElementById('vignette-photographe').innerHTML = `
        <section id="vignette-photographe" class="vignette-photographe">
        <div class="main-content-photographer">
        <div class="firstElement">
        <h1 class="firstName">${name}</h1>
        <h2 class="location-photographer">${city}, ${country}</h2>
        <p class="bio-photographer">${tagline}</p>
        </div>
        <button class="btn-contact">Contactez-moi</button>
        </div>
        <img class="image" src="/img/${portrait}" alt="">
        </section>
        `
    }

    return {
      name,
      city,
      country,
      tagline,
      portrait,
      createTheNewContent
    }
  }
}



class Photographer {
    /**
     *
     * @param chosenPicture
     * @param city
     * @param country
     * @param id
     * @param name
     * @param portrait
     * @param price
     * @param tagline
     * @param tags
     */
    constructor(chosenPicture, city, country, id, name, portrait, price, tagline, tags) {
        this.chosenPicture = chosenPicture;
        this.city = city;
        this.country = country;
        this.id = id;
        this.name = name;
        this.portrait = portrait;
        this.price = price;
        this.tagline = tagline;
        this.tags = tags;
    }

    /**
     * Get HTML
     * @returns {string}
     */
    getCardHTML() {
        let article = `<article id="photographer-${this.id}" class="card">
                            <a href="pages/photographe.html?id=${this.id}" aria-label="aller vers la page de ${this.name}">
                                <img class="card__image" src="${this.chosenPicture}" alt="">
                                <h3 class="card__name">${this.name}</h3>
                            </a>
                            <p class="card__location">${this.city}, ${this.country}</p>
                            <p class="card__tagline">${this.tagline}</p>
                            <p class="card__price">${this.price}€/jour</p>
                            <ul class="card__taglist" id="taglist_${this.id}">
                                ${this.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
                            </ul>
                        </article>`;
        return article;
    }

    /**
     * Get headerHTML
     * @return {string}
     */

    getHeaderHTML() {
        let article = `<div class="flex__img"><img class="card__image" src="../${this.chosenPicture}" alt="picture ${this.name}"></div>
  <div class="flex__contact"><button class="contact__btn" onclick="modal.launchModal()" aria-label="Formulaire de contact de ${this.name}">Contactez moi</button></div>
  <div class="flex__details"><h3 class="card__name">${this.name}</h3>
  <p class="card__location">${this.city}, ${this.country}</p>
  <p class="card__tagline">${this.tagline}</p>
  <p class="card__price">${this.price}€/jour</p>
  <ul class="card__taglist" id="taglist_${this.id}">
  ${this.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
  </ul>
  <div class="card__number">Nombre total de clichés : ${galery.getNumberOfMedias()}</div>
  </div>`;
        return article
    }

    /**
     * Get details HTML
     * @return {string}
     */

    getDetailsHTML() {
        let templateBottomPages = `
    <div class="bottom__flex">
    <div class="bottom__likes" data-allLikes = ${galery.getNumberOfLikes()}>${galery.getNumberOfLikes()}</div><span class="bottom__heart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></span>
    <div class="bottom__price">${this.price}€/jour</div>
    </div>`
        return templateBottomPages
    }

    /**
     * Get title of the modal HTML
     * @return {string}
     */

    getTitleModalHTML(){
        let template = `
        <h3 id="modal__title">Contactez-moi <br> ${this.name}</h3>
       `
        return template
    }

    /**
     * Get the confirmation message HTML
     * @return {string}
     */

    getConfirmationMessage(){
        let template = `Merci, nous avons bien reçu votre demande.<br>${this.name} va vous répondre dans les plus brefs délais.`
        return template
    }
}