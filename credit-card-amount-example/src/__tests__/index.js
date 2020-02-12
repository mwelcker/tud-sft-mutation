import { isTransferPossible } from '../index'

describe('isTransferPossible', () => {
  it('returns true when card has sufficient funds', () => {
    const card = { owner: 'Jeff Bezos', amount: 112000000000 }
    expect(isTransferPossible(15, card)).toBeTruthy()
  })
  it('returns false when card has not sufficient funds', () => {
    const card = { owner: 'Diogenes', amount: 5 }
    expect(isTransferPossible(15, card)).toBeFalsy()
  })

  addExtraTestIfSet()
})

function addExtraTestIfSet () {
  const shouldAdd = process.env.WITH_NEW_TEST
  if (!shouldAdd) {
    return
  }

  it('return true when credit card has exact amount', () => {
    const card = { owner: 'Me', amount: 15 }
    expect(isTransferPossible(15, card)).toBeTruthy()
  })
}
