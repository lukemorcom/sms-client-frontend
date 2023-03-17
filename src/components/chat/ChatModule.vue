<template>
    <div class="flex">
        <div class="w-1/4">
            <ConversationPicker
                :active-conversation="activeConversation"
                :available-conversations="availableConversations"
                @set-active-conversation="setActiveConversation"
            />
        </div>
        <div class="w-3/4">
            <ChatContainer :active-conversation="activeConversation" />
        </div>
    </div>
</template>
<script setup lang="ts">
import ChatContainer from '@/components/chat/conversation/ChatContainer.vue';
import { computed, ref } from '@vue/reactivity';
import ConversationPicker from '@/components/chat/ConversationPicker.vue';
import { Conversation } from '@/types/index';

const availableConversations = computed(() => {
    return [
        {
            id: 1,
            messages: [
                {
                    body: 'Hello, how are you?',
                    sender: 'John Doe',
                    timestamp: new Date(),
                },
                {
                    body: 'I am fine, thanks!',
                    sender: 'You',
                    timestamp: new Date(),
                },
            ],
        },
        {
            id: 2,
            messages: [
                {
                    body: '11111111',
                    sender: 'John Doe',
                    timestamp: new Date(),
                },
                {
                    body: 'aaaaaaaaaaa',
                    sender: 'You',
                    timestamp: new Date(),
                },
            ],
        },
        {
            id: 3,
            messages: [
                {
                    body: '222222222222222222',
                    sender: 'Jane Doe',
                    timestamp: new Date(),
                },
                {
                    body: 'bbbbbbbbbbbb',
                    sender: 'You',
                    timestamp: new Date(),
                },
            ],
        },
    ];
});

const activeConversation = ref<Conversation>(availableConversations.value[0]);

const setActiveConversation = (conversation: Conversation) => {
    activeConversation.value = conversation;
};
</script>
