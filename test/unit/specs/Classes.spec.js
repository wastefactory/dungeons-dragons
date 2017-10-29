import Classes from '@/components/Classes'

describe('Classes.vue', () => {
  const defaultData = Classes.data()

  it('has a data hook', () => {
    expect(typeof Classes.data).to.equal('function')
  })

  it('sets the correct default data', () => {
    expect(typeof defaultData.classes).to.equal('object')
  })
})
