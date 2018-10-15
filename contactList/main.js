let e = fetch('https://randomuser.me/api/?results=10');
let sisas = e.then(function (resultados) {
	return resultados.json();
}).then(here => {
    const authors = here.results;
    const miSection = document.querySelector('section');
    authors.forEach((author) => {
        const article = document.createElement('article');
        const contentImgAndButton = document.createElement('div');
        const img = setupAuthorImg(author.picture.large);
        contentImgAndButton.append(img);
        contentImgAndButton.className = "ImgAndButton";
        const button = createStarButton(article);
        contentImgAndButton.append(button);
        article.append(contentImgAndButton);
        setupAuthorName(author.name.first + ' ' + author.name.last, article);
        setupAuthorPhone(author.phone, article); 
        setupAuthorEmail(author.email, article);
        miSection.append(article);
    });
});

function setupAuthorName(name, article) {
    const figCapt = document.createElement('figcaption');
    figCapt.innerHTML = name;
    article.append(figCapt);
    figCapt.className = "Name";
}

function setupAuthorImg(url) {
    const img = document.createElement('img');
    img.src = url;
    // article.append(img);
    return img;
} 

function setupAuthorPhone(phoneNumber, article) {
    const phoneTitle = document.createElement('span');
    const phone = document.createElement('span');
    phoneTitle.innerHTML = ('Phone:');
    phone.innerHTML = phoneNumber;
    article.append(phoneTitle);
    article.append(phone);
}

function setupAuthorEmail(emailAuthor, article) {
    const email = document.createElement('span');
    email.innerText = emailAuthor;
    article.append(email);
}

function createStarButton() {
    const favoriteButton = document.createElement('button');
    favoriteButton.className = "Button";
    const star = document.createElement('i');
    star.className = "far fa-star";
    favoriteButton.append(star);
    addEventsListener(favoriteButton);
    return favoriteButton;
}

function addEventsListener(favoriteButton) {
    favoriteButton.removeEventListener('click', removeFavorite);
    favoriteButton.addEventListener('click', addFavorite);
}

function addFavorite(evento) {
    const starButton = evento.target.closest('button'); //es el boton, el elemento que hace el evento
    var article = starButton.closest('article');
    article.remove();
    const miAside = document.querySelector('aside');
    toggleStar(article.querySelector('button i'));
    miAside.append(article);
    removeEventsFavorites(starButton);
}

function toggleStar(star) {
    if (star.className == "far fa-star"){
        star.className = "fas fa-star";
    } else {
        star.className = "far fa-star";
    }
}

function removeEventsFavorites(favoriteButton) {
    favoriteButton.removeEventListener('click', addFavorite);
    favoriteButton.addEventListener('click', removeFavorite)
}

function removeFavorite(evento) {
    const starButton = evento.target.closest('button'); //es el boton, el elemento que hace el evento
    var article = starButton.closest('article');
    article.remove();
    const miSection = document.querySelector('section');
    toggleStar(article.querySelector('button i'));
    miSection.append(article);
    addEventsListener(starButton);
}
