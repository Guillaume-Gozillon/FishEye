const gallery = document.getElementById('mediaGallery')
const photographerName = document.getElementById('photographerName')
const photographerDesc = document.getElementById('photographerDesc')
const photographerTags = document.getElementById('photographerTags')
const photographerProfilePhoto = document.getElementById('photographerProfilePhoto')
const photographerLikes = document.getElementById('photographerLikes')
const photographerPrice = document.getElementById('photographerPrice')
const selectOrder_roll = document.getElementById('selectedOrder')

const urlParams = new URLSearchParams(window.location.search)
const photographerID = urlParams.get('id')

let selectedOrder
let modalMediaIndex = 0

async function getAsync () {
  const response = await fetch('https://hugolainen.github.io/FishEye/public/data/FishEyeData.json')
  const data = await response.json()
  return data
}

getAsync().then((data) => {
  const mediaList = data.media
  const photographerList = data.photographers
  const photgrapherIndex = getPhotographer(photographerID, photographerList)
  const photographerMediaList = getPhotographerMediaList(photographerID, mediaList)
  const orderPopularity = generateOrderList(photographerMediaList, 'popularity')
  const orderDate = generateOrderList(photographerMediaList, 'date')
  const orderName = generateOrderList(photographerMediaList, 'name')
  const gallerySize = photographerMediaList.length
  selectedOrder = orderPopularity

  generateProfile(photgrapherIndex, photographerList, photographerMediaList)
  generateGallery(photographerMediaList, selectedOrder)
  generateModalMediaClickEvents()

  // List select to modify the order
  selectOrder_roll.addEventListener('change', (event) => {
    if (event.target.value == 'date') {
      selectedOrder = orderDate
    } else if (event.target.value == 'title') {
      selectedOrder = orderName
    } else {
      selectedOrder = orderPopularity
    }
    generateGallery(photographerMediaList, selectedOrder)
    generateModalMediaClickEvents()
  })

  // Utility function to get the data at a specific index
  function getModalMedia (modalIndex) {
    const index = selectedOrder[modalIndex].index
    return photographerMediaList[index]
  }

  // Generation of modal media
  function generateFocusElement (modalIndex) {
    const media = getModalMedia(modalIndex)
    if (media.image == undefined) {
      imgShow.innerHTML = '<video tabIndex=0 controls> <source src="public/img/media/' + media.video + '" type="video/mp4">' + media.alt + '</video>'
    } else {
      imgShow.innerHTML = '<img tabIndex=0 src="public/img/media/' + media.image + '" alt="' + media.alt + '">'
    }

    imgName.innerHTML = media.alt
  }

  // Event to move to next media
  nextImg.addEventListener('click', ($event) => {
    $event.preventDefault()
    goToNextImg()
  })

  function goToNextImg () {
    modalMediaIndex = makeItRoll(modalMediaIndex, gallerySize, 'forward')
    generateFocusElement(modalMediaIndex)
    imgShow.firstChild.focus()
  }

  // Event to move to previous media
  prevImg.addEventListener('click', ($event) => {
    $event.preventDefault()
    goToPrevImg()
  })

  function goToPrevImg () {
    modalMediaIndex = makeItRoll(modalMediaIndex, gallerySize, 'backward')
    generateFocusElement(modalMediaIndex)
    imgShow.firstChild.focus()
  }

  // Generate the click events on the media cards (open modalMedia + like)
  function generateModalMediaClickEvents () {
    const modalMedia_Opener = document.getElementsByClassName('modalMedia_open')
    const likeButton = document.getElementsByClassName('add_like_button')

    for (let i = 0; i < modalMedia_Opener.length; i++) {
      modalMedia_Opener[i].addEventListener('click', () => {
        launchModalMedia()
        modalMediaIndex = i
        generateFocusElement(modalMediaIndex)
        modalMedia.focus()
      })

      likeButton[i].addEventListener('click', () => {
        likeButton[i].innerHTML = (parseInt(likeButton[i].textContent, 10) + 1) + ' <i class="fas fa-heart"></i>'
        photographerLikes.innerHTML = (parseInt(photographerLikes.textContent, 10) + 1) + ' <i class="fas fa-heart"></i>'

        for (let j = 0; j < photographerMediaList.length; j++) {
          if (orderPopularity[i].name == photographerMediaList[j].alt) {
            photographerMediaList[j].likes = parseInt(photographerMediaList[j].likes) + 1
          }
        }

        if (i > 0) {
          if (photographerMediaList[orderPopularity[i].index].likes > photographerMediaList[orderPopularity[i - 1].index].likes) {
            const temp = orderPopularity[i]
            orderPopularity[i] = orderPopularity[i - 1]
            orderPopularity[i - 1] = temp
            if (selectOrder_roll.value == 'popularity') {
              selectedOrder = orderPopularity
              generateGallery(photographerMediaList, selectedOrder)
              generateModalMediaClickEvents()
            }
          }
        }
      })
    }
  }

  // Add keyboard events to close the display
  // Also add the use of keyboard arrow keys to do the modalMedia rotation
  modalMedia.addEventListener('keyup', function (event) {
    if (event.key === 'Escape') {
      closeModalMedia()
    }
    if (event.key == 'ArrowLeft') {
      goToPrevImg()
    }
    if (event.key == 'ArrowRight') {
      goToNextImg()
    }
  })
})

// get the index of the photographer based on his ID number
function getPhotographer (ID, photographerList) {
  let photographIndex
  for (let i = 0; i < photographerList.length; i++) {
    if (photographerList[i].id == ID) {
      photographIndex = i
      return i
    }
  }
}

