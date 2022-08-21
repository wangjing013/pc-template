import EventEmitter from 'eventemitter3'
class EventBus {
  static instance = null
  static getInstance() {
    if (EventBus.instance === null) {
      EventBus.instance = new EventEmitter()
      return EventBus.instance
    }
    return EventBus.instance
  }
}

EventBus.EVENTS = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_OUT: 'LOGIN_OUT',
  SEND_PUBLIC_CHAT_MSG: 'SEND_PUBLIC_CHAT_MSG',
}

export default EventBus
