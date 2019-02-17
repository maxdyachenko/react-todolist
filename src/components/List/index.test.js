import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './index';
import ListItem from 'components/List/components/ListItem';


import {COMPLETED_FILTER, DEFAULT_FILTER, ACTIVE_FILTER} from 'constants/index';

Enzyme.configure({ adapter: new Adapter() });

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
  it('return correact count of list items', () => {
    const wrapper = shallow(<List list={list} activeFilter={DEFAULT_FILTER} />);
    expect(wrapper.instance().getTotalCountOfList()).toBe(3);
  })

  it('return list of components with correct status', () => {
    const wrapper = shallow(<List list={list} activeFilter={DEFAULT_FILTER}  removeTodo={() => null} changeStatus={() => null} />);

    expect(wrapper.find(ListItem).length).toBe(1);
  });
});