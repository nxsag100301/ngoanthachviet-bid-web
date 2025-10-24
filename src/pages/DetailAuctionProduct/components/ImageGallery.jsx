import { useRef, useState, useEffect } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { IMAGE_URL } from '@/utils/constants'

const ImageGallery = ({ listImage }) => {
  const [mainImage, setMainImage] = useState()
  const scrollAreaRef = useRef(null)
  const [viewportEl, setViewportEl] = useState(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  useEffect(() => {
    if (listImage) {
      setMainImage(listImage?.[0])
    }
  }, [listImage])

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]'
      )
      setViewportEl(viewport)

      const checkScroll = () => {
        if (!viewport) return
        const { scrollLeft, scrollWidth, clientWidth } = viewport
        setShowLeft(scrollLeft > 0)
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1) // -1 tránh sai số
      }

      // Delay để DOM render xong
      const raf = requestAnimationFrame(checkScroll)

      viewport.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)

      return () => {
        cancelAnimationFrame(raf)
        viewport.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const handleSelectImage = (image) => {
    setMainImage(image)
  }

  const scroll = (direction) => {
    if (!viewportEl) return
    const scrollAmount = 200
    viewportEl.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {/* Ảnh lớn */}
      <img
        src={IMAGE_URL + mainImage}
        className='rounded-[12px] mb-3 sm:mb-6 h-[300px] sm:h-[483px] w-full md:h-[320px] lg:h-[420px] xl:h-[483px] object-cover mx-auto'
      />

      {/* Scrollable area with buttons */}
      <div className='relative'>
        {/* Nút trái */}
        {showLeft && (
          <button
            onClick={() => scroll('left')}
            className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary-50 hover:bg-primary-600 hover:text-white text-primary-700 p-2 rounded-full shadow'
          >
            <IoChevronBack className='w-3 h-3 md:w-5 md:h-5' />
          </button>
        )}

        {/* Scroll Area */}
        <ScrollArea ref={scrollAreaRef} className='w-full overflow-hidden'>
          <div className='flex gap-3 sm:gap-6 pb-2 w-full'>
            {listImage?.map((img, index) => (
              <img
                key={index}
                src={IMAGE_URL + img}
                onClick={() => handleSelectImage(img)}
                className='rounded-[12px] cursor-pointer object-cover h-[105px] w-[120px] sm:w-[182px] md:w-[120px] lg:w-1/3 xl:w-[30.7%] sm:h-[193px] md:h-[120px] xl:h-[173px] flex-shrink-0'
              />
            ))}
          </div>
          <ScrollBar orientation='horizontal' className='hidden' />
        </ScrollArea>

        {/* Nút phải */}
        {showRight && (
          <button
            onClick={() => scroll('right')}
            className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary-50 hover:bg-primary-600 hover:text-white text-primary-600 p-2 rounded-full shadow'
          >
            <IoChevronForward className='w-3 h-3 md:w-5 md:h-5' />
          </button>
        )}
      </div>
    </div>
  )
}

export default ImageGallery
