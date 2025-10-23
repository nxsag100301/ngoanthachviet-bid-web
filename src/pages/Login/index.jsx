import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import loginBg from '@/assets/images/loginBg.png'
import loginLogo from '@/assets/images/loginLogo.png'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const loginSchema = z.object({
  fullName: z.string().min(1, 'Họ và tên không được để trống').trim(),
  phoneNumber: z
    .string()
    .min(10, 'Số điện thoại phải có ít nhất 10 số')
    .max(11, 'Số điện thoại không được quá 11 số')
    .regex(/^[0-9]+$/, 'Số điện thoại chỉ được chứa chữ số')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    console.log('Valid data:', data)
    // Xử lý logic login ở đây
  }

  return (
    <div className='relative w-screen h-screen'>
      <img src={loginBg} className='w-screen h-screen' />
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[400px] md:w-[480px]
          rounded-[12px] p-9 shadow-lg flex flex-col gap-6 sm:gap-8 md:gap-12 bg-background'
      >
        <img
          src={loginLogo}
          className='h-[60px] sm:h-[90px] md:h-[118px] mx-auto'
        />
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div>
            <Label
              htmlFor='phoneNumber'
              className='text-black-400 text-[16px] leading-7 font-normal'
            >
              Số điện thoại
            </Label>
            <Input
              id='phoneNumber'
              {...register('phoneNumber')}
              className={
                errors.phoneNumber &&
                'border-red-500 focus:ring-0 focus:outline-none focus:border-red-500'
              }
            />
            {errors.phoneNumber && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <Button type='submit' className='ml-auto px-6'>
            Tiếp tục
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
