async function loadContent () {
  const response = await fetch('./data_photographers.json')
  const data = await response.json()
  return data
}

loadContent().then((data) => {
  /**
   * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
   * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
   * @param {filter()} compare si ID = URL
   */

  const toSort = data.media
  const params = new URLSearchParams(window.location.search)
  const sortedData = toSort.filter(newArray => newArray.photographerId == (params.get('id')))
  console.log('tableau filtré :', sortedData)

  const peopleToSort = data.photographers
  const resultPhotographe = peopleToSort.filter(toTarget => toTarget.id == (params.get('id')))
  const sortPhoto = document.getElementById('sort-photo')
  console.log(resultPhotographe)

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

  for (const sortedData of this.sortedData) {
    const photographerInstance = new Photographer(
      sortedData.id,
      sortedData.name,
      sortedData.city,
      sortedData.country,
      sortedData.tags,
      sortedData.tagline,
      sortedData.price,
      sortedData.portrait
    )
  }

  console.log('TEST', new ImageMedia())

  const headerPhotographe = new HeaderPhotographer(resultPhotographe[0].name, resultPhotographe[0].id, resultPhotographe[0].city, resultPhotographe[0].country, resultPhotographe[0].tags, resultPhotographe[0].tagline, resultPhotographe[0].price, resultPhotographe[0].portrait)

  headerPhotographe.createCard()
})
