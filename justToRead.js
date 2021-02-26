// ITERATION DES IMAGES ------->

const images = []
for (key in mediaSorted) {
  const shorterImage = mediaSorted[key]
  if (shorterImage.image) {
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
}

// ITERATION DES VIDEOS ------->

const videos = []
for (key in mediaSorted) {
  const shorterVideo = mediaSorted[key]
  if (shorterVideo.video) {
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
}
