import { shallowMount } from '@vue/test-utils'
import PageAccess from '@/components/PageAccess.vue'
import { dateNotSetMessage } from '@/constants'
import { accessGrantedMessage, notOlderThanEighteenMessage } from '../../src/constants'

describe('PageAccess.vue', () => {
  it('shows error message with unset date', () => {
    const wrapper = shallowMount(PageAccess, {})
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(dateNotSetMessage)
  })
  it('shows access granted message when user is older than 18', () => {
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: new Date(1980, 5, 5)
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(accessGrantedMessage)
  })
  it('shows access denied message when user is not older than 18', () => {
    const wrapper = shallowMount(PageAccess, {
      propsData: {
        date: new Date()
      }
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(notOlderThanEighteenMessage)
  })
})
