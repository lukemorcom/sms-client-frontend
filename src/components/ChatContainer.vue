<template>
  <div class="text-white justify-center">
    <div v-for="(message, index) in messages" :key="index">
      <p>{{ message.body }}</p>
      <span class="text-xs">{{ message.sender }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Message } from '../types/index';

export default {
  setup() {
    const messages = [
      {
        body: 'Hello!',
        sender: 'Alice',
        timestamp: new Date(),
      },
      {
        body: 'Hi there!',
        sender: 'Bob',
        timestamp: new Date(),
      },
    ] as Message[];

    return {
      messages,
    };
  },
}
</script>
