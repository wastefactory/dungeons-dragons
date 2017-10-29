import Vue from 'vue'
import Choices from '@/components/Tabs/Choices'

describe('Choices.vue', () => {
  it('has a prop', () => {
    expect(Choices.props.length).to.equal(1)
  })

  it('has choices prop', () => {
    expect(Choices.props[0]).to.equal('choices')
  })

  it('should have a title', () => {
    const Constructor = Vue.extend(Choices)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title h4').textContent)
      .to.equal('Skill Proficiency Choices')
  })
})
