import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Pokemon from './Pokemon';

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  handleLoad = async () => {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url);
    const json = await response.json();
    const pattern = '/([0-9]+)/';
    const pokemon = json.results.map(item => {
      let match = item.url.match(pattern);
      let id = match[1];
      return { name: item.name, id: id };
    });
    console.log(pokemon);
    this.setState({
      pokemon: [...pokemon]
    });
    return pokemon;
  };

  componentDidMount() {
    this.handleLoad();
  }

  render() {
    const container = this.state.pokemon.map(item => {
      return <Pokemon key={item.id.toString()} id={item.id} name={item.name} />;
    });
    return (
      <Grid container justify="flex-start" spacing={3}>
        {container}
      </Grid>
    );
  }
}

export default PokeList;
