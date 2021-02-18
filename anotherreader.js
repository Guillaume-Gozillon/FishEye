
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
  constructor (chosenPicture, city, country, id, name, portrait, price, tagline, tags) {
    this.chosenPicture = chosenPicture
    this.city = city
    this.country = country
    this.id = id
    this.name = name
    this.portrait = portrait
    this.price = price
    this.tagline = tagline
    this.tags = tags
  }

  /**
     * Get HTML
     * @returns {string}
     */
  getCardHTML () {
    const article = `<article id="photographer-${this.id}" class="card">
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
                        </article>`
    return article
  }

  /**
     * Get headerHTML
     * @return {string}
     */

  getHeaderHTML () {
    const article = `<div class="flex__img"><img class="card__image" src="../${this.chosenPicture}" alt="picture ${this.name}"></div>
  <div class="flex__contact"><button class="contact__btn" onclick="modal.launchModal()" aria-label="Formulaire de contact de ${this.name}">Contactez moi</button></div>
  <div class="flex__details"><h3 class="card__name">${this.name}</h3>
  <p class="card__location">${this.city}, ${this.country}</p>
  <p class="card__tagline">${this.tagline}</p>
  <p class="card__price">${this.price}€/jour</p>
  <ul class="card__taglist" id="taglist_${this.id}">
  ${this.tags.map(tag => `<li class="tag">#${tag}</li>`).join('')}
  </ul>
  <div class="card__number">Nombre total de clichés : ${galery.getNumberOfMedias()}</div>
  </div>`
    return article
  }

  /**
     * Get details HTML
     * @return {string}
     */

  getDetailsHTML () {
    const templateBottomPages = `
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

  getTitleModalHTML () {
    const template = `
        <h3 id="modal__title">Contactez-moi <br> ${this.name}</h3>
       `
    return template
  }

  /**
     * Get the confirmation message HTML
     * @return {string}
     */

  getConfirmationMessage () {
    const template = `Merci, nous avons bien reçu votre demande.<br>${this.name} va vous répondre dans les plus brefs délais.`
    return template
  }
}
