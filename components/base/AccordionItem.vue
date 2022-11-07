<template>
  <div
    class="flex flex-col"
    :class="typographyClass"
  >
    <div
      class="cursor-pointer select-none"
      :class="{ 'border-b border-gray-60 pb-1': useBorder }"
      @click="toggle(!isOpen)"
    >
      <slot
        name="header"
        :is-open="isOpen"
      >
        <div class="text-gray-100">
          <strong>
            Click Me!
          </strong>
        </div>
      </slot>
    </div>

    <transition
      name="expand"
      @enter="enter"
      @afterEnter="afterEnter"
      @leave="leave"
    >
      <section v-if="isOpen">
        <div class="my-2">
          <slot>
            Accordion Item
          </slot>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NdAccordionItem',

  inject: [
    'size',
    'register',
    'unregister',
    'setOpen'
  ],

  props: {
    /**
     * Wether to use custom icon or not.
     */
    customIcon: {
      type: Boolean,
      default: false
    },
    /**
     * Show or open the accordion item
     * initially?
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * Should the accordion item header
     * have border?
     */
    useBorder: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isOpen: this.show
    }
  },

  computed: {
    typographyClass () {
      switch (this.size) {
        case 'xs':
          return 'text-xs'
        case 'sm':
          return 'text-sm'
        case 'base':
          return 'text-base'
        case 'md':
          return 'text-md'
        case 'lg':
          return 'text-lg'
        case 'xl':
          return 'text-h6'
        default:
          return ''
      }
    }
  },

  watch: {
    /**
     * Updates the isOpen state.
     *
     * @param {Boolean} val - The isOpen state.
     */
    show (val) {
      this.isOpen = val
    }
  },

  beforeMount () {
    this.register(this)
  },

  beforeDestroy () {
    this.unregister(this)
  },

  methods: {
    /**
     * Toggle the accordion item.
     *
     * @param {Boolean} show - Should open or not.
     */
    toggle (show) {
      this.isOpen = show
      this.setOpen(this, this.isOpen)
    },
    /**
     * Vue transition hooks.
     *
     * @param {Element} element - The DOM element.
     */
    afterEnter (element) {
      element.style.height = 'auto'
    },
    /**
     * Vue transition hooks.
     *
     * @param {Element} element - The DOM element.
     */
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = 0

      setTimeout(() => {
        element.style.height = height
      })
    },
    /**
     * Vue transition hooks.
     *
     * @param {Element} element - The DOM element.
     */
    leave (element) {
      const { height } = getComputedStyle(element)

      element.style.height = height

      setTimeout(() => {
        element.style.height = 0
      })
    }
  }
}
</script>
