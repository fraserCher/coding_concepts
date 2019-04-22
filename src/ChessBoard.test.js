import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ChessBoard from './ChessBoard';
import TableComponent from './TableComponent';

describe('App', () => {

    it('renders without crashing', () => {
        const boardConfig = { setup: [] };
        const div = document.createElement('div');
        ReactDOM.render(<ChessBoard config={boardConfig} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders expected data in table', () => {
        const config = {
            setup: {
                C3: "blue"
            }
        };
        const wrapper = shallow(<ChessBoard config={config} />);
    
        expect(wrapper.containsMatchingElement(<TableComponent />)).toBeTruthy();
        expect(wrapper.find('TableComponent').prop('data').columns).toEqual([" ", "A", "B", "C", "D", "E", "F", "G", "H"]);
        expect(wrapper.find('TableComponent').prop('data').rows).toContainEqual(["1", "", "", "", "", "", "", "", ""]);
        expect(wrapper.find('TableComponent').prop('data').rows).toContainEqual(["2", "", "", "", "", "", "", "", ""]);
        expect(wrapper.find('TableComponent').props().data.rows[2][3]).toEqual(<span style={{color: "blue"}}>&#9679;</span>);
    });
  
});
