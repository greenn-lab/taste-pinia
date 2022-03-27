import { defineStore } from 'pinia'

export const storeCounter = defineStore('counter', {
  state: _ => ({ count: 4 }),
  getters: {
    double: state => state.count * 2
  },
  actions: {
    increment(count) {
      this.count = this.count + (count || 1)
      console.log(`increment ${this.count}`)
    },
    async api() {
      console.log('start api')
      await fetch('http://localhost:3000/posts').then(res => console.log(res))
      setTimeout(_ => console.log('setTimeout in api'), 1000)
      console.log('middle in api')

      await new Promise((resolve, _reject) => {
        console.log('hello promise')
        setTimeout(_ => {
          resolve('test')
        }, 1500)
      }).then(
        _ => {
          console.log(`fulfilled hello promise ${_}`)
        },
        _ => {
          console.log('rejected hello promise')
        }
      )

      console.log('end api')
    }
  }
})
