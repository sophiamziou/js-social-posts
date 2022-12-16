const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postsContent = '';
// bonus 1
posts.forEach((elem) => {
    const date = elem.created;
    const [year, month, day] = date.split('-');
    const result = [month, day, year].join('/');
    console.log(result)

    // BONUS 2 
    if(elem.author.image == null){
        let text = elem.author.name;
        const arrayName = text.split(" ");
        let nome = arrayName[0];
        let cognome = arrayName[1];
        let letteraNome = nome.charAt(0);
        let letteraCognome = cognome.charAt(0); 
        immagine = `<h1 class="profile-pic color-black">${letteraNome}${letteraCognome}</h1>`;
    }else{
        immagine = `<img class="profile-pic" src="${elem.author.image}" alt="Phil Mangione">`;               
    }
    
    postsContent += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                ${immagine}
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${elem.author.name}</div>
                <div class="post-meta__time">${result}</div>
            </div>
       </div>
    </div>
    <div class="post__text">${elem.content}</div>
    <div class="post__image">
        <img src="${elem.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="javascript:" data-postid="${elem.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${elem.id}" class="js-likes-counter">${elem.likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>`;
})

const postsContainer = document.getElementById('container');
postsContainer.innerHTML += postsContent;

// MILESTONE 3 - BONUS 3
const bottoneLike = document.getElementsByClassName('js-like-button');
const arrayLike = [];

for (let i=0; i<bottoneLike.length; i++){

    bottoneLike[i].addEventListener('click', function(){

        const postId = this.dataset.postid;
        const likes = document.getElementById(`like-counter-${postId}`);
        const likesNumber = parseInt(likes.innerText);

        if(arrayLike.includes(postId)){
            likes.innerText = likesNumber-1;

            const index = arrayLike.indexOf(postId);
            if(index > -1){
                arrayLike.splice(index,1);
            }
            bottoneLike[i].classList.remove("like-button--liked");
            console.log(arrayLike);
        }else{
            likes.innerText = likesNumber+1;
            arrayLike.push(postId);
            console.log(arrayLike);
            bottoneLike[i].classList.add("like-button--liked");
        }
    });
}