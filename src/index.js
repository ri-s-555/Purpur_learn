console.log("Hello, Webpack!");

import './style.css';
//import '../css/style.css' 

import {creatCard} from '/card.js' 


const card = [
    {
        color: "card-color_mint", 
        price: 0, 
        name: '' ,
        review: 0
    },
    {
        color: "card-color_blu", 
        price: 0, 
        name: '' ,
        review: 0
    },
    {
        color: "card-color_purpure", 
        price: 0, 
        name: '' ,
        review: 0
    },
    {
        color: "card-color_blu-2", 
        price: 0, 
        name: '' ,
        review: 0
    },
    {
        color: "card-color_blu-3", 
        price: 0, 
        name: '' ,
        review: 0
    },
    {
        color: "card-color_blu-4", 
        price: 0, 
        name: '' ,
        review: 0
    },
    {
        color: "card-color_blu-5", 
        price: 0, 
        name: '' ,
        review: 0
    }
]
//cards. forEach()


//const elem = creatCard ("card-color_blu" )

let cardsArray = []
console. log (cardsArray)


cards.forEach(item=>{
    cardsArray.push (creatCard (item))
})

 const cardsWrapper = document.querySelector(".sellers-product_cards-wrapper")
 console. log (cardsWrapper)


 cardsArray.forEach (item=>{
//   cardsWrapper.innerHTML += item
//   cardsWrapper. insertAdjacentHM("afterbegin", item)
    cardsWrapper. appendChild (item)
 })

