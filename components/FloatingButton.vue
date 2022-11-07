<template>
  <div class="fixed flex items-end bottom-2 right-2 gap-4">
    <template v-if="isChat">
      <div class="text-center text-white">
        <button
          class="w-[68px] h-[68px] bg-white rounded-full flex items-center justify-center cursor-pointer"
          @click="TOGGLE_TODO"
        >
          <IconsTodo class="fill-[#F8B76B]" />
        </button>
      </div>
      <div class="text-center text-white">
        <button
          class="w-[68px] h-[68px] bg-[#8785FF] rounded-full flex items-center justify-center cursor-pointer shadow-custom"
          @click="TOGGLE_CHAT"
        >
          <IconsChat class="fill-white" />
        </button>
      </div>
    </template>
    <template v-else-if="isTodo">
      <div class="text-center text-white">
        <button
          class="w-[68px] h-[68px] bg-white rounded-full flex items-center justify-center cursor-pointer"
          @click="TOGGLE_CHAT"
        >
          <IconsChat class="fill-[#8885FF]" />
        </button>
      </div>
      <div class="text-center text-white">
        <button
          class="w-[68px] h-[68px] bg-[#F8B76B] rounded-full flex items-center justify-center cursor-pointer shadow-custom"
          @click="TOGGLE_TODO"
        >
          <IconsTodo class="fill-white" />
        </button>
      </div>
    </template>
    <template v-else>
      <template v-if="isShow">
        <div class="text-center text-white">
          <span>Todo</span>
          <button
            class="w-[68px] h-[68px] bg-white rounded-full flex items-center justify-center cursor-pointer"
            @click="TOGGLE_TODO"
          >
            <IconsTodo class="fill-[#F8B76B]" />
          </button>
        </div>
        <div class="text-center text-white">
          <span>Inbox</span>
          <button
            class="w-[68px] h-[68px] bg-white rounded-full flex items-center justify-center cursor-pointer"
            @click="TOGGLE_CHAT"
          >
            <IconsChat class="fill-[#8885FF]" />
          </button>
        </div>
      </template>
      <button
        class="w-[68px] h-[68px] bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer"
        @click="toggleShow"
      >
        <IconsStroke class="fill-white" />
      </button>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'FloatingButton',
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState('ui', {
      isChat: 'isChat',
      isTodo: 'isTodo'
    })
  },
  methods: {
    ...mapMutations('ui', {
      TOGGLE_TODO: 'TOGGLE_TODO',
      TOGGLE_CHAT: 'TOGGLE_CHAT'
    }),
    toggleShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>
