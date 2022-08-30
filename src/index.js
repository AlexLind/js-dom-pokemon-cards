// import data from './data'
console.log(data);
const cards = document.querySelector('.cards');
document.body.append(cards)



console.log(data[0].sprites.other["official-artwork"].front_default)

// create card 

const card = document.createElement('li')
card.setAttribute('class', 'card')

// create pokemon names using h2 

const pokemonName = document.createElement('h2')
pokemonName.setAttribute('class', 'card_title')
pokemonName.innerText = data[0].name[0].toUpperCase() + data[0].name.slice(1);

// create img from data 

const pokemonImage = document.createElement('img')
pokemonImage.setAttribute('class', 'card_image')
pokemonImage.setAttribute('width', '256')
pokemonImage.src = data[0].sprites.other["official-artwork"].front_default

// create pokemon texts 

const pokemonText = document.createElement('ul')
pokemonText.setAttribute('class', 'card_text')
for (let i = 0; j < 6)

cards.append(card);
card.append(pokemonName, pokemonImage)