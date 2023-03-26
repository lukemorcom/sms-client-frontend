<template>
  <div class="min-h-screen bg-zinc-600 flex">
    <div class="w-1/4 pt-4">
      <Menu />
    </div>
    <div class="w-3/4">
      <div class="flex justify-end pr-8">
        <ChatModule />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import ChatModule from '@/components/chat/ChatModule.vue';
  import Menu from '@/components/Menu.vue';
</script>
