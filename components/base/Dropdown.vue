<template>
  <client-only>
    <VDropdown
      :distance="6"
      placement="bottom-start"
    >
      <!-- This will be the popover reference (for the events and position) -->
      <slot name="trigger">
        <button>
          Trigger Dropdown
        </button>
      </slot>

      <!-- This will be the content of the popover -->
      <template #popper>
        <slot>
          Content Dropdown
        </slot>
      </template>
    </VDropdown>
  </client-only>
</template>

<script>
export default {
  name: 'BaseDropdown'
}
</script>
