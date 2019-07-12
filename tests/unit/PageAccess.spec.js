import { shallowMount } from '@vue/test-utils'
import PageAccess from '@/components/PageAccess.vue'
import { accessGrantedMessage, dateNotSetMessage, notOlderThanEighteenMessage } from '@/constants'

/* Change this variable to run the improved test case */
export const USE_IMPROVED_TESTS = process.env.IMPROVED_TEST_SUITE

describe('PageAccess.vue', () => {
  USE_IMPROVED_TESTS ? improvedTestSet() : badTests()
})

function badTests() {
  /* it('BAD TEST: shows access granted message when user is older than 18', () => {
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: new Date(1980, 5, 5)
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(accessGrantedMessage)
  }) */
  it('BAD TEST: shows access denied message when user is not older than 18', () => {
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: new Date()
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(notOlderThanEighteenMessage)
  })
}

function improvedTestSet() {
  it('GOOD TEST: shows error message with unset date', () => {
    const wrapper = shallowMount(PageAccess, {})
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(dateNotSetMessage)
  })
  it('GOOD TEST: shows access granted message when user is older than 18', () => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - 19)
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: date
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(accessGrantedMessage)
  })
  it('GOOD TEST: shows access granted message when user is 18', () => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - 18)
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: date
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(accessGrantedMessage)
  })
  it('GOOD TEST: shows access granted message when user is not older than 18', () => {
    const date = new Date()
    date.setFullYear(date.getFullYear() - 17)
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: date
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(notOlderThanEighteenMessage)
  })
}
