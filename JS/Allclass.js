async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  return data
}

loadContent().then((data) => {
  /**
       * Recherche l'ID associé à la page
       * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
       * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
       * @param {filter()} compare si ID = URL
       */

  const requestId = window.location.search
  const urlParams = new URLSearchParams(requestId)
  const id = urlParams.get('id')
  console.log('Id :', id)

  // Créé un nouveau tableau filtrant le JSON si data.photographer OU data.media en fonction de l'ID
  const photographerSorted = data.photographers
  const resultPhotographe = photographerSorted.filter(newPhotographerArray => newPhotographerArray.id == (urlParams.get('id')))

  const toSort = data.media
  const mediaSorted = toSort.filter(newMediaArray => newMediaArray.photographerId == (urlParams.get('id')))
  console.log('Tableau des photos filtrées :', mediaSorted)

  // VIGNETTE SUPERIEUR ------->

  const sameConst = resultPhotographe[0]

  const buildHTML = new HeaderPhotographer(
    sameConst.name,
    sameConst.id,
    sameConst.city,
    sameConst.country,
    sameConst.tags,
    sameConst.tagline,
    sameConst.price,
    sameConst.portrait
  )

  buildHTML.createCard()

  console.log('Instance buildHTML :', buildHTML)

  // ------->

  // ITERATION DES CARTES PHOTOS ------->

  const images = []
  for (key in mediaSorted) {
    const shorterImage = mediaSorted[key]
    const imageMedia = new ImageMedia(
      shorterImage.name,
      shorterImage.id,
      shorterImage.photographerId,
      shorterImage.image,
      shorterImage.tags,
      shorterImage.likes,
      shorterImage.date,
      shorterImage.price
    )
    images.push(imageMedia)
    imageMedia.createHTML()
  }

  const videos = []
  for (el in mediaSorted) {
    const shorterVideo = mediaSorted[el]
    const videoMedia = new VideoMedia(
      shorterVideo.name,
      shorterVideo.id,
      shorterVideo.photographerId,
      shorterVideo.video,
      shorterVideo.tags,
      shorterVideo.likes,
      shorterVideo.date,
      shorterVideo.price
    )
    videos.push(videoMedia)
    videoMedia.createHTML()
  }
})

/*
const images = dataSortedById.mediaSorted.map(imageRaw => return new ImageMedia(imageRaw.name, imageRaw.id, imageRaw.photographerId, imageRaw.image, imageRaw .tags, imageRaw.likes, imageRaw.date, imageRaw.price))
*/

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
