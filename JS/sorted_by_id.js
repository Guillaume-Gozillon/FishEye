class SortById {
  constructor (data) {
    /**
       * Recherche l'ID associé à la page
       * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
       * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
       * @param {filter()} compare si ID = URL
       */

    this.requestId = window.location.search
    this.urlParams = new URLSearchParams(this.requestId)
    this.id = this.urlParams.get('id')
    console.log('Id :', this.id)

    // Créé un nouveau tableau filtrant le JSON si data.photographer OU data.media en fonction de l'ID
    this.photographerSorted = data.photographers
    this.resultPhotographe = this.photographerSorted.filter(newPhotographerArray => newPhotographerArray.id == (this.urlParams.get('id')))

    this.toSort = data.media
    this.mediaSorted = this.toSort.filter(newMediaArray => newMediaArray.photographerId == (this.urlParams.get('id')))
    console.log('Tableau des photos filtrées :', this.mediaSorted)
  }
}
