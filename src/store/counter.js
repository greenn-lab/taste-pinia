import { defineStore } from 'pinia'

export const storeCounter = defineStore('counter', {
  state: () => ({ count: 4 }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment(count) {
      this.count = this.count + (count || 1)
    }
  }
})
