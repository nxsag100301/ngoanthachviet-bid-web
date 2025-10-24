const formatter = new Intl.NumberFormat('de-DE')

export const formatPrice = (number) => {
  if (number === null || number === undefined) return '0'
  return formatter.format(number)
}

export const interceptorLoadingElements = (calling) => {
  // DOM lấy ra toàn bộ phần tử trên page hiện tại có className là 'interceptor-loading'
  const elements = document.querySelectorAll('.interceptor-loading')
  for (let i = 0; i < elements.length; i++) {
    if (calling) {
      // Nếu đang trong thời gian chờ gọi API (calling === true) thì sẽ làm mờ phần tử và chặn click bằng css pointer-events
      elements[i].style.opacity = '0.5'
      elements[i].style.pointerEvents = 'none'
    } else {
      // Ngược lại thì trả về như ban đầu, không làm gì cả
      elements[i].style.opacity = 'initial'
      elements[i].style.pointerEvents = 'initial'
    }
  }
}

export const maskPhoneNumber = (phone) => {
  if (!phone) return ''

  // Xóa khoảng trắng hoặc ký tự không phải số
  const cleaned = phone.replace(/\D/g, '')

  // Nếu độ dài < 7 thì không cần ẩn
  if (cleaned.length < 7) return cleaned

  const first = cleaned.slice(0, 3)
  const last = cleaned.slice(-3)
  return `${first}****${last}`
}
