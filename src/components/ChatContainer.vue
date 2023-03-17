<template>
  <div>
    <div class="max-w-lg">
      <div v-for="(message, index) in messages" :key="index" class="flex flex-col mt-4 message">
        <div class="bg-white rounded-lg p-3 shadow">
          <p>{{ message.body }}</p>
          <span class="text-xs">{{ message.sender }}</span>
        </div>
        <div class="text-xs text-white mt-1 text-right">{{ message.timestamp.toLocaleTimeString() }}</div>
      </div>
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
<style scoped>
 .message {
  min-width: 15em;
 }
</style>
