export function isTransferPossible (amount, card) {
  return amount <= card.amount
}
