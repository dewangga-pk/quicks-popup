<template>
  <div class="container h-screen w-screen bg-[#333333]">
    <!-- Button Quicks -->
    <div class="fixed bottom-0 right-2 mb-2">
      <button
        data-collapse-toggle="quicks-button"
        type="button"
        class="w-[68px] h-[68px] bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer focus:shadow-[-12px_0_rgba(0,0,0,0.3)]"
      >
        <img src="@/assets/stroke-icon.png" alt="quicks" class="w-4 h-8">
      </button>
      <div
        id="quicks-button"
        class="hidden md:block"
      >
        <ul class="absolute bottom-0 right-20 list-none flex flex-row gap-4">
          <li class="text-center text-white">
            <span>Todo</span>
            <button
              type="button"
              class="w-[68px] h-[68px] bg-[#F2F2F2] rounded-full flex items-center justify-center cursor-pointer focus:shadow-[-12px_0_rgba(0,0,0,0.3)]"
            >
              <img src="@/assets/todo-icon-2.png" alt="quicks" class="w-6 h-6">
            </button>
          </li>
          <li class="text-center text-white">
            <span>Inbox</span>
            <button
              type="button"
              class="w-[68px] h-[68px] bg-[#F2F2F2] rounded-full flex items-center justify-center cursor-pointer focus:shadow-[-12px_0_rgba(0,0,0,0.3)]"
            >
              <img src="@/assets/chat-icon-2.png" alt="quicks" class="w-6 h-6 text-orange-400">
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
