<template>
  <components :is="tag" :to="to" :color="color" :size="size" class="button">
    <slot />
  </components>
</template>

<script>
export default {
  name: 'ImButton',
  props: {
    to: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
  computed: {
    tag() {
      return this.to ? 'router-link' : 'button'
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  background: none;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none !important;
  // COLOR
  &[color='primary'] {
    background: $primary;
    color: $white;
  }
  &[color='black'] {
    background: $gray-100;
    color: $white;
  }
  &[color='twitter'] {
    background: $twitter;
    color: $white;
  }
  // SIZE
  &[size='sm'] {
    height: 28px;
    border-radius: 4px;
    font-size: rem(12px);
  }
  &[size='md'] {
    height: 36px;
    border-radius: 4px;
    font-size: rem(14px);
  }
  &[size='lg'] {
    height: 48px;
    border-radius: 4px;
    font-size: rem(16px);
  }
}
</style>
