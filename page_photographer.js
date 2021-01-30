async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatCard(data.media)

  for (i = 0; i < data.media.length; i++) {
    
    const params = new URLSearchParams(window.location.search)
    console.log(params.get('id'))
    console.log('test', data.media[i].photographerId)

    if (params.get('id') == data.media[i].photographerId) {
      console.log('FONCTION VERIFIE', data.media[i].photographerId)

    } else {
      console.log('non', data.media[i].photographerId)
    }
  }
}

loadContent()

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

// on recupere l'id viua document.location
// puis on fait une condition :

// si ID recupéré != on n'affiche pas l'obj
// alors on affiche le contenu
