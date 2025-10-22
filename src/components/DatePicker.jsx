import * as React from 'react'
import moment from 'moment'
import 'moment/locale/vi'
import { vi } from 'date-fns/locale'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import icons from '@/constants/icons'

// Set locale và capitalize tên tháng
function formatDate(date) {
  if (!date) {
    return ''
  }
  const formatted = moment(date).locale('vi').format('DD MMMM YYYY')
  // Capitalize chữ cái đầu của tháng (tháng một -> Tháng một)
  return formatted.replace(/tháng/i, 'Tháng')
}

const DatePicker = () => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(moment().toDate())
  const [month, setMonth] = React.useState(date)
  const [value, setValue] = React.useState(formatDate(date))

  function parseDateFromInput(input) {
    const m = moment(
      input,
      [
        moment.ISO_8601,
        'DD MMMM YYYY',
        'DD/MM/YYYY',
        'DD MMM YYYY',
        'dddd',
        'dddd, DD MMMM YYYY'
      ],
      'vi',
      true
    )
    if (m.isValid()) {
      return m.toDate()
    }
    return null
  }

  return (
    <div className='relative  flex gap-2 w-[50px] sm:w-[210px] 2xl:w-[272px] justify-center items-center'>
      <Input
        id='date'
        value={value}
        className='bg-gray-100 pl-14 pr-6 py-[15px] text-[16px] hidden sm:block
        2xl:text-[20px] text-text-500 border-text-50 shadow-sm font-normal text-center'
        onChange={(e) => {
          setValue(e.target.value)
          const parsed = parseDateFromInput(e.target.value)
          if (parsed) {
            setDate(parsed)
            setMonth(parsed)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id='date-picker'
            variant='ghost'
            className='absolute top-1/2 left-1 -translate-y-1/2 bg-gray-100 sm:bg-transparent'
          >
            <img
              src={icons.calendar}
              className='h-4 w-4 2xl:h-6 2xl:w-6'
              alt='calendar'
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='end'>
          <Calendar
            mode='single'
            selected={date}
            captionLayout='dropdown-buttons'
            month={month}
            onMonthChange={setMonth}
            locale={vi}
            fromYear={1960}
            toYear={2030}
            onSelect={(date) => {
              setDate(date)
              setValue(formatDate(date))
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePicker
