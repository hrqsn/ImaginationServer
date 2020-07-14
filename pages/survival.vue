<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <h1>サバイバル企画</h1>
          <p>Imagination Serverのキャスト陣によるサバイバル生活を配信中！</p>
        </div>
      </section>
      <section class="bg-section">
        <a href="https://www.youtube.com/channel/UCZavmvvx0IFJpBu5pYbnC9g" target="_blank" rel=”noopener”>
          <div class="description">プー伯爵</div>
        </a>
      </section>
      <section class="bg-section-2">
        <a href="https://www.mirrativ.com/user/1682546#" target="_blank" rel=”noopener”>
          <div class="description">Ami</div>
        </a>
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
  background-image: url("~@/assets/img/5.png");
  background-size: cover;
  background-position: 50%;
  a {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-emphasis: none;
    .description {
      color: $white;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
.bg-section-2 {
  width: 100%;
  height: 360px;
  background-image: url("~@/assets/img/6.png");
  background-size: cover;
  background-position: 50%;
  a {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-emphasis: none;
    .description {
      color: $white;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
</style>
