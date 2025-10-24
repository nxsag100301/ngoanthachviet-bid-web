import React from 'react'
import Icon from './icons/IconSVG'

const data = [
  { label: 'Danh sách phiên đấu giá', uri: '/' },
  { label: 'Chi tiết sản phẩm', uri: '/a' }
]

const BreadCrumb = () => {
  return (
    <div className='flex flex-row gap-2 items-center'>
      {data.map((item, index) => (
        <div key={item.uri}>
          <div>{item.label}</div>
          {index !== data.length - 1 && (
            <Icon name='triangleRight' width={16} height={16} />
          )}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumb
