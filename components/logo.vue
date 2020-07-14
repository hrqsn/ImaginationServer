<template>
  <div class="logo">
    <im-link to="/">
      <im-image v-bind:src="this.image" alt="Imagination Server" />
    </im-link>
  </div>
</template>

<script>
import ImLink from '@/components/link'
import ImImage from '@/components/image'
export default {
  name: 'ImLogo',
  components: {
    ImLink,
    ImImage
  },
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      image: require('@/assets/img/logo.png')
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  .image {
    height: 24px;
    svg {
      fill: currentColor;
    }
  }
}
</style>
