import { shallowMount } from '@vue/test-utils'
import PageAccess from '@/components/PageAccess.vue'
import { dateNotSetMessage } from '@/constants'

describe('PageAccess.vue', () => {
  it('shows error message with unset date', () => {
    const wrapper = shallowMount(PageAccess, {})
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.$data.msg).toBe(dateNotSetMessage)
  })
})
