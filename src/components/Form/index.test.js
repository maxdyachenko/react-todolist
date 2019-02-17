import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './index';
Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('it change state on user input', () => {
    const wrapper = shallow(<Form />);
    const event = {target: {value: 'new input'}};

    wrapper.instance().handleInputChange(event);

    expect(wrapper.state().input).toBe('new input');
  });
});