export class HeaderPhotographer {
  constructor (media) {
    const sectionCard = document.getElementById('vignette-photographe')
    this.profilDom = this.createCard(media)
    sectionCard.appendChild(this.profilDom)
  }

  createCard (media) {
    const profilDom = document.createElement('section')
    profilDom.classList.add('text-presentation')
    profilDom.innerHTML = `
    <div class="main-content-photographer">
        <div class="firstElement">
            <h1 class="firstName">${media.name}</h1>
            <h2 class="location-photographer">${media.city}, ${media.country}</h2>
            <p class="bio-photographer">${media.tagline}</p>
            <div class="hastag">
              <p class="photographer-filter">#Event</p>
              <p class="photographer-filter">#Travel</p>
              <p class="photographer-filter">#Animals</p>
            </div>
        </div>
        <button class="btn-contact">Contactez-moi</button>
    </div>
    <img class="image" src="/img/${media.portrait}" alt="">`
    return profilDom
  }
}