// get the list of index of the photograph medias based on his ID number
function getPhotographerMediaList (ID, baseMediaList) {
  const mediaList = []
  for (let i = 0; i < baseMediaList.length; i++) {
    if (baseMediaList[i].photographerId == ID) {
      mediaList.push(baseMediaList[i])
    }
  }
  return mediaList
}

// Generate the photographer profil and footer numbers
function generateProfile (index, photographerList, photographerMediaList) {
  const photographer = photographerList[index]
  let ammountOfLikes = 0
  for (var i = 0; i < photographerMediaList.length; i++) {
    ammountOfLikes += photographerMediaList[i].likes
  }

  photographerName.innerText = photographer.name
  photographerDesc.innerHTML = '<strong>' + photographer.city + ', ' + photographer.country + '</strong> <br>' + photographer.tagline + '<br>'
  for (var i = 0; i < photographer.tags.length; i++) {
    const tag = document.createElement('li')
    tag.innerHTML = '#' + photographer.tags[i]
    photographerTags.appendChild(tag)
  }
  photographerProfilePhoto.innerHTML = '<img tabindex=0 class="photographProfile__photo" src="public/img/photographersIDphotos/' + photographer.portrait + '" alt="' + photographer.name + '" >'
  photographerLikes.innerHTML = ammountOfLikes + ' <em class="invisible"> likes</em> <i class="fas fa-heart"></i>'
  photographerPrice.innerHTML = photographer.price + '$ / day'

  modalForm_title.innerHTML = 'Contact me <br>' + photographer.name
}

// generate a new list of index re-arranged based on the order type
function generateOrderList (mediaList, type) {
  const orderList = []
  for (let i = 0; i < mediaList.length; i++) {
    const mediaItem = {
      index: i,
      likes: mediaList[i].likes,
      date: mediaList[i].date,
      name: mediaList[i].alt
    }
    orderList.push(mediaItem)
  }

  if (type == 'name') {
    return orderList.sort(function (a, b) {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })
  } else if (type == 'date') {
    return orderList.sort(function (a, b) {
      // Turn the strings into dates, and then subtract them to get a value that is either negative, positive, or zero.
      return new Date(b.date) - new Date(a.date)
    })
  } else {
    return orderList.sort((a, b) => b.likes - a.likes)
  }
}

// Generate the gallery
function generateGallery (mediaList, orderList) {
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild)
  }

  for (let i = 0; i < mediaList.length; i++) {
    gallery.appendChild(generateMediaCard(mediaList[orderList[i].index]))
  }
}

// Call the factory constructors to build a mediaCard
function generateMediaCard (media) {
  const cardObj = new mediaCardPartsFactory('card', media)
  const descObj = new mediaCardPartsFactory('desc', media)

  if (media.image == undefined) {
    var mediaObj = new mediaCardPartsFactory('video', media)
  } else {
    var mediaObj = new mediaCardPartsFactory('image', media)
  }
  cardObj.mediaCard.appendChild(mediaObj.mediaMedia)
  cardObj.mediaCard.appendChild(descObj.mediaDesc)

  return cardObj.mediaCard
}

// Intermediary between the actual factories classes and the user
class mediaCardPartsFactory {
  constructor (type, mediaData) {
    if (type === 'card') {
      return new MediaFactory_card()
    }

    if (type === 'desc') {
      return new MediaFactory_desc(mediaData)
    }

    if (type === 'video') {
      return new MediaFactory_video(mediaData)
    }

    if (type === 'image') {
      return new MediaFactory_image(mediaData)
    }
  }
}

// Various factories used to build a mediaCard
class MediaFactory_card {
  constructor () {
    this.mediaCard = document.createElement('div')
    this.mediaCard.classList.add('mediaCard')
  }
}

class MediaFactory_video {
  constructor (mediaData) {
    this.mediaMedia = document.createElement('div')
    this.mediaMedia.classList.add('mediaCard__image')
    this.mediaMedia.classList.add('modalMedia_open')
    this.mediaMedia.innerHTML = '<a href="#" > <video alt="' + mediaData.alt + '"> <source src="public/img/media/' + mediaData.video + '" type="video/mp4">' + mediaData.alt + ', closeup view </video> </a>'
  }
}

class MediaFactory_image {
  constructor (mediaData) {
    this.mediaMedia = document.createElement('div')
    this.mediaMedia.classList.add('mediaCard__image')
    this.mediaMedia.classList.add('modalMedia_open')
    this.mediaMedia.innerHTML = '<a href="#" > <img src="public/img/media/' + mediaData.image + '" alt="' + mediaData.alt + ', closeup view">  </a>'
  }
}

class MediaFactory_desc {
  constructor (mediaData) {
    this.mediaDesc = document.createElement('div')
    this.mediaName = document.createElement('p')
    this.mediaPrice = document.createElement('p')
    this.mediaLike = document.createElement('p')

    this.mediaDesc.classList.add('mediaCard__desc')
    this.mediaName.classList.add('mediaCard__desc__name')
    this.mediaName.setAttribute('tabindex', '0')
    this.mediaPrice.classList.add('mediaCard__desc__number')
    this.mediaPrice.setAttribute('tabindex', '0')
    this.mediaLike.classList.add('mediaCard__desc__number')
    this.mediaLike.setAttribute('tabindex', '0')
    this.mediaLike.classList.add('add_like_button')

    this.mediaName.innerHTML = mediaData.alt
    this.mediaPrice.innerHTML = mediaData.price + ' $'
    this.mediaLike.innerHTML = mediaData.likes + ' <em class="invisible"> likes</em> <i class="fas fa-heart" aria-label="likes"></i>'

    this.mediaDesc.appendChild(this.mediaName)
    this.mediaDesc.appendChild(this.mediaPrice)
    this.mediaDesc.appendChild(this.mediaLike)
  }
}
