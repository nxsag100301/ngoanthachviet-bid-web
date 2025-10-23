import React from 'react'

const data = [
  { label: 'Mã phiên', value: 'npk0123456' },
  { label: 'Người chủ trì', value: 'Nguyễn Văn A' },
  {
    label: 'Địa chỉ',
    value: 'D2 Đường 5B Him Lam P. Tân Hưng, Quận 7, TP. Hồ Chí Minh'
  },
  { label: 'Thời gian mở phiên', value: '15:00 | 20/05/2024' },
  { label: 'Thời gian đóng phiên', value: '16:00 | 20/05/2024' },
  { label: 'Bước giá', value: '500.000 VND' },
  { label: 'Số bước giá tối đa', value: 'Không giới hạn' },
  { label: 'Phương thức đấu giá', value: 'Đấu giá lên và liên tục' }
]

const SessionInformation = () => {
  return (
    <div className='space-y-0 sm:space-y-3'>
      {data.map((item) => (
        <div key={item.label}>
          <div className='text-[12px] sm:text-[16px] leading-7 text-text-400 text-justify'>
            {item.label}:{' '}
            <span className='text-[12px] sm:text-[16px] leading-7 text-black font-medium '>
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SessionInformation
