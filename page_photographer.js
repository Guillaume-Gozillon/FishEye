/* eslint-disable no-undef */
async function loadContent() {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()

  creatCard(data.media.sort((a, b) => a - b))

  /**
   * @param {URLSearchParams} (window.location.search) fetch l'ID de l'URL
   * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
   * @param {condition} compare si l'ID = de l'URL
   * @param {if statement} ajoute une classe sur l'ID a supp (display none)
   */

  for (i = 0; i < data.media.length; i++) {
    const params = new URLSearchParams(window.location.search)
    // eslint-disable-next-line eqeqeq
    if (!(params.get('id') == data.media[i].photographerId)) {
      picturePhotographer[i].classList.add('filter')
    }
  }
}

// DOM éléments
const picturePhotographer = document.getElementsByClassName('picture-photographer_presentation')

// Fonction lancées
loadContent()

// Litéraux de gabarits
function creatCard(dataForTheCard) {
  document.getElementById('picture-photographer').innerHTML = `
  ${dataForTheCard
    .map(function (thingsForCards) {
      return `
    <div class="picture-photographer_presentation">
    <img class="img-page" src="/img/${thingsForCards.image}" alt="">
    <div class="text-presentation">
        <p>${thingsForCards.tags}</p>
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
