<script setup lang="ts">
const user = useRoute('/user/[id]').params

useHead({
  title: `user: ${user.id}`,
})
const userData = useUserStore()
</script>

<template>
  <div color="text-sm">
    user: {{ user.id }}
    <div />
    userData: {{ userData.savedName }}
  </div>
</template>
