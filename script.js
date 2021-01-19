const img = document.getElementById('img')

fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => img.src = data[0].url)