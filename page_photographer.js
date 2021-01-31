/* eslint-disable no-undef */
async function loadContent() {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()

  creatCard(
    data.media.sort(function (a, b) {
      return a.likes - b.likes
    })
  )

  console.log(data.media)

  /**
  * @param URLSearchParams(window.location.search) fetch l'ID de l'URL
  * @param console.log(params.get('id')) => affiche l'ID de l'URL
  * @param {condition} verifie les ID != de l'URL, puis : display none
  */

  for (i = 0; i < data.media.length; i++) {
    const params = new URLSearchParams(window.location.search)
    // eslint-disable-next-line eqeqeq
    if (!(params.get('id') == data.media[i].photographerId)) {
      picturePhotographer[i].classList.add('filter')
    }
  }
}

const picturePhotographer = document.getElementsByClassName(
  'picture-photographer_presentation'
)

loadContent()

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
