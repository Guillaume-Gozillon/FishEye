class HeaderPhotographer {
  /**
         *
         * @param name
         * @param id
         * @param city
         * @param country
         * @param tags
         * @param tagline
         * @param price
         * @param portrait
         */

  constructor (name, id, city, country, tags, tagline, price, portrait) {
    this.name = name
    this.id = id
    this.city = city
    this.country = country
    this.tags = tags
    this.tagline = tagline
    this.price = price
    this.portrait = portrait
  }

  createCard () {
    document.getElementById('vignette-photographe').innerHTML = `
        <section id="vignette-photographeTEST" class="vignette-photographe">
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