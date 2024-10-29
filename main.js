document.querySelector('button').addEventListener('click', getRapper)

function getRapper(){
    const input = document.querySelector('input').value
    const url = `/api/${input}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#species').innerText = data.species
        document.querySelector('#description').innerText = data.description
        document.querySelector('#likes').innerText = data.likes
        document.querySelector('#dislikes').innerText = data.dislikes
    })
}
