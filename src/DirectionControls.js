import React, { Component } from 'react';
import left_arrow from './images/left_arrow.svg';

class DirectionControls extends Component{

    directionClick(e){
      //instance of Character.js
      var character = this.props.characterRef.current;
      debugger;
    }

    render(){
        return(
            <div id="directionControls" class="columnLayout">
              <div class="rowLayout">
                <img src={left_arrow} class="arrow backArrow"/>
                <div class="columnLayout">
                  <img src={left_arrow} class="arrow"/>
                  <img src={left_arrow} class="arrow forwardArrow" onClick={(e) => this.directionClick(e)} />
                  <img src={left_arrow} class="arrow rightArrow" />
                </div>
              </div>
            </div>
        )
    }
}

export default DirectionControls;