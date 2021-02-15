import React, { Component } from 'react'
import './App.css';
import pokemons from './data'
import Pokedex from './Pokedex'
import OnePokemon from './OnePokemon'
import Pokemon from './Pokemon';

class App extends Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.typeGrass = this.typeGrass.bind(this);
    this.typeFire = this.typeFire.bind(this);
    this.typeWater = this.typeWater.bind(this);
    this.state = {
      filtro: '',
      arrayPosition: 0
    }
  }
  
  
  handleChange(event) {
    this.setState({ filtro: event.target.value })
  }

  typeGrass() {
    this.setState({ filtro: 'Grass' })
    this.setState({ arrayPosition: 0 })
  }

  typeFire() {
    this.setState({ filtro: 'Fire' })
    this.setState({ arrayPosition: 0 })
  }

  typeWater() {
    this.setState({ filtro: 'Water' })
    this.setState({ arrayPosition: 0 })
  }


  nextPokemon() {
    const max = pokemons.filter((pokemon) => pokemon.type.includes(this.state.filtro)).length
    if (this.state.arrayPosition === (max - 1)) {
      this.setState({ arrayPosition: 0 })
    } else {
      this.setState((estado, _props) => ({
        arrayPosition: estado.arrayPosition + 1
      }))
    }
  }

  render() {
    const { filtro, arrayPosition } = this.state
    return (
      <div className="App">
        <header>
          <h1>Pokedex</h1>
        </header>
        <input type="text" placeholder='digite o pokemon' onChange={this.handleChange}/>
        <div className="buttonList">
          <button onClick={this.typeGrass}>Grass</button>
          <button onClick={this.typeFire}>Fire</button>
          <button onClick={this.typeWater}>Water</button>
          <button>Normal</button>
          <button>Bug</button>
          <button>Flying</button>
          <button>Psichic</button>
          <button>Ghost</button>
          <button>Dragon</button>
          <button>Fighting</button>
          <button>Poison</button>
          <button>Fairy</button>
          <button>Groung</button>
          <button>Ice</button>
        </div>
        <ul className="pokeSec">
          {pokemons
          .filter((pokemon) => pokemon.type.includes(filtro))
          .map((pokemon) => <Pokemon pokemons={ pokemon } key={ pokemon.id }/>)[arrayPosition]}
        </ul>
        <button className="btn-next" onClick={ this.nextPokemon }>Proximo pokemon</button>
        <ul className="pokeSec">
          {pokemons
          .filter((pokemon) => pokemon.type.includes(filtro))
          .map((pokemon) => <Pokemon pokemons={ pokemon } key={ pokemon.id }/>)}
        </ul>
        {/* <section className='pokeSec'>
          <Pokedex pokemons={ pokemons }/>
        </section> */}
      </div>
    );
  }
}

export default App;
