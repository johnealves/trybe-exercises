import React, { Component } from 'react'
import './poke.css'

class Pokemon extends Component {
  render() {
    const { value, measurementUnit } = this.props.pokemons.averageWeight
    return (
      <div className='pokediv'>
        <div className='pokeinfo'>
          <p>Name: {this.props.pokemons.name}</p> 
          <p>Type: {this.props.pokemons.type}</p>
          <p>Average Weight: {value} {measurementUnit}</p>
        </div>
        <img src={this.props.pokemons.image} ></img>
      </div>
    )
  }
} 

export default Pokemon
