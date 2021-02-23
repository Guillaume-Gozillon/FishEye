async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  return data
}

loadContent().then((data) => {
  // Construction du DOM en instanciant la classe contenant le template literal

  const dataSortedById = new SortById(data)
  console.log('Instance SortById :', dataSortedById)

  // VIGNETTE SUPERIEUR ---------------------------------------

  const buildHTML = new HeaderPhotographer(dataSortedById.resultPhotographe[0].name, dataSortedById.resultPhotographe[0].id, dataSortedById.resultPhotographe[0].city, dataSortedById.resultPhotographe[0].country, dataSortedById.resultPhotographe[0].tags, dataSortedById.resultPhotographe[0].tagline, dataSortedById.resultPhotographe[0].price, dataSortedById.resultPhotographe[0].portrait)

  buildHTML.createCard()

  console.log('Instance buildHTML :', buildHTML)

  // ITERATION DES CARTES PHOTOS ---------------------------------------

  const images = []
  for (key in dataSortedById.mediaSorted) {
    const imageMedia = new ImageMedia(
      dataSortedById.mediaSorted[key].name,
      dataSortedById.mediaSorted[key].id,
      dataSortedById.mediaSorted[key].photographerId,
      dataSortedById.mediaSorted[key].image,
      dataSortedById.mediaSorted[key].tags,
      dataSortedById.mediaSorted[key].likes,
      dataSortedById.mediaSorted[key].date,
      dataSortedById.mediaSorted[key].price
      )
    images.push(imageMedia)
    imageMedia.createHTML()
  }
})




/*
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
*/
