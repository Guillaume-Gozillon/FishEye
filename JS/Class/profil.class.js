/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
export class HeaderPhotographer {
  /**
   *
   * @param {name}
   * @param {id}
   * @param {city}
   * @param {country}
   * @param {tags}
   * @param {tagline}
   * @param {price}
   * @param {portrait}
   */

  constructor (media) {
    this.name = media.name,
    this.id = media.id,
    this.city = media.city,
    this.country = media.country,
    this.tags = media.tags,
    this.tagline = media.tagline,
    this.price = media.price,
    this.portrait = media.portrait
  }

  createCard () {
    document.getElementById('vignette-photographe').innerHTML = `
        <section id="vignette-photographe" class="vignette-photographe">
        <div class="main-content-photographer">
            <div class="firstElement">
                <h1 class="firstName">${this.name}</h1>
                <h2 class="location-photographer">${this.city}, ${this.country}</h2>
                <p class="bio-photographer">${this.tagline}</p>
                <div class="hastag">
                    <div class="photographer-filter">
                        <p>#Event</p>
                    </div>
                    <div class="photographer-filter">
                        <p>#Travel</p>
                    </div>
                    <div class="photographer-filter">
                        <p>#Animals</p>
                    </div>
                </div>
            </div>
            <button class="btn-contact">Contactez-moi</button>
        </div>
        <img class="image" src="/img/${this.portrait}" alt="">
    </section>
        `
  }
}
