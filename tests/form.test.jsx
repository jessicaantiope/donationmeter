import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure} from 'enzyme'
import Form from '../client/components/Form'
configure({ adapter: new Adapter() })

test('Check name input is name', () => {
  const form = shallow(<Form />)

  expect(form.find('input[name]=name').length).toEqual(1)
})

test('Check donation input is donation', () => {
  const form = shallow(<Form />)

  expect(form.find('input[donation]=donation').length).toEqual(1)
})