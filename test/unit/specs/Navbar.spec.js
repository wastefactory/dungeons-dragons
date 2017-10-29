import Vue from 'vue'
import Navbar from '@/components/Navbar'

describe('Navbar.vue', () => {
  it('has a prop', () => {
    expect(Navbar.props.length).to.equal(1)
  })

  it('has a status prop', () => {
    expect(Navbar.props[0]).to.equal('status')
  })

  it('should render logo', () => {
    const Constructor = Vue.extend(Navbar)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.navbar .logo').textContent)
      .to.equal('DUNGEONS&DRAGONS')
  })
})
