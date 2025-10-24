import * as signalR from '@microsoft/signalr'

let connection = null
let listeners = {}

export const getSignalRConnection = (SOCKET_URL) => {
  if (!connection) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(SOCKET_URL)
      .withAutomaticReconnect()
      .build()

    connection.on(
      'ReceiveCountdownUpdate',
      (auctionId, itemId, type, seconds) => {
        // Gửi đến đúng listener theo auctionId
        if (listeners[auctionId]) {
          listeners[auctionId](seconds, itemId, type)
        }
      }
    )

    connection.start().catch(console.error)
  }
  return connection
}

export const subscribeCountdown = (auctionId, callback) => {
  listeners[auctionId] = callback
}

export const unsubscribeCountdown = (auctionId) => {
  delete listeners[auctionId]
}
