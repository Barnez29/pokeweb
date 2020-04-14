'use strict';


// const url = 'https://pokeapi.co/api/v2/pokemon/1';
// const uri = 'https://pokeapi.co/api/v2/pokemon/id';


// code refactored to allow for better loading of API data
// 

const pokedex = document.getElementById('pokedex');

console.log(pokedex);

const fetchPokemon = () => {

    const promises = [];

    for (let i = 1; i < 10; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
        }));
        displayPokemon(pokemon);
    }));
};


// create function to display pokemon
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const html = pokemonHTMLString = pokemon.map((pokem) =>
        <
        li >
        <
        img src = "${pokem.image}" / >
        <
        h2 > $ { pokem.id }.$ { pokem.name } < /h2> < /
        li > ));
pokedex.innerHTML = html;
}



fetchPokemon();