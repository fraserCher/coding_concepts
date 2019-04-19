import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import ChessBoard from './ChessBoard';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fetches config data from server when initialised', done => {
    const json = {
      setup: {}
    };
    const response = {
      json: () => Promise.resolve(json)
    };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(response));

    const wrapper = shallow(<App />);

    expect(global.fetch).toHaveBeenCalledWith('/api/game/config?id=1');

    process.nextTick(() => {
      const { isLoaded, boardConfig } = wrapper.state();
      expect(isLoaded).toBe(true);
      expect(boardConfig).toBe(json);
      done();
    });
  });

  it('renders loading message initially', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div className="loading">Loading...</div>)).toBeTruthy();
  });

  it('renders chess board when config data is received', done => {
    const config = {
      "A1": "green"
    };
    const response = {
      json: () => Promise.resolve(config)
    };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve(response));

    const wrapper = shallow(<App />);

    expect(wrapper.containsMatchingElement(<ChessBoard />)).toBeFalsy();

    process.nextTick(() => {
      expect(wrapper.containsMatchingElement(<ChessBoard />)).toBeTruthy();
      expect(wrapper.find('ChessBoard').props().config).toEqual(config);
      done();
    });
  });

});