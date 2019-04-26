import React, { Component } from 'react';
import left_arrow from './images/left_arrow.svg';

class DirectionControls extends Component{

    forwardClick(e){
      //instance of Character.js injected as property during instantiation
      var character = this.props.characterRef.current;
      character.moveForward();
      debugger;
    }

    render(){
        return(
            <div id="directionControls" class="columnLayout">
              <div class="rowLayout">
                <img src={left_arrow} class="arrow backArrow"/>
                <div class="columnLayout">
                  <img src={left_arrow} class="arrow"/>
                  <img src={left_arrow} class="arrow forwardArrow" onClick={(e) => this.forwardClick(e)} />
                  <img src={left_arrow} class="arrow rightArrow" />
                </div>
              </div>
            </div>
        )
    }
}

export default DirectionControls;