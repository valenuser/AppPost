const div = document.getElementById('publicaciones')

const card = (data)=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML = `
        <p>${data.post_text}</p>
        <img src='${data.post_img}'>
    `

    return newCard
}



const addPosts = (data)=>{
    div.innerHTML = ''
    data.map(d=>(
        div.append(card(d))
    ))
}




axios.get('/main/load')
    .then(response => addPosts(response.data))
    .catch(error => console.log(error))