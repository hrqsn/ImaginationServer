<template>
  <img :src="src" :alt="alt" class="image" />
</template>

<script>
export default {
  name: 'ImImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: undefined
    }
  }
}
</script>
