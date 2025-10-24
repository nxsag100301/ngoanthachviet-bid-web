import React from 'react'
import Icon from './icons/IconSVG'

const Pagination = ({ page, setPage, totalPages }) => {
  const getVisiblePages = (page, total) => {
    const pages = []

    // Xử lý trường hợp total <= 0
    if (total <= 0) return pages

    if (total <= 6) {
      for (let i = 1; i <= total; i++) pages.push(i)
    } else {
      // Luôn hiện trang đầu
      pages.push(1)

      // Nếu page cách trang đầu > 2 thì hiện dấu ...
      if (page > 3) pages.push('...')

      // Tính start và end để hiện các trang xung quanh page hiện tại
      const start = Math.max(2, page - 1)
      const end = Math.min(total - 1, page + 1)

      for (let i = start; i <= end; i++) {
        // Tránh duplicate với trang đầu và trang cuối
        if (i !== 1 && i !== total) {
          pages.push(i)
        }
      }

      // Nếu page cách trang cuối > 2 thì hiện dấu ...
      if (page < total - 2) pages.push('...')

      // Luôn hiện trang cuối
      pages.push(total)
    }
    return pages
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const visiblePages = getVisiblePages(page, totalPages)

  return (
    <div className='flex flex-row items-center gap-2 justify-center mt-6'>
      {/* Prev */}
      <div
        onClick={handlePrev}
        className={`w-[42px] h-[42px] rounded-full cursor-pointer border border-primary-700
          flex justify-center items-center ${
            page === 1 ? 'opacity-40 pointer-events-none' : ''
          }`}
      >
        <Icon name='prevPagination' width={12} height={10} />
      </div>

      {/* Page Numbers */}
      {visiblePages.map((item, idx) =>
        item === '...' ? (
          <div
            key={`dots-${idx}`}
            className='w-[42px] h-[42px] flex justify-center items-center text-gray-500'
          >
            ...
          </div>
        ) : (
          <div
            key={item}
            onClick={() => setPage(item)}
            className={`cursor-pointer rounded-full w-[42px] h-[42px]
              flex justify-center items-center 
              ${
                page === item
                  ? 'bg-primary-700 text-white border border-primary-700'
                  : 'hover:bg-primary-100 '
              }`}
          >
            {item}
          </div>
        )
      )}

      {/* Next */}
      <div
        onClick={handleNext}
        className={`w-[42px] h-[42px] rounded-full cursor-pointer border border-primary-700
          flex justify-center items-center ${
            page === totalPages ? 'opacity-40 pointer-events-none' : ''
          }`}
      >
        <Icon name='nextPagination' width={12} height={10} />
      </div>
    </div>
  )
}

export default Pagination
