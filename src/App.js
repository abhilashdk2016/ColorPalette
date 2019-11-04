import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorePalette from './components/SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends React.Component {

  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={routeProps => <PaletteList palettes={seedColors} {...routeProps}/>}/>
        <Route exact path="/palette/:id" 
          render={routeProps => 
              <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route path="/palette/:paletteId/:colorId" render={routeProps => 
          <SingleColorePalette 
            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            colorId={routeProps.match.params.colorId} /> } />
      </Switch>
    );
  }
}

export default App;
