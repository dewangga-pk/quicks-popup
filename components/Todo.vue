<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <BaseDropdown>
        <button slot="trigger" class="px-3 py-2 flex items-center gap-2 justify-between border border-[#828282] rounded-md w-44">
          <p>{{ select }}</p>
          <IconsArrowDown />
        </button>
        <ul class="w-44">
          <li
            class="p-4 border-b cursor-pointer hover:bg-[#2F80ED] hover:text-white transition ease-out duration-300"
            @click="select = 'My Task'"
          >
            My Task
          </li>
          <li
            class="p-4 border-b cursor-pointer hover:bg-[#2F80ED] hover:text-white transition ease-out duration-300"
            @click="select = 'Personal Errands'"
          >
            Personal Errands
          </li>
          <li
            class="p-4 cursor-pointer hover:bg-[#2F80ED] hover:text-white transition ease-out duration-300"
            @click="select = 'Urgent To-Do'"
          >
            Urgent To-Do
          </li>
        </ul>
      </BaseDropdown>
      <button class="bg-[#2F80ED] px-4 py-2 rounded-md text-white">
        New Task
      </button>
    </div>
    <div>
      <base-accordion persistent>
        <base-accordion-item>
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="z-20">
                <p>
                  <strong>
                    Cross-reference with Jeanne for Case #192813
                  </strong>
                </p>
              </div>
              <div class="flex items-center gap-4 justify-end">
                <p class="text-[#EB5757]">
                  2 Days Left
                </p>
                <p>12/06/2021</p>
                <IconsArrowDown />
                <IconsMore />
              </div>
            </div>
          </template>

          <div>
            Accordion Content
          </div>
        </base-accordion-item>
      </base-accordion>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoView',
  data () {
    return {
      select: 'My Task'
    }
  }
}
</script>
