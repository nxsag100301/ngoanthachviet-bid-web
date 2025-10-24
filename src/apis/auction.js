import axios from '@/utils/authorizeAxios'

export const getListSessionAuction = async (data) => {
  const res = await axios.post('/Auction/Customer/GetListAuctions', data)
  return res.data
}

export const getDetailSessionAuction = async (data) => {
  const res = await axios.post('/Auction/Customer/GetDetailAuction', data)
  return res.data
}

export const autoBidApi = async (data) => {
  const res = await axios.post('/Auction/Customer/PlaceAutoBid', data)
  return res.data
}

export const manualBidApi = async (data) => {
  const res = await axios.post('/Auction/Customer/PlaceManualBid', data)
  return res.data
}

export const getSessionAuctionHistory = async (data) => {
  const res = await axios.post('/Auction/Customer/GetHistories', data)
  return res.data
}
