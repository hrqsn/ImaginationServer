<template>
  <router-link :to="to" :color="color" class="link">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'ImLink',
  props: {
    to: {
      type: String,
      default: '/'
    },
    color: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  font-size: rem(14px);
  &:hover {
    text-decoration: underline;
  }
  &[color='default'] {
    color: $gray-100;
  }
  &[color='primary'] {
    color: $primary;
  }
}
</style>
