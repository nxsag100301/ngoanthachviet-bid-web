import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { formatPrice } from '@/utils/formatter'
import QuantitySelector from './QuantitySelector'

const BidModal = ({
  open,
  onOpenChange,
  currentPrice = 20000000,
  stepPrice = 500000
}) => {
  const [autoBid, setAutoBid] = useState(false)
  const [stepAmount, setStepAmount] = useState(1)

  // maxBidStep sẽ nhân với bước giá của tôi và tính ra giá tối đa
  // user sẽ đấu giá trong phiên đó, VD: bước giá của tôi là 5
  // maxBidStep = 10 thì giá tối đa = 50 + currentPrice, tự động đấu giá sẽ đấu
  // cho tới khi đạt giá tối đa và dừng
  const [maxBidStep, setMaxBidStep] = useState(1)

  // Bước giá của tôi = Số lần bước giá * bước giá
  const myStepPrice = useMemo(
    () => stepAmount * stepPrice,
    [stepAmount, stepPrice]
  )

  // Giá tối đa, chỉ có ở trường hợp tự động đặt giá
  const maximumBidPrice = useMemo(
    () => autoBid && maxBidStep * myStepPrice + currentPrice,
    [autoBid, myStepPrice, maxBidStep, currentPrice]
  )

  const handleSwitchAutoBid = (value) => {
    setAutoBid(value)
    setStepAmount(1)
    setMaxBidStep(1)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hiddenCloseIcon
        className='max-w-[628px] px-9 py-6 flex flex-col gap-5'
      >
        <DialogTitle className='sr-only'>Ra giá</DialogTitle>
        <p className='text-[20px] leading-7 text-black font-semibold'>
          Đặt giá
        </p>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2 items-center'>
              <Switch
                id='autoBid'
                checked={autoBid}
                onCheckedChange={(value) => handleSwitchAutoBid(value)}
              />
              <Label
                htmlFor='autoBid'
                className='text-[16px] leading-6 text-text-500'
              >
                Tự động đặt giá
              </Label>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p className='text-[16px] leading-6 text-text-500'>
                Giá hiện tại
              </p>
              <p className='text-[16px] leading-6 text-primary-600 font-semibold'>
                {formatPrice(currentPrice)} VND
              </p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <p className='text-[16px] leading-6 text-text-500'>
                {autoBid ? 'Bước giá của phiên' : 'Bước giá'}
              </p>
              <p className='text-[16px] leading-6 text-blue-600 font-semibold'>
                {formatPrice(stepPrice)} VND
              </p>
            </div>

            <div className='flex flex-row justify-between items-center'>
              <p className='text-[16px] leading-6 text-text-500'>
                {autoBid ? 'Số lần bước giá' : 'Số bước giá đặt'}
              </p>
              <QuantitySelector value={stepAmount} onChange={setStepAmount} />
            </div>

            {autoBid ? (
              <div className='flex flex-row justify-between items-center'>
                <p className='text-[16px] leading-6 text-text-500'>
                  Bước giá của tôi
                </p>
                <p className='text-[16px] leading-6 text-error-600 font-semibold'>
                  {formatPrice(myStepPrice)} VND
                </p>
              </div>
            ) : (
              <div className='flex flex-row justify-between items-center'>
                <p className='text-[16px] leading-6 text-text-500'>
                  Giá của tôi
                </p>
                <p className='text-[16px] leading-6 text-error-600 font-semibold'>
                  {formatPrice(myStepPrice + currentPrice)} VND
                </p>
              </div>
            )}

            {autoBid && (
              <div className='flex flex-row justify-between items-center'>
                <p className='text-[16px] leading-6 text-text-500'>
                  Tự động nâng
                </p>
                <QuantitySelector value={maxBidStep} onChange={setMaxBidStep} />
              </div>
            )}
            {autoBid && (
              <div className='flex flex-row justify-between items-center'>
                <p className='text-[16px] leading-6 text-text-500'>
                  Giá tối đa
                </p>
                <p className='text-[16px] leading-6 text-error-600 font-semibold'>
                  {formatPrice(maximumBidPrice)} VND
                </p>
              </div>
            )}
          </div>
          <div className='flex flex-row gap-4 ml-auto'>
            <Button
              onClick={() => onOpenChange(false)}
              variant='gray'
              className='px-8'
            >
              Huỷ
            </Button>
            <Button className='px-8'>Ra giá</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BidModal
