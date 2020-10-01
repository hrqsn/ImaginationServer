<template>
  <div class="container">
    <div>
      <im-navbar />
      <section class="header">
        <div class="title">
          <small>終了しました</small>
          <h1>観光企画</h1>
          <p>Imagination Serverでは、ゲストの方にご入園いただける<br />「観光企画」を不定期で開催しています✨</p>
        </div>
      </section>
      <section class="bg-section"></section>
      <section class="status sm">
        <div class="title">
          <h1>終了しました</h1>
          <p>大盛況のうちに終了いたしました。次回のご来園をキャスト一同心よりお待ちしております。ありがとうございました！✨</p>
        </div>
      </section>
      <!-- <section class="ticket sm">
        <div class="title">
          <h1>パークチケット</h1>
          <p>今回の観光企画では、<strong>オンライン抽選</strong>にて１デーパスポートを発券します。<br/>参加を希望される方は、<a href="https://store.imaginationserver.com" target="_blank" rel=”noopener”>チケットストア</a> にて抽選をお願いいたします。</p>

        </div>
      </section>
      <section class="status sm">
        <div class="title">
          <h1>抽選受付期間</h1>
          <p>7/23(木) 08:00 ~ 23:59</p>
        </div>
      </section>
      <section class="ticket sm">
        <div class="title">
          <h1>参加方法</h1>
          <p>
            <ul>
              <li>1. <a href="#rules">参加ルール</a> を確認する</li>
              <li>2. <a href="https://store.imaginationserver.com" target="_blank" rel=”noopener”>チケットストア</a> にて抽選する</li>
              <li>3. 抽選にて当選した方には １デーパスポート を発券します。大切に保存してください。</li>
              <li>4. 発券ページに従って 専用Discordサーバー へご参加ください！✨</li>
            </ul>
           </p>
        </div>
      </section>
      <section class="ticket sm" id="rules">
        <div class="title">
          <h1>参加ルール</h1>
          <p>
            <ul>
              <li>1. <a href="https://imaginationserver.com/terms" target="_blank" rel=”noopener”>利用規約</a> への同意をお願いします</li>
              <li>2. 実際のパークで禁止されている行為（荒らす/禁止区域への立ち入り/迷惑行為等）はご遠慮ください</li>
              <li>3. ゲストの皆様への連絡を効率的に行うため、Discordサーバーへの参加が必要となります</li>
              <li>4. Minecraftスマホ版, Windows10版をお持ちの方のみご来園いただけます</li>
              <li>5. 抽選は1人につき1回のみ可能です</li>
              <li>6. 当選した方は、ご友人を3名まで招待できます</li>
              <li>7. 不明な点や質問等は <a href="https://twitter.com/tdr_mcpe_server" target="_blank" rel=”noopener”>公式Twitter</a> のDMにてお願いします👋</li>
            </ul>
           </p>
        </div>
      </section> -->
      <!-- <section class="join">
        <h1 id="montserrat">Imagine!</h1>
        <p>それでは「観光企画2020」をお楽しみください！✨</p>
        <a href="https://store.imaginationserver.com" target="_blank" rel=”noopener” class="button">抽選ページに行く</a>
      </section> -->
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
