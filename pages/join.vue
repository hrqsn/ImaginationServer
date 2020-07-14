<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <h1>キャスト募集</h1>
          <p>Imagination Serverでは、不定期で再現キャストを募集しています👋</p>
        </div>
      </section>
      <section class="bg-section"></section>
      <section class="status">
        <div class="title">
          <h1>募集情報</h1>
          <p>現在キャストの募集は休止しています。次回の募集開始までしばらくお待ちください。</p>
        </div>
      </section>
      <im-footer />
    </div>
  </div>
</template>


<script>
import ImNavbar from '@/components/navbar'
import ImFooter from '@/components/footer'

export default {
  components: {
    ImNavbar,
    ImFooter
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
    p {
      font-size: 16px;
      margin-top: 16px;
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
