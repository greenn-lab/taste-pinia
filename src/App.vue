<script setup>
import { storeCounter } from '@/store/counter'

const counter = storeCounter()

counter.$subscribe(function () {
  console.error('$subscribe', arguments)
})

counter.$onAction(function () {
  console.error('$onAction', arguments)
})
</script>

<template>
  <h1>{{ counter.double }}</h1>
  <div>
    <button @click="counter.increment(3), counter.api()">+</button>
    <button @click="counter.increment(-1)">-</button>
  </div>
</template>
