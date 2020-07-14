<template>
  <header class="navBar">
    <div class="navBar__inner">
      <im-logo />
    </div>
  </header>
</template>


<script>
import ImLogo from '@/components/logo'
export default {
  name: 'ImNavbar',
  components: {
    ImLogo
  }
}
</script>

<style scoped lang="scss">
.navBar {
  background-color: rgba(255, 255, 255, 0.95);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  &__inner {
    width: 100%;
    max-height: 80px;
    margin: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
