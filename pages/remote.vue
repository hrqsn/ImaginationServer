<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <small>配信者募集中！</small>
          <h1>リモート観光企画</h1>
          <p>Imagination Serverでは、一般の配信者の方を通した<br />「リモート観光企画」を開催いたします✨</p>
        </div>
      </section>
      <section class="bg-section"></section>
      <section class="status sm">
        <div class="title">
          <h1>リモート観光企画とは？</h1>
          <p>「もっと多くの人にバーチャルディズニーの魅力を知って欲しい!」という想いから、<br/>日々動画で様々な情報を発信しているクリエイターを招待し、<br/>配信を通して皆様と <strong>リモート</strong> でパークを観光する企画です✨</p>
        </div>
      </section>
      <section class="status sm" id="entry">
        <div class="title">
          <h1>参加資格</h1>
          <p>
            <ul>
              <li>・ YouTube チャンネル登録者 <strong>500名</strong> 以上</li>
              <li>・ Mirattivを含む各種配信サービス フォロワー <strong>1000名</strong> 以上</li>
            </ul>
          </p>
          <p>のいずれかを満たす方</p>
        </div>
      </section>
      <section class="status sm">
        <div class="title">
          <h1>参加方法</h1>
          <p>
            <ul>
              <li>1. <a href="#entry">参加資格</a> を確認する</li>
              <li>2. <a href="#form">エントリー受付フォーム</a> にて参加受付する</li>
              <li>3. <a href="https://twitter.com/tdr_mcpe_server" target="_blank" rel=”noopener”>公式アカウント</a> のDMにて参加希望の旨を送信の上、対応をお待ちください</li>
            </ul>
          </p>
        </div>
      </section>
      <section class="status sm" id="form">
        <div class="title">
          <h1 style="margin-bottom: 40px;">エントリー受付フォーム</h1>
          <a href="https://forms.gle/mADsezsqswCh5JSW8" target="_blank" rel=”noopener”>こちらから申請できます</a>
        </div>
      </section>
      <section class="join">
        <h1 id="montserrat">Imagine!</h1>
        <p>それでは「リモート観光企画」をお楽しみください！✨</p>
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
.header {
  height: 480px;
}
section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  &.sm {
    margin: 180px 0;
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
      margin-top: 24px;
      ul {
        text-align: left;
        li {
          list-style: none;
          margin-top: 8px;
        }
      }
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
.join {
  margin-top: 100px;
  width: 100%;
  height: 480px;
  background-image: url("~@/assets/img/3.png");
  background-size: cover;
  background-position: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: $white;
  padding: 0 16px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    z-index: 1;
  }
  p {
    font-size: 16px;
    margin-top: 24px;
    z-index: 1;
  }
  .button {
    margin-top: 48px;
    z-index: 1;
    background: none;
    padding: 0 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-decoration: none !important;
    background: $primary;
    color: $white;
    height: 48px;
    border-radius: 4px;
    font-size: rem(16px);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba($gray-100, 0.24);
  }
}
</style>
