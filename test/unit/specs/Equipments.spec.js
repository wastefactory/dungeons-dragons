import Equipments from '@/components/Tabs/Equipments'

describe('Equipments.vue', () => {
  it('has a prop', () => {
    expect(Equipments.props.length).to.equal(2)
  })

  it('has equipments prop', () => {
    expect(Equipments.props[0]).to.equal('equipments')
  })

  it('has choices prop', () => {
    expect(Equipments.props[1]).to.equal('choices')
  })
})
