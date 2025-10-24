import * as signalR from '@microsoft/signalr'
import { API_URL } from './constants'

let connection = null

// listeners[auctionId][itemId] = callback
let listeners = {}

const SOCKET_URL = `${API_URL}/hubs/auction`

export const getSignalRConnection = () => {
  if (!connection) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(SOCKET_URL)
      .withAutomaticReconnect()
      .build()

    // Lắng nghe từ server
    connection.on(
      'ReceiveCountdownUpdate',
      (auctionId, itemId, type, seconds) => {
        if (
          listeners[auctionId] &&
          listeners[auctionId][itemId] &&
          typeof listeners[auctionId][itemId] === 'function'
        ) {
          listeners[auctionId][itemId](seconds, type)
        }
      }
    )

    connection.start().catch((err) => {
      console.error('❌ SignalR connection failed:', err)
    })
  }
  return connection
}

export const subscribeCountdown = (auctionId, itemId, callback) => {
  if (!listeners[auctionId]) listeners[auctionId] = {}
  listeners[auctionId][itemId] = callback
}

export const unsubscribeCountdown = (auctionId, itemId) => {
  if (listeners[auctionId]) {
    delete listeners[auctionId][itemId]
    if (Object.keys(listeners[auctionId]).length === 0) {
      delete listeners[auctionId]
    }
  }
}
