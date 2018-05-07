import React from 'react'
import { shallow } from 'enzyme'
// Note, we use name import to import the non connected version of the component for testing
import { Account } from '../../components/Account'

describe('Account Component', () => {

  describe('if an account is set', () => {
    const account = {
      address: '0xdeadbeef',
      balance: '1000',
    }
    const setAccount = jest.fn()
    const wrapper = shallow(<Account account={account} setAccount={setAccount} />)

    it('shows the current account\'s public key', () => {
      expect(wrapper.find('input').props().defaultValue).toEqual('0xdeadbeef')
    })

    it('shows the current account\'s balance', () => {
      expect(wrapper.find('span').first().text()).toEqual('1000')
    })

    it('shows a button to logout', () => {
      const button = wrapper.find('button')
      expect(button.text()).toEqual('Sign out')
      button.simulate('click')
      expect(setAccount).toBeCalledWith(null)
    })
  })

  describe('if no account is set', () => {
    it('shows a en empty span', () => {
      const wrapper = shallow(<Account />)
      expect(wrapper.html()).toEqual('<span></span>')
    })
  })

})