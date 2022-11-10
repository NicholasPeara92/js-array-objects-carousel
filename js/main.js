"use strict"

// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso l'alto o il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: 'Marvel\'s Avengers',
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// FUNZIONI
function setCurrentImage() {
    currentImageContainer.querySelector('img').src = images[active].image;
    currentImageContainer.querySelector('img').alt = images[active].title;
    currentImageContainer.querySelector('.game-text h2').innerHTML = images[active].title;
    currentImageContainer.querySelector('.game-text p').innerHTML = images[active].text;
}
function changeSlide(direction) {
    // Rimuovo la classe active dalla thumb attiva
    thumbs[active].classList.remove('active');
    if( direction === 'next' ) {
        if( active < images.length - 1 ) {
            active++;
        } else {
            active = 0;
        }
    } else if( direction === 'prev' ) {
        if( active > 0 ) {
            active--;
        } else {
            active = images.length - 1;
        }
    }
    // aggiungo la classe active alla thumb successiva
    thumbs[active].classList.add('active');
    // modifico l'immagine e il testo del main image
    setCurrentImage();
}

// VARIABILI
let active= 0;
const currentImageContainer = document.querySelector('.main-image');
const thumbnail = document.querySelector('.thumbnails');


// MAIN
setCurrentImage();

// Creo le Thumbnails
images.forEach((element, index) => {
    // Clono il template delle thumb
    const templateThumb = document.getElementById('thumb').content.cloneNode(true);
    // Compilo l'html del template appena clonato
    if( index === active ) {
        templateThumb.querySelector('.thumb').classList.add('active');
    }
    templateThumb.querySelector('img').src = element.image;
    templateThumb.querySelector('img').alt = element.title;
    thumbnail.append(templateThumb);
});

// Seleziono tutte le thumbnails
const thumbs = document.querySelectorAll('.thumb');
// Aggiungo evento click al bottone inferiore
const btnNextSlide = document.querySelector('.btn-next');
btnNextSlide.addEventListener('click', function() {
    changeSlide('next');
});
// Aggiungo evento click al bottone superiore
const btnPrevSlide = document.querySelector('.btn-prev');
btnPrevSlide.addEventListener('click', function() {
    changeSlide('prev');
});

// inserisco autoplay
let autoplay = setInterval(function() {
        changeSlide('next');
}, 4000);

