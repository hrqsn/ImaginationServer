<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <small>開催決定！</small>
          <h1>観光企画</h1>
          <p>Imagination Serverでは、ゲストの方にご入園いただける<br />「観光企画」を不定期で開催しています✨</p>
        </div>
      </section>
      <section class="bg-section"></section>
      <section class="status sm">
        <div class="title">
          <h1>次回開園日</h1>
          <!-- <p>準備中</p> -->
          <p>8/1~8/4</p>
        </div>
      </section>
      <section class="ticket sm">
        <div class="title">
          <h1>パークチケット</h1>
          <!-- <p>準備中</p> -->
          <p>4日間入園可能なマルチデーパスポートを用意しております。（数量限定）</p>
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
  &.sm {
    height: 360px;
  }
  .title {
    text-align: center;
    small {
      color: $instagram;
      font-weight: 600;;
    }
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
  background-image: url("~@/assets/img/4.jpg");
  background-size: cover;
  background-position: 50%;
  background-position-y: bottom;
}
</style>
