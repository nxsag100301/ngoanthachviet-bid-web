import { useEffect, useRef, useState } from 'react'
import * as signalR from '@microsoft/signalr'

import { API_URL } from '@/utils/constants'

const SOCKET_URL = API_URL + '/hubs/auction'

// Cách dùng:
// const { itemId, highestBidderId, newPrice, isAuto } = useReceiveBidUpdate(sessionId)

export const useReceiveBidUpdate = (sessionId) => {
  const [bidData, setBidData] = useState({
    itemId: null,
    highestBidderId: null,
    newPrice: null,
    isAuto: false
  })
  const connectionRef = useRef(null)

  useEffect(() => {
    if (!sessionId) return

    const setupConnection = async () => {
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

        connection.on(
          'ReceiveBidUpdate',
          (itemId, highestBidderId, newPrice, isAuto) => {
            setBidData({
              itemId,
              highestBidderId,
              newPrice,
              isAuto
            })
          }
        )

        await connection.start()
        await connection.invoke('JoinAuctionGroup', sessionId)
        connectionRef.current = connection
      } catch (err) {
        console.error('SignalR setup failed:', err)
      }
    }

    setupConnection()

    return () => {
      const conn = connectionRef.current
      if (conn) {
        ;(async () => {
          try {
            await conn.invoke('LeaveAuctionGroup', sessionId)
            await conn.stop()
          } catch (err) {
            const msg = String(err?.message || '')
            if (
              msg.includes('LeaveAuctionGroup') ||
              msg.includes('connection') ||
              msg.includes('closed')
            )
              return
            console.warn('SignalR cleanup error:', msg)
          }
        })()
      }
    }
  }, [sessionId])

  return bidData
}
