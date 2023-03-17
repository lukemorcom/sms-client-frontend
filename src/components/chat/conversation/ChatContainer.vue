<template>
  <div>
    <div v-for="(message, index) in props.activeConversation.messages" :key="index" class="flex flex-col mt-4 message">
      <MessageItem :message="message" />
    </div>
    <div class="flex mt-4">
      <ChatInput @send-message="sendMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import MessageItem from './MessageItem.vue';
  import ChatInput from './ChatInput.vue';
  import { Message, Conversation } from '../../../types/index';

  const props = defineProps<{
    activeConversation: Conversation;
  }>();

  const sendMessage = (message: Message) => {
    console.log(message);
    props.activeConversation.messages.push(message);
  };
</script>

<style scoped>
.message {
  min-width: 15em;
}
</style>
