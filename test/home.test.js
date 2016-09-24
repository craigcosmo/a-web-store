import React from 'react'
import chai, {expect} from 'chai'
import {shallow} from 'enzyme'


import Home from 'Home';

describe('home page', () => {
	const wrapper = shallow(<Home />)
	it('should have ', () => {
		
		const actual = wrapper.find('.grid')
		const val = actual ? true : false
		expect(val).to.equal(true)
	})
})


