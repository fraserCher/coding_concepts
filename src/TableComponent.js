import React, { Component } from 'react';

class TableComponent extends Component {
    render() {
      // Data
      var dataColumns = this.props.data.columns;
      var dataRows = this.props.data.rows;
  
      var tableHeaders = (
          <tr>
            {dataColumns.map(this.renderHeaderField)}
          </tr>
        );

      var tableBody = dataRows.map(row => {
          return (
            <tr>
              {
                row.map(fieldValue => {
                  return this.renderField(fieldValue);
                })
              }
            </tr>); 
        });
       
      // Decorate with Bootstrap CSS
      return (
        <table id={this.props.id}>
          <thead>
            {tableHeaders}
          </thead>
          <tbody>
            {tableBody}
          </tbody>  
        </table>
      );
    }

    renderHeaderField(fieldValue) {
      return <th>{fieldValue}</th>;
    }

    renderField(fieldValue) {
      return <td>{fieldValue}</td>;
    }
          
  };

  export default TableComponent;
