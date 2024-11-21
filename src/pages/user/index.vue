<script setup lang="ts">
const user = useUserStore()
const savedName = ref(user.savedName)
const router = useRouter()

function go() {
  router.push(`/user/${encodeURIComponent(savedName.value)}`)
}
</script>

<template>
  <div>
    <TheInput
      v-model="savedName"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
