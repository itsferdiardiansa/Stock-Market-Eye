export const formatNumber = (num: string) =>
  num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}
