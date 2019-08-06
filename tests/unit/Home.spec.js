import { shallowMount } from '@vue/test-utils'
import Home from '@/components//Home'

describe('Home', () => {
  it('renders the welcome message', () => {
    const msg = 'Welcome to my Calendar This is an example of a Calendar in VueJs. Using Vuex, Buefy, Puppeteer You can move between months Create, Edit, Delete events In the header you can go to Calendar. I hope you enjoy it!.'
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch(msg)
  })
})
