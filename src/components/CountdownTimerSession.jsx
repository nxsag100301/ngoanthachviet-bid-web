import React, { useCallback, useEffect, useRef, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import * as signalR from '@microsoft/signalr'

import Icon from '@/components/icons/IconSVG'
import tailwindConfig from '@/.././tailwind.config'
import { getDetailSessionAuction } from '@/apis/auction'
import { API_URL } from '@/utils/constants'

const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors

const SOCKET_URL = API_URL + '/hubs/auction'

const formatTime = (sec = 0) => {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0')
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0')
  const s = String(Math.floor(sec % 60)).padStart(2, '0')
  return { h, m, s }
}

const CountdownTimerSession = ({
  type, // type: 1 || 2 || 3
  size = 'small',
  sessionId,
  onStart,
  onEnd
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0)
  const [timeLeft, setTimeLeft] = useState(formatTime(0))
  const [sessionStatus, setSessionStatus] = useState(null)

  const connectionRef = useRef(null)
  const countdownRef = useRef(null)
  const currentSecRef = useRef(0)

  const fetchDetailSessionAuction = useCallback(async () => {
    if (!sessionId) return
    try {
      const res = await getDetailSessionAuction({ sessionId: sessionId })
      if (res?.statusCodes === 200) {
        const dataSession = res?.metadata
        if (!dataSession) return
        const seconds = dataSession?.RemainingSeconds
        setSessionStatus(dataSession?.Status)
        setRemainingSeconds(seconds)
        setTimeLeft(formatTime(seconds))
        currentSecRef.current = seconds
      }
    } catch (error) {
      console.log('Error getDetailSessionAuction: ', error)
    }
  }, [sessionId])

  const startCountdown = useCallback(() => {
    if (countdownRef.current) clearInterval(countdownRef.current)

    countdownRef.current = setInterval(() => {
      currentSecRef.current -= 1
      const sec = currentSecRef.current

      setRemainingSeconds(Math.max(sec, 0))
      setTimeLeft(formatTime(Math.max(sec, 0)))

      if (sec <= 0) {
        clearInterval(countdownRef.current)

        // 👉 Nếu đang "Scheduled" và đếm hết -> chuyển sang "Active"
        if (sessionStatus === 'Scheduled') {
          onStart?.() // gọi callback onStart
          fetchDetailSessionAuction() // cập nhật EndTime chính xác
        }
        // 👉 Nếu đang "Active" và hết -> kết thúc phiên
        else if (sessionStatus === 'Active') {
          onEnd?.() // callback khi kết thúc
          fetchDetailSessionAuction()
        }
      }
    }, 1000)
  }, [fetchDetailSessionAuction, sessionStatus, onStart, onEnd])

  const setupSignalR = useCallback(async () => {
    try {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl(SOCKET_URL, {
          transport:
            signalR.HttpTransportType.WebSockets |
            signalR.HttpTransportType.ServerSentEvents |
            signalR.HttpTransportType.LongPolling
        })
        .withAutomaticReconnect()
        .build()

      connectionRef.current = connection

      // 🔸 Lắng nghe cập nhật từ server
      connection.on(
        'ReceiveCountdownUpdate',
        (auctionIdParam, itemId, type, seconds) => {
          // Chỉ xử lý đúng phiên đấu giá hiện tại
          if (auctionIdParam !== sessionId) return

          console.log('Received countdown update:', {
            auctionIdParam,
            itemId,
            type,
            seconds
          })

          // Nếu là đếm tổng thể (itemId = 0)
          if (itemId === 0) {
            setRemainingSeconds(seconds)
            currentSecRef.current = seconds
            setTimeLeft(formatTime(seconds))
          } else {
            // Nếu có itemId khác 0 → có thể là countdown cho sản phẩm cụ thể
            console.log('Countdown for item: ', { itemId, seconds, type })
            // 👉 tuỳ bạn muốn cập nhật thêm UI sản phẩm cụ thể ở đây
          }
        }
      )

      await connection.start()
      await connection.invoke('JoinAuctionGroup', sessionId)
    } catch (err) {
      console.log('SignalR connection failed:', err)
    }
  }, [sessionId])

  const cleanup = useCallback(async () => {
    if (countdownRef.current) clearInterval(countdownRef.current)
    const conn = connectionRef.current
    if (conn) {
      try {
        await conn.invoke('LeaveAuctionGroup', sessionId)
        await conn.stop()
      } catch (err) {
        const msg = String(err?.message || '')
        if (
          msg.includes('LeaveAuctionGroup') ||
          msg.includes('connection') ||
          msg.includes('closed')
        ) {
          // không log ra
          return
        }
        console.warn('SignalR cleanup error (non-critical):', msg)
      }
    }
  }, [sessionId])

  useEffect(() => {
    if (!sessionId) return
    fetchDetailSessionAuction()
    setupSignalR()

    return () => cleanup()
  }, [fetchDetailSessionAuction, sessionId, setupSignalR, cleanup])

  useEffect(() => {
    if (
      remainingSeconds > 0 &&
      (sessionStatus === 'Scheduled' || sessionStatus === 'Active')
    ) {
      startCountdown()
    } else {
      setRemainingSeconds(0)
      onEnd?.()
    }
  }, [remainingSeconds, sessionStatus, startCountdown, onEnd])

  if (sessionStatus === 'Ended') return null

  return (
    <div
      className={`flex flex-row justify-between rounded-[6px] gap-1
      ${type === 1 && 'bg-gray-100'}
      ${type === 2 && 'bg-warning-100'}
      ${type === 3 && 'bg-white'}
      ${
        size === 'medium'
          ? 'p-2'
          : size === 'large'
          ? 'xl:px-6 xl:py-4 px-[6px] sm:px-2 py-[6px]'
          : 'px-[6px] sm:px-2 py-[6px]'
      }
  `}
    >
      <div className='flex flex-row gap-1 items-center'>
        {size === 'large' ? (
          <>
            <div className='hidden xl:flex justify-center items-center'>
              <Icon
                name='clockTimer'
                width={30}
                height={30}
                fill={
                  sessionStatus === 'Scheduled'
                    ? colors.blue[600]
                    : colors.warning[600]
                }
              />
            </div>
            <div className='flex xl:hidden justify-center items-center'>
              <Icon
                name='clockTimer'
                width={22}
                height={22}
                fill={
                  sessionStatus === 'Scheduled'
                    ? colors.blue[600]
                    : colors.warning[600]
                }
              />
            </div>
          </>
        ) : (
          <>
            <div className='hidden sm:flex justify-center items-center'>
              <Icon
                name='clockTimer'
                width={16}
                height={16}
                fill={
                  sessionStatus === 'Scheduled'
                    ? colors.blue[600]
                    : colors.warning[600]
                }
              />
            </div>
            <div className='flex sm:hidden justify-center items-center'>
              <Icon
                name='clockTimer'
                width={12}
                height={12}
                fill={
                  sessionStatus === 'Scheduled'
                    ? colors.blue[600]
                    : colors.warning[600]
                }
              />
            </div>
          </>
        )}

        <p
          className={`${
            sessionStatus === 'Scheduled' ? 'text-blue-600' : 'text-warning-600'
          } whitespace-nowrap text-[9px] 
            sm:text-[11px] 2xl:text-[12px] leading-4 sm:leading-5 font-medium
           ${size === 'medium' && '2xl:text-[14px]'}
           ${
             size === 'large' && '2xl:!text-[18px] md:!text-[16px] !text-[14px]'
           }
           `}
        >
          {sessionStatus === 'Scheduled' ? 'Bắt đầu trong' : 'Kết thúc trong'}
        </p>
      </div>
      <div className='flex flex-row gap-1 sm:gap-[6px] items-center'>
        {['h', 'm', 's'].map((item) => (
          <div
            key={item}
            className={`
          ${
            size === 'large'
              ? 'w-10 h-8 xl:w-12 xl:h-10 px-[6px] py-1'
              : 'w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 p-[2px]'
          }
          rounded-[2px] flex justify-center items-center ${
            sessionStatus === 'Scheduled' ? 'bg-blue-600' : 'bg-warning-600'
          }
          `}
          >
            <p
              className={`
            ${
              size === 'large'
                ? 'text-[16px] xl:text-[20px] leading-8'
                : 'text-[9px] sm:text-[11px] 2xl:text-[12px] leading-[14px] sm:leading-[18px]'
            }
             font-bold text-warning-50
            `}
            >
              {timeLeft[item]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimerSession
