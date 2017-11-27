import React from 'react';
import 'babel-polyfill';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../app/views/App.jsx';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('<App /> Component', () => {

  it('should appear once and have a div node type', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
    expect(wrapper.node.type).to.equal('div');
  });

  it("should contains table tag", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.node.props.children[0].type).to.equal('h1');
    expect(wrapper.node.props.children[1].type).to.equal('table');
  });
});
