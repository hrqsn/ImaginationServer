<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <h1>お問い合わせ</h1>
          <a href="https://twitter.com/tdr_mcpe_server" target="_blank" rel=”noopener” class="button twitter">
            <Twitter fill="#fff" /> <span>Twitterにて問い合わせる</span>
          </a>
        </div>
      </section>
      <im-footer />
    </div>
  </div>
</template>


<script>
import ImNavbar from '@/components/navbar'
import ImFooter from '@/components/footer'
import Twitter from '@/components/icons/twitter'

export default {
  components: {
    ImNavbar,
    ImFooter,
    Twitter
  }
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  .title {
    text-align: center;
    h1 {
      font-size: 40px;
    }
    .button {
      background: none;
      padding: 0 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      text-decoration: none !important;
      height: 48px;
      border-radius: 4px;
      font-size: rem(16px);
      width: 100%;
      margin-top: 24px;
      &.twitter {
        background: $twitter;
        color: $white;
      }
      span {
        margin-left: 16px;
      }
    }
  }
}
.bg-section {
  width: 100%;
  height: 360px;
  background-image: url("~@/assets/img/7.png");
  background-size: cover;
  background-position: 50%;
}
</style>
