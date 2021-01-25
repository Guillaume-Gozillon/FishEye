async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatCard(data.media)
}

loadImages()

function creatCard (dataForTheCard) {
  document.getElementById('picture-photographer').innerHTML = `
    ${dataForTheCard.map(function (thingsForCards) {
      return `
      <div class="picture-photographer_presentation">
      <img class="img-page" src="/img/${thingsForCards.image}" alt="">
      <div class="text-presentation">
          <p>${thingsForCards.tags}</p>
          <div class="price-and-count">
              <p>70€</p>
              <p class="paddeur">${thingsForCards.likes} ❤</p>
          </div>
      </div>
  </div>
      `
    }).join('')}
    `
}

function listener () {
  
}

// au click on ecoute l'ID
// on compare le tag à l'objet.tags
// condition : on parcours la partie "tags" (boucle for) d'un objet média pour verifier si tags = true
// si le tag est true alors la carte-photographe ne bouge pas
// sinon on supprime la carte