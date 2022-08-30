// import data from './data'
console.log(data);
const cards = document.querySelector('.cards');
document.body.append(cards)



console.log(data[0].sprites.other["official-artwork"].front_default)

for (let i = 0; i < data.length; i++ ) {

    
    // create card 

    const card = document.createElement('li')
card.setAttribute('class', 'card')

// create pokemon names using h2 

const pokemonName = document.createElement('h2')
pokemonName.setAttribute('class', 'card--title')
pokemonName.innerText = data[i].name[0].toUpperCase() + data[i].name.slice(1);

// create img from data 

const pokemonImage = document.createElement('img')
pokemonImage.setAttribute('class', 'card--img')
pokemonImage.setAttribute('width', '256')
pokemonImage.src = data[i].sprites.other["official-artwork"].front_default

// create pokemon texts 

const pokemonText = document.createElement('ul')
pokemonText.setAttribute('class', 'card--text')
for (let j = 0; j < 6; j++) {
    const stats = document.createElement('li');
    stats.innerText = data[i].stats[j].stat.name.toUpperCase() +': '+ data[i].stats[j].base_stat;
    pokemonText.append(stats)
}


cards.append(card);
card.append(pokemonName, pokemonImage, pokemonText)
}