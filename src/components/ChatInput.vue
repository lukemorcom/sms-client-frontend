<template>
    <div class="flex">
        <input v-model="newMessage" type="text" class="w-full mr-2 py-2 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Type your message here" />
        <button @click="sendMessage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { Message } from '../types/index';

    const newMessage = ref('');

    const sendMessage = () => {
        const message = {
            body: newMessage.value,
            sender: 'Alice',
            timestamp: new Date(),
        } as Message;
        newMessage.value = '';
    };
</script>
