import App from '@/App'

describe('App.vue', () => {
  const defaultData = App.data()

  it('has a created hook', () => {
    expect(typeof App.created).to.equal('function')
  })

  it('has a destroyed hook', () => {
    expect(typeof App.destroyed).to.equal('function')
  })

  it('has a data hook', () => {
    expect(typeof App.data).to.equal('function')
  })

  it('sets the correct default data', () => {
    expect(defaultData.scrolled).to.equal(false)
  })
})
