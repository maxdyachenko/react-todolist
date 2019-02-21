import React from 'react';
import {shallow, mount} from 'enzyme';

import Footer from './index';

import {COMPLETED_FILTER, DEFAULT_FILTER, ACTIVE_FILTER} from 'constants/index';


describe('<Footer />', () => {
  it('it has 3 buttons', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('.button').length).toBe(3);
  });

  it('update className on prop change COMPLETED', () => {
    const wrapper = shallow(<Footer activeFilter={COMPLETED_FILTER} />);
    const buttons = wrapper.find('button');

    expect(buttons.find('.active').length).toBe(1);
  })

  it('update className on prop change ACTIVE', () => {
    const wrapper = shallow(<Footer activeFilter={ACTIVE_FILTER} />);
    const buttons = wrapper.find('button');

    expect(buttons.find('.active').length).toBe(1);
  })

  it('update className on prop change ALL', () => {
    const wrapper = shallow(<Footer activeFilter={DEFAULT_FILTER} />);
    const buttons = wrapper.find('button');

    expect(buttons.find('.active').length).toBe(1);
  })
});