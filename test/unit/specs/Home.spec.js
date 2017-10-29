import Home from '@/components/Home'

describe('Home.vue', () => {
  const defaultData = Home.data()

  it('has a data hook', () => {
    expect(typeof Home.data).to.equal('function')
  })

  it('sets the correct default data', () => {
    expect(defaultData.title).to.equal('YOUR ADVENTURE AWAITS')
    expect(defaultData.description).to.equal(`Play Dungeons & Dragons online, at your local game store, or in your living room—it's your story.`)
  })
})
