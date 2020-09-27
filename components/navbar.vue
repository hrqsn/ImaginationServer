<template>
  <header class="navBar">
    <div class="navBar__inner">
      <im-logo />
      <div class="navBar__nav">
        <div class="navBar__navItem">
          <im-link to="/" color="default" size="md">ホーム</im-link>
        </div>
        <!-- <div class="navBar__navItem">
          <im-link to="/status" color="default" size="md">進行状況</im-link>
        </div> -->
        <div class="navBar__navItem">
          <im-link to="/survival" color="default" size="md">サバイバル企画</im-link>
        </div>
        <div class="navBar__navItem">
          <im-link to="/visit" color="default" size="md">観光企画</im-link>
        </div>
        <div class="navBar__navItem">
          <im-link to="/join" color="default" size="md">キャスト募集</im-link>
        </div>
        <div class="navBar__navItem">
          <im-link to="/contact" color="default" size="md">お問い合わせ</im-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ImLogo from '@/components/logo'
import ImLink from '@/components/link'
export default {
  name: 'ImNavbar',
  components: {
    ImLogo,
    ImLink
  }
}
</script>

<style scoped lang="scss">
@include mqdown(sm) {
  .navBar {
    height: 120px !important;
  }
}
@include mqbet(sm, md) {
  .navBar {
    height: 120px !important;
  }
}
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
    justify-content: space-between;
    .navBar__nav {
      display: flex;
      align-items: center;
      &Item {
        margin-left: 32px;
        display: block;
      }
    }
  }
  @include mqdown(sm) {
    &__inner {
      margin: 0 32px;
      justify-content: center;
      flex-direction: column;
      min-height: 120px;
    }
    .navBar__nav {
      position: relative;
      box-sizing: initial;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;
      scrollbar-width: none;
      margin-top: 16px;
      &::-webkit-scrollbar {
        display:none;
      }
       &Item {
         flex-shrink: 0;
         &:first-child {
           margin: 0;
         }
       }
    }
  }
  @include mqbet(sm, md) {
    &__inner {
      margin: 0 32px;
      justify-content: center;
      flex-direction: column;
      min-height: 120px;
    }
    .navBar__nav {
      position: relative;
      box-sizing: initial;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;
      scrollbar-width: none;
      margin-top: 16px;
       &Item {
         flex-shrink: 0;
         &:first-child {
           margin: 0;
         }
       }
    }
  }
  @include mqup(md) {
    &__inner {
      margin: 0 64px;
      justify-content: space-between;
      flex-direction: row;
    }
  }
}
</style>
