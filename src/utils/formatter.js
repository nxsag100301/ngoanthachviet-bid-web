const formatter = new Intl.NumberFormat('de-DE')

export const formatPrice = (number) => {
  if (number === null || number === undefined) return '0'
  return formatter.format(number)
}
