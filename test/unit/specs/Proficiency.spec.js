import Vue from 'vue'
import Proficiency from '@/components/Tabs/Proficiency'

describe('Proficiency.vue', () => {
  it('has a prop', () => {
    expect(Proficiency.props.length).to.equal(1)
  })

  it('has proficiencies prop', () => {
    expect(Proficiency.props[0]).to.equal('proficiencies')
  })

  it('should have a title', () => {
    const Constructor = Vue.extend(Proficiency)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title h4').textContent)
      .to.equal('Skill Proficiencies')
  })
})
