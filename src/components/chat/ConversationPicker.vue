<template>
    <div class="flex flex-col pt-4 pr-2 text-center">
        <ul>
            <li
                v-for="(conversation, key) in props.availableConversations" :key="key"
                :class="{ active: props.activeConversation.id === conversation.id }"
                @click="setActiveConversation(conversation)"
            >
                {{ conversation.id }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { Conversation } from '@/types/index';

    const emit = defineEmits(['set-active-conversation']);

    const props = defineProps<{
        activeConversation: Conversation;
        availableConversations: Conversation[];
    }>();

    const setActiveConversation = (conversation: Conversation) => {
        emit('set-active-conversation', conversation);
    };

</script>
<style scoped>
  li {
    border: 1px solid #000000;
    border-radius: 4px;
    background-color: #c9c9c9;
  }
  .active {
    background-color: #000000;
    color: #ffffff;
  }
</style>
