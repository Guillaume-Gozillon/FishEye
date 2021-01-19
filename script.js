const img = document.getElementById('img')

fetch('./data_photographers.json')
    .then(res => res.json())
    .then(data => img.src = data.url)