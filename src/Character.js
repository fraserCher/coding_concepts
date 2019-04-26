import React, { Component } from 'react';
import character from './images/character.svg';
import { relative } from 'path';

class Character extends Component{

    constructor(props) {
        super(props);
        this.state = {
          position: {
              x: 1,
              y: 1
          },
          positionOffset:{
              top: -459,
              left: -153
          }
        };
    }
    
    moveForward(){
        this.state.position.y++;
        this.state.positionOffset.top += 51;
        this.setState(this.state);
    }

    moveBack(){
        this.state.position.y--;
    }

    moveLeft(){
        this.state.position.x--;
    }

    moveRight(){
        this.state.position.x++;
    }



    render(){
        var style = {
            margin: "0",
            position: "relative",
            left: this.state.positionOffset.left.toString().concat("px"),
            top: this.state.positionOffset.top.toString().concat("px")
        };

        return(
            <img src={character} alt="character" width="50px" id="character" style={style} />
        );
    }
}

export default Character;