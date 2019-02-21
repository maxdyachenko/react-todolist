import React from 'react';
import {shallow} from 'enzyme';

import App from './index';

import {COMPLETED_FILTER, DEFAULT_FILTER, ACTIVE_FILTER, DEFAULT_VISIBLE_ITEMS} from 'constants/index';

const DEFAULT_STATE = {
  activeFilter: DEFAULT_FILTER,
  numberOfItems: DEFAULT_VISIBLE_ITEMS,
  numberOfVisibleItems: DEFAULT_VISIBLE_ITEMS,
  list: [
    {
      id: 0,
      text: 'test',
      status: ACTIVE_FILTER
    }
  ]
};

describe('<App />', () => {
  it('saves new todo', () => {
    const wrapper = shallow(<App />);

    wrapper.setState(DEFAULT_STATE);

    wrapper.instance().saveNewToDo("test todo 2");

    expect(wrapper.state().list).toEqual([
      ...DEFAULT_STATE.list,
      {
        id: 1,
        text: 'test todo 2',
        status: ACTIVE_FILTER
      },
    ])
  });

  it('removes todo', () => {
    const wrapper = shallow(<App />);

    wrapper.setState(DEFAULT_STATE);

    wrapper.instance().removeTodo(0);

    expect(wrapper.state().list).toEqual([])
  });

  it('changes status of todo', () => {
    const wrapper = shallow(<App />);

    wrapper.setState(DEFAULT_STATE);

    wrapper.instance().changeStatus(0, COMPLETED_FILTER);

    expect(wrapper.state().list).toEqual([
      {
        id: 0,
        text: 'test',
        status: COMPLETED_FILTER
      },
    ])
  });

  it('changes filter and reset number of visible items', () => {
    const wrapper = shallow(<App />);

    wrapper.setState(DEFAULT_STATE);

    wrapper.instance().changeFilter(COMPLETED_FILTER);

    expect(wrapper.state().activeFilter).toBe(COMPLETED_FILTER);
    expect(wrapper.state().numberOfItems).toBe(DEFAULT_VISIBLE_ITEMS);
    expect(wrapper.state().numberOfVisibleItems).toBe(DEFAULT_VISIBLE_ITEMS);
  });

  it('changes number of items', () => {
    const wrapper = shallow(<App />);

    wrapper.setState(DEFAULT_STATE);

    wrapper.instance().changeNumberOfItems("10");

    expect(wrapper.state().numberOfItems).toBe(10);
    expect(wrapper.state().numberOfVisibleItems).toBe(10);
  });

  it('updates number of visible items', () => {
    const wrapper = shallow(<App />);

    wrapper.setState(DEFAULT_STATE);
    
    const sum = wrapper.state().numberOfVisibleItems + wrapper.state().numberOfItems;

    wrapper.instance().showNextItems();

    expect(wrapper.state().numberOfVisibleItems).toBe(sum);
  });
});