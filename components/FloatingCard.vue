<template>
  <div class="fixed bottom-24 right-2">
    <div class="bg-white p-5 rounded-md w-[737px] h-[600px]">
      <template v-if="isChat">
        <Chat />
      </template>
      <template v-else-if="isTodo">
        <Todo />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FloatingCard',
  computed: {
    ...mapState('ui', {
      isChat: 'isChat',
      isTodo: 'isTodo'
    })
  }
}
</script>
