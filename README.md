# taste-pinia

## prologue
상태관리 도구. vuex 에서 더 나은 도구를 찾다가 만들어졌다는데...  
다른건 몰라도 ts 에서 자동완성 잘된다고 하는데...

## installation
`vue cli` 를 사용했으니까,
```
vue add pinia
```
그러면 [`main.js`](./src/main.js) 에
`.use(createPinia())` 가 알아서 생기고.

## define store
```javascript
// store/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
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
```
이렇게 정의 할 수 있고, 

## use store
```vue
<script setup>
import { storeCounter } from '@/store/counter'

const counter = storeCounter()

// when to change, will be execution
counter.$subscribe(function () {
  console.error(arguments)
})
</script>

<template>
  <h1>{{ counter.count }}</h1>
  <div>
    <button @click="counter.increment(3)">+</button>
    <button @click="counter.increment(-1)">-</button>
  </div>
</template>
```
이렇게 사용이 직관적이라니 👍

## Getters
