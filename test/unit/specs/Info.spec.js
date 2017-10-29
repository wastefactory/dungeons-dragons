import Info from '@/components/Info'

describe('Info.vue', () => {
  it('has a prop', () => {
    expect(Info.props.length).to.equal(2)
  })

  it('has title prop', () => {
    expect(Info.props[0]).to.equal('title')
  })

  it('has data prop', () => {
    expect(Info.props[1]).to.equal('data')
  })
})
