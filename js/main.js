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
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselContainer = document.querySelector('.container');
const carousel = document.getElementById("template").content.cloneNode(true);


let mainImage = carousel.querySelectorAll('.d-none');
let thumbnail = carousel.querySelectorAll('.thumbnail');


for (let i = 0; i < images.length; i++){
    let game = images[i];
    //immagini principali
    carousel.querySelector(`.main-${i} img`).src = game.image;

    //thumbnails    
    carousel.querySelector(`.thumb-${i} img`).src = game.image;

    //testo
    carousel.querySelector('h2').innerHtml = game.title;
    carousel.querySelector('p').innerHtml = game.text;
}

let active= 0;

carousel.querySelector('.btn-prev').addEventListener('click', function() {
    mainImage[active].classList.remove('active');
    if( active === 0 ) {
        active = images.length -1;
    } else {
        active--;
    }
    mainImage[active].classList.add('active');
});

carousel.querySelector('.btn-next').addEventListener('click', function() {
    mainImage[active].classList.remove('active');
    if ( active === images.length - 1) {
        active = 0;
    } else {
        active++;
    }
    mainImage[active].classList.add('active'); 
});

carouselContainer.append(carousel);