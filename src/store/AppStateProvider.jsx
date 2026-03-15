import { createContext, useContext, useMemo, useState } from 'react'
import {
  demandItems as defaultDemandItems,
  messages as defaultMessages,
  orders as defaultOrders,
  profile as defaultProfile,
  products,
  supplyItems as defaultSupplyItems,
} from '../mock/data/content.js'

const AppStateContext = createContext(null)

function buildTimeline(status) {
  const base = ['提交订单', '供应方确认']

  if (status === '待确认') {
    return ['提交订单']
  }

  if (status === '待发货') {
    return base.concat('待发货')
  }

  if (status === '待收货') {
    return base.concat(['已发货', '待收货'])
  }

  if (status === '已完成') {
    return base.concat(['已发货', '已收货', '已完成'])
  }

  return ['提交订单', '已取消']
}

export function AppStateProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [favorites, setFavorites] = useState([products[1]?.id, products[3]?.id].filter(Boolean))
  const [messages, setMessages] = useState(defaultMessages)
  const [orders, setOrders] = useState(defaultOrders)
  const [supplyItems, setSupplyItems] = useState(
    defaultSupplyItems.map((item) => ({
      ...item,
      description: item.description || `${item.title}，当前处于公开展示阶段，可继续查看详情并联系供方。`,
      contactName: item.contactName || item.subtitle,
      contactRole: item.contactRole || '供应者',
      contactHint: item.contactHint || '建议通过站内消息或发布求购页进一步沟通。',
    })),
  )
  const [demandItems, setDemandItems] = useState(
    defaultDemandItems.map((item) => ({
      ...item,
      description: item.description || `${item.title}，请围绕数量、预算和交付节奏进行响应。`,
      contactName: item.contactName || item.subtitle,
      contactRole: item.contactRole || '求购用户',
      contactHint: item.contactHint || '建议供应者先核对预算和地区，再进行响应。',
    })),
  )
  const [profile] = useState(defaultProfile)

  const pushMessage = (message) => {
    setMessages((current) => [message, ...current])
  }

  const login = () => {
    setIsLoggedIn(true)
  }

  const register = () => {
    setIsLoggedIn(true)
  }

  const toggleFavorite = (productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [productId, ...current],
    )
  }

  const markAllMessagesRead = () => {
    setMessages((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      })),
    )
  }

  const createOrder = (product, payload) => {
    const orderId = `o-${Date.now()}`
    const newOrder = {
      id: orderId,
      title: product.name,
      amount: payload.amount,
      quantity: payload.quantity,
      status: '待确认',
      timeline: buildTimeline('待确认'),
      consignee: payload.consignee,
      address: payload.address,
      createdAt: new Date().toLocaleString('zh-CN', { hour12: false }),
      supplier: product.merchant,
      note: payload.note || '新建模拟订单，等待供应方确认。',
    }

    setOrders((current) => [newOrder, ...current])
    pushMessage({
      category: '订单通知',
      title: '模拟订单已提交',
      summary: `${product.name} 的订单已创建，当前状态为待确认。`,
      time: '刚刚',
      unread: true,
    })

    return orderId
  }

  const updateOrderStatus = (orderId, status, extraNote = '') => {
    const order = orders.find((item) => item.id === orderId)

    setOrders((current) =>
      current.map((item) =>
        item.id === orderId
          ? {
              ...item,
              status,
              note: extraNote || item.note,
              timeline: buildTimeline(status),
            }
          : item,
      ),
    )

    if (order) {
      pushMessage({
        category: '订单通知',
        title: `订单状态已更新为${status}`,
        summary: `${order.title} 已更新，${extraNote || '请进入订单详情页查看最新状态。'}`,
        time: '刚刚',
        unread: true,
      })
    }
  }

  const addSupplyItem = (payload) => {
    const newItem = {
      id: `s-${Date.now()}`,
      title: payload.title,
      subtitle: '当前用户发布',
      category: payload.category,
      quantity: payload.quantity,
      price: payload.price,
      location: payload.origin,
      updatedAt: '刚刚发布',
      description: payload.description,
      contactName: profile.name,
      contactRole: '供应者',
      contactHint: '支持通过站内消息或个人中心继续沟通。',
    }

    setSupplyItems((current) => [newItem, ...current])
    return newItem.id
  }

  const addDemandItem = (payload) => {
    const newItem = {
      id: `d-${Date.now()}`,
      title: payload.title,
      subtitle: profile.name,
      category: payload.category,
      quantity: payload.quantity,
      price: payload.price,
      location: payload.origin,
      updatedAt: '刚刚发布',
      status: '待响应',
      description: payload.description,
      contactName: profile.name,
      contactRole: '求购用户',
      contactHint: '建议供应者先查看需求详情，再通过站内消息响应。',
    }

    setDemandItems((current) => [newItem, ...current])
    return newItem.id
  }

  const submitSupplyIntent = (item, payload) => {
    pushMessage({
      category: '互动消息',
      title: '采购意向已发送',
      summary: `已向 ${item.subtitle} 提交 ${payload.quantity} 的采购意向，请关注后续沟通消息。`,
      time: '刚刚',
      unread: true,
    })
  }

  const submitDemandResponse = (item, payload) => {
    pushMessage({
      category: '互动消息',
      title: '需求响应已提交',
      summary: `你已对“${item.title}”提交报价 ${payload.quote}，等待对方确认。`,
      time: '刚刚',
      unread: true,
    })
  }

  const value = useMemo(
    () => ({
      isLoggedIn,
      favorites,
      messages,
      orders,
      supplyItems,
      demandItems,
      profile,
      login,
      register,
      toggleFavorite,
      markAllMessagesRead,
      createOrder,
      updateOrderStatus,
      addSupplyItem,
      addDemandItem,
      submitSupplyIntent,
      submitDemandResponse,
    }),
    [demandItems, favorites, isLoggedIn, messages, orders, profile, supplyItems],
  )

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export function useAppState() {
  const context = useContext(AppStateContext)

  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider')
  }

  return context
}
