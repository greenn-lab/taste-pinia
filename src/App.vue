<script setup>
import { storeCounter } from '@/store/counter'

const counter = storeCounter()

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
