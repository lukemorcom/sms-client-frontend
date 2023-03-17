<template>
    <div class="flex">
        <input v-model="message" type="text" class="w-full mr-2 py-2 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Type your message here" />
        <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
    </div>
</template>
<script setup lang="ts">
    import { defineEmits, ref } from 'vue';
    import { Message } from '../types/index';

    const emit = defineEmits(['send-message'])
    const message = ref('');

    const sendMessage = () => {
        const messageToSend = {
            body: message.value,
            sender: 'You',
            timestamp: new Date(),
        } as Message;

        emit('send-message', messageToSend);
        message.value = '';
    };
</script>
