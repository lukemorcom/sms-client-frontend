<template>
    <div class="bg-white rounded-lg p-3 shadow">
        <p>{{ message.body }}</p>
        <span class="text-xs">{{ message.sender }}</span>
    </div>
    <span class="text-xs text-white mt-1 text-right">{{ message.timestamp.toLocaleTimeString() }}</span>
</template>
<script setup lang="ts">
    defineProps({
        message: {
            type: Object,
            required: true,
        },
    });
</script>
