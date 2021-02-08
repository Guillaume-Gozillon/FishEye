expot async function loadContent () {
    const response = await fetch('./data_photographers.json')
    const data = await response.json()
  
    creatCard(data.media)
    sortByPrice('date', data)
  
    /**
     * @param {URLSearchParams} (window.location.search) fetch => ?id={number}
     * @param {URLSearchParams.get()} params.get('id') => isole l'ID de l'URL
     * @param {condition} compare si ID = URL
     * @param {if statement} ajoute une classe sur l'ID (display: none)
     */
  
    for (i = 0;i < data.media.length; i++) {
      const params = new URLSearchParams(window.location.search)
      // eslint-disable-next-line eqeqeq
      if (!(params.get('id') == data.media[i].photographerId)) {
        picturePhotographer[i].classList.add('card-filter')
      }
    }
  
    function sortByPrice (catchCallcabk, data) {
      sortPhoto.addEventListener('change', () => {
        console.log('Valeur select :', sortPhoto.value)
        if (sortPhoto.value = catchCallcabk) {
          creatCard(data.media.sort((a, b) => a.likes - b.likes))
        }
      })
    }
  }