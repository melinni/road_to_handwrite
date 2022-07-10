class eventEmitter {
  constructor() {
    this.handlers = {}
  }

  on(eventName, handler) {
    if (!(eventName in this.handler)) {
      this.handlers[eventName] = []
    }

    this.handlers[eventName].push(handler)
  }

  emit(eventName, params) {
    if (Array.isArray(this.handlers[eventName])) {
      this.handlers[eventName].forEach(handler => handler.apply(this, params))
    } else {
      console.log('no eventName')
    }
  }

  off(eventName, handler) {
    if (Array.isArray(this.handlers[eventName])) {
      this.handlers[eventName] = this.handlers[eventName].filter(h => {
        h !== handler;
      })
    } else {
      console.log('no eventName')
    }
  }
}