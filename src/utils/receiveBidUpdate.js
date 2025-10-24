import * as signalR from '@microsoft/signalr'
import { API_URL } from '@/utils/constants'

const SOCKET_URL = API_URL + '/hubs/auction'

export const createAuctionSignalRConnection = async ({
  sessionId,
  onReceiveBidUpdate
}) => {
  if (!sessionId) {
    console.warn('❌ Missing sessionId when creating SignalR connection.')
    return null
  }

  // Tạo kết nối SignalR
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(SOCKET_URL, {
      transport:
        signalR.HttpTransportType.WebSockets |
        signalR.HttpTransportType.ServerSentEvents |
        signalR.HttpTransportType.LongPolling
    })
    .withAutomaticReconnect()
    .build()

  // Lắng nghe sự kiện ReceiveBidUpdate
  connection.on(
    'ReceiveBidUpdate',
    (itemId, highestBidderId, newPrice, isAuto) => {
      if (typeof onReceiveBidUpdate === 'function') {
        onReceiveBidUpdate(itemId, highestBidderId, newPrice, isAuto)
      }
    }
  )

  try {
    await connection.start()
    await connection.invoke('JoinAuctionGroup', sessionId)
    console.log(`✅ Joined AuctionGroup ${sessionId}`)
  } catch (err) {
    console.error('❌ Failed to connect SignalR:', err)
    return null
  }

  return connection
}

/**
 * Dọn dẹp connection SignalR
 */
export const cleanupAuctionSignalRConnection = async (
  connection,
  sessionId
) => {
  if (!connection) return
  try {
    await connection.invoke('LeaveAuctionGroup', sessionId)
    await connection.stop()
    console.log(`🧹 Left AuctionGroup ${sessionId}`)
  } catch (err) {
    const msg = String(err?.message || '')
    if (
      msg.includes('LeaveAuctionGroup') ||
      msg.includes('connection') ||
      msg.includes('closed')
    ) {
      // Lỗi không quan trọng, bỏ qua
      return
    }
    console.warn('⚠️ SignalR cleanup error:', msg)
  }
}
