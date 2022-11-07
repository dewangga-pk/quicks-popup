<template>
  <div class="container h-screen w-screen bg-[#333333]">
    <floating-button />
    <floating-card v-if="isChat || isTodo" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState('ui', {
      isChat: 'isChat',
      isTodo: 'isTodo'
    })
  }
}
</script>
