import React, {Component} from 'react';
import AlphabeticIndex from './AlphabeticIndex'
import TableComponent from './TableComponent';

class ChessBoard extends Component{
    constructor(props){
        super(props);
        this.width = 8;
        this.height = 8;
    }
    
    render(){
        return(
            <TableComponent data = {this.generateTable()} id={this.props.id} />
        );
        
    }
  
    generateTable(){
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
      }
  
      return tableData;
    }

    generateHeaders(){
        let alphabeticIndex = new AlphabeticIndex();
        return [" "].concat(alphabeticIndex.getIndexArray(this.width) );
    }
}

export default ChessBoard;