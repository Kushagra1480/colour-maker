import React, { Component } from 'react'
import Palette from "./Palette"
import seedColors from "./seedColors"
import {generatePalette} from "./colorHelpers"

class App extends Component {
  render() {
    return (
      <div>
        {console.log(generatePalette(seedColors[4]))}
      </div>
    )
  }
}
export default App;
/*<Palette palette = {generatePalette(seedColors[4])}/>*/ 