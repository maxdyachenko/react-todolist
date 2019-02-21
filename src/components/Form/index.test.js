import React from 'react';
import {shallow} from 'enzyme';

import Form from './index';

describe('<Form />', () => {
  it('it change state on user input', () => {
    const wrapper = shallow(<Form />);
    const event = {target: {value: 'new input'}};

    wrapper.instance().handleInputChange(event);

    expect(wrapper.state().input).toBe('new input');
  });
});