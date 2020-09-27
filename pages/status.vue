<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <h1>進行状況</h1>
          <p>プロジェクト進行ステータス💫</p>
        </div>
      </section>
      <section class="bg-section"></section>
      <section class="status">
        <div class="title">
          <h1>51%</h1>
          <p>完成</p>
        </div>
        <div class="description">
          <h1>完成済みのアトラクション</h1>
          <ul>
            <li>ヴェネチアン・ゴンドラ</li>
          </ul>
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
  background-image: url("~@/assets/img/0.png");
  background-size: cover;
  background-position: 50%;
}
</style>
