async function loadImages () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  creatIndex(data.photographers)

  const portraitFilter = document.getElementById('portaits')
  const testCardToRemove = document.getElementById('testcardtoremove')

  portraitFilter.addEventListener('click', function () {


console.log('OBJET', data.photographers)
console.log('PROPRIETE', data.photographers[1].tags)

const arrayShip = data.photographers
const proprieteShip = data.photographers[1].tags


for (const proprieteShip of arrayShip) {
  

  if(!proprieteShip.includes('fashion')) {
    // si le tag est true alors la carte-photographe ne bouge pas
    alert('NON')
    //testCardToRemove.classList.add('todelet')


  } else {

    alert('Ca fonctionne !')

  }


}


/*

    // DEBUT PREMIER TEST
    for(i = 0; i < data.photographers.length; i++){

      console.log(data.photographers[i].tags)

      if(!data.photographers[i].tags[1].includes('fashion')) {
        // si le tag est true alors la carte-photographe ne bouge pas
        alert('NON')
        try{
          testCardToRemove.classList.add('todelet')
        } catch {}


      } else {
  
        alert('Ca fonctionne !')

      }
    }
// FIN PREMIER TEST
*/

})
  console.log(data.photographers[2].tags[1])
}

loadImages()

function addFilter (hashtag) {
  return `
  <div class="hastag">
  ${hashtag.map(function (hashtagItems) {
    return `
    <div class="photographer-filter">
      <p>${hashtagItems}</p>
    </div>
    `
  }).join('')}
</div>
  `
}

function creatIndex (dataToGet) {
  document.getElementById('main-index').innerHTML = `
  <h1 class="principal">Nos photographes</h1>
  <div class="container">${dataToGet.map(function (thingsIntoTheData) {
    return ` 
    <div id="testcardtoremove" class="photographers">
    <img src="/img/${thingsIntoTheData.portrait}" alt="" />
    <a href="./test-page-photographe.html"class="name">${thingsIntoTheData.name}</a>
    <div class="location">${thingsIntoTheData.city}</div>
    <div class="bio">${thingsIntoTheData.tagline}</div>
    <div class="price">${thingsIntoTheData.price}/jour</div>
    ${addFilter(thingsIntoTheData.tags)}
  </div>
    `
  }).join('')}
  `
}

//creer une classe pour identifier la carte
// au click on ecoute l'ID
// on compare le tag à l'objet.tags
// condition : on parcours la partie "tags" (boucle for) d'un objet média pour verifier si tags = true
// si le tag est true alors la carte-photographe ne bouge pas
// sinon on supprime la carte
