import React from 'react';
import {shallow} from 'enzyme';

import ListItem from './index';
import {ACTIVE_FILTER, COMPLETED_FILTER, DEFAULT_FILTER} from 'constants/index';

describe('<ListItem />', () => {
  it('change text to active if todo is completed', () => {
    const wrapper = shallow(<ListItem status={COMPLETED_FILTER} />);

    expect(wrapper.find('.status-change-button').text()).toBe('Mark as active');
  })

  it('change text to completed if todo is active', () => {
    const wrapper = shallow(<ListItem status={ACTIVE_FILTER} />);

    expect(wrapper.find('.status-change-button').text()).toBe('Mark as completed');
  })

  it('change text to completed if todo is active(default filter)', () => {
    const wrapper = shallow(<ListItem status={DEFAULT_FILTER} />);

    expect(wrapper.find('.status-change-button').text()).toBe('Mark as completed');
  })
});