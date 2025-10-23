import React from 'react'

const data = [
  { label: 'Tên sản phẩm', value: 'Đá cảnh' },
  { label: 'Mã sản phẩm', value: 'DCSSK032' },
  { label: 'Giá khởi điểm', value: '3.000.000 VND' },
  { label: 'Bước giá', value: '500.000 VND' },
  {
    label: 'Mô tả',
    value:
      'Là một khối đá tự nhiên 100%, từ dòng đá Canxit Sông Mã, Sơn La. Nó có hình dáng của một dãy núi hùng vĩ. Trên trên núi có cáo hố như những chiếc hồ trên núi, dọc theo sườn núi, có các vân đá màu trắng tựa như nước của những dòng suối đang chảy xuống thung lũng bên dưới. Nhìn tổng thể thì viên đá như một khung cảnh thu nhỏ của những ngọn núi cao thấp trùng điệp, có hồ, có suối và thung lũng.'
  },
  { label: 'Thông số', value: 'Ngang 16cm, Cao 21cm, Sâu 7cm' },
  { label: 'Xuất xứ', value: 'Việt Nam' }
]

const ProductInformation = () => {
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
      <div>
        <div className='text-[12px] sm:text-[16px] leading-7 text-text-400'>
          Lịch sử:{' '}
          <div className='flex flex-row items-center gap-2'>
            <p className='text-[12px] sm:text-[16px] leading-7 text-black font-medium'>
              2021
            </p>
            <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] rounded-full bg-primary-600' />
            <p className='text-[12px] sm:text-[16px] leading-7 text-text-400'>
              Được chuyển giao
            </p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-[12px] sm:text-[16px] leading-7 text-black font-medium'>
              2020
            </p>
            <div className='w-2 h-2 sm:w-[10px] sm:h-[10px] rounded-full bg-primary-600' />
            <p className='text-[12px] sm:text-[16px] leading-7 text-text-400'>
              Được khai quật bởi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInformation
