import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('First group of test', () => {
  test("Jest is working",()=>{
    expect(1).toBe(1);
  })
  
});
describe('App', () => {
  it('should render correctly in "debug" mode', () => {

    const component = shallow(<App debug />);
  
    expect(component).toMatchSnapshot();
  });
});


/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/
