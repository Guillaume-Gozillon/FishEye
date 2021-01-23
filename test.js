function creatCard (image) {
  document.getElementById('main-index').innerHTML = `
  <h1 class="principal">Nos photographes</h1>
  <div class="container">${image.map(function (thingsIntoTheData) {
    return ` 
    <div class="photographers">
    <img src="/ID_pict/${thingsIntoTheData.portrait}" alt="" />
    <div class="name">${thingsIntoTheData.name}</div>
    <div class="location">${thingsIntoTheData.city}</div>
    <div class="bio">${thingsIntoTheData.tagline}</div>
    <div class="price">${thingsIntoTheData.price}/jour</div>
    <div class="hastag">
      <div class="photographer-filter">
        <p>#Sport</p>
      </div>
      <div class="photographer-filter">
        <p>#Artchitecture</p>
      </div>
    </div>
  </div>
    `
  }).join('')}
  `
}