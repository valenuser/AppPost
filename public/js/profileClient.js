const div = document.getElementById('publicaciones')

const card = (data)=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML = `
    <p>${data.post_text}</p>
    <img src='${data.post_img}'>
`
    const p = document.createElement('i')
    p.className = 'fa-regular fa-heart'

    newCard.append(p)
    return newCard
}



const addPosts = (data)=>{
    div.innerHTML = ''
    data.map(d=>(
        div.append(card(d))
    ))
}

const like = (card)=>{
    alert(card)
}



axios.get('/profile/load')
    .then(response => addPosts(response.data))
    .catch(error => console.log(error))