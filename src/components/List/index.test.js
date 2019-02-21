import React from 'react';
import {shallow} from 'enzyme';

import List from './index';
import ListItem from './components/ListItem';

import {COMPLETED_FILTER, DEFAULT_FILTER, ACTIVE_FILTER, DEFAULT_VISIBLE_ITEMS} from 'constants/index';

const list = [
  {
    id: 0,
    text: 'test 1',
    status: ACTIVE_FILTER
  },
  {
    id: 1,
    text: 'test 2',
    status: COMPLETED_FILTER
  },
  {
    id: 2,
    text: 'test 3',
    status: DEFAULT_FILTER
  },
];

describe('<List />', () => {
  it('return correct number of total todos', () => {
    const wrapper = shallow(<List list={list} activeFilter={DEFAULT_FILTER} />);

    expect(wrapper.instance().getTotalCountOfList()).toBe(3);
  })

  it('return correct amount of <List> components with DEFAULT_FILTER', () => {
    const wrapper = shallow(<List list={list} activeFilter={DEFAULT_FILTER} numberOfVisibleItems={DEFAULT_VISIBLE_ITEMS} />);

    expect(wrapper.find(ListItem).length).toBe(3);
  });

  it('return correct amount of <List> components with ACTIVE_FILTER', () => {
    const wrapper = shallow(<List list={list} activeFilter={ACTIVE_FILTER} numberOfVisibleItems={DEFAULT_VISIBLE_ITEMS} />);

    expect(wrapper.find(ListItem).length).toBe(1);
  });

  it('return correct amount of <List> components with COMPLETED_FILTER', () => {
    const wrapper = shallow(<List list={list} activeFilter={COMPLETED_FILTER} numberOfVisibleItems={DEFAULT_VISIBLE_ITEMS} />);

    expect(wrapper.find(ListItem).length).toBe(1);
  });

  it('dont renders button to show next todos as they are not available ', () => {
    const wrapper = shallow(<List list={list} activeFilter={COMPLETED_FILTER} numberOfVisibleItems={DEFAULT_VISIBLE_ITEMS} />);

    expect(wrapper.find('.list-footer').find('button').length).toBe(0);
  });

  it('renders button to show next todos as they are available ', () => {
    const wrapper = shallow(<List list={list} activeFilter={DEFAULT_FILTER} numberOfVisibleItems={2} />);

    expect(wrapper.find('.list-footer').find('button').length).toBe(1);
  });
});