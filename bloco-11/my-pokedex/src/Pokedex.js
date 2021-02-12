import React, { Component } from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'

class Pokedex extends Component {
  render() {

    return (
      this.props.pokemons.map((poke) => (
        <Pokemon pokemons={poke}/>
      ))
    )
  }
}

export default Pokedex