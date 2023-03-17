<template>
  <div>
    <div v-for="(message, index) in messages" :key="index" class="flex flex-col mt-4 message">
      <MessageItem :message="message" />
    </div>
    <div class="flex mt-4">
      <ChatInput />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MessageItem from './MessageItem.vue';
  import ChatInput from './ChatInput.vue';
  import { Message } from '../types/index';

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
</script>

<style scoped>
.message {
  min-width: 15em;
}
</style>
