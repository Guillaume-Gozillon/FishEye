async function start () {
    const response = await fetch('./data_photographers.json')
    const data = await response.json()
    console.log(data)
    creatPhotographeCard(data.photographers[0])
  }
  
  start()
  
  const writeTheCode = document.getElementById('test-card-photographer')
  
  function creatPhotographeCard (PhotographeCard) {
    writeTheCode.innerHTML = `
    ${Object.keys(PhotographeCard).map(function (breed) {
      return breed
    }).join(' ')}
    `
  }