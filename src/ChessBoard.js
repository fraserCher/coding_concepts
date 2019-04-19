import React, { Component } from 'react';
import AlphabeticIndex from './AlphabeticIndex'
import TableComponent from './TableComponent';

class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.width = 8;
        this.height = 8;
    }
    
    render() {
        return <TableComponent data = {this.generateTable()} id={this.props.id} />;        
    }
  
    generateTable() {
      var tableData = {
        columns: this.generateHeaders(),
        rows: [
          [ "1", "" , "", "", "", "", "", "", "" ],
          [ "2", "" , "", "", "", "", "", "", "" ],
          [ "3", "" , "", "", "", "", "", "", "" ],
          [ "4", "" , "", "", "", "", "", "", "" ],
          [ "5", "" , "", "", "", "", "", "", "" ],
          [ "6", "" , "", "", "", "", "", "", "" ],
          [ "7", "" , "", "", "", "", "", "", "" ],
          [ "8", "" , "", "", "", "", "", "", "" ],
          [ "9", "" , "", "", "", "", "", "", "" ]
        ]
      };

      let alphabeticIndex = new AlphabeticIndex();
      Object.keys(this.props.config.setup).forEach(coord => {          
        var col = alphabeticIndex.getCharIndex(coord[0]);
        var row = +coord[1];
        tableData.rows[row - 1][col + 1] = <span style={{color: this.props.config.setup[coord]}}>&#9679;</span>;
      });
  
      return tableData;
    }

    generateHeaders() {
        let alphabeticIndex = new AlphabeticIndex();
        return [" "].concat(alphabeticIndex.getIndexArray(this.width));
    }
}

export default ChessBoard;
