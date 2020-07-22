<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__nav">
        <div class="footer__navItem">
          <im-link to="/" color="default" size="md">ホーム</im-link>
        </div>
        <!-- <div class="o-footer__navItem">
          <im-link to="/status" color="default" size="md">進行状況</im-link>
        </div> -->
        <div class="footer__navItem">
          <im-link to="/survival" color="default" size="md">サバイバル企画</im-link>
        </div>
        <div class="footer__navItem">
          <im-link to="/visit" color="default" size="md">観光企画</im-link>
        </div>
        <div class="footer__navItem">
          <im-link to="/join" color="default" size="md">キャスト募集</im-link>
        </div>
        <div class="footer__navItem">
          <im-link to="/terms" color="default" size="md">利用規約</im-link>
        </div>
        <div class="footer__navItem">
          <im-link to="/contact" color="default" size="md">お問い合わせ</im-link>
        </div>
      </div>
      <div class="footer__social">
        <div class="footer__socialItem">
          <a href="https://twitter.com/tdr_mcpe_server" target="_blank" rel=”noopener”><Twitter /></a>
        </div>
        <div class="footer__socialItem">
          <a href="https://www.youtube.com/channel/UC8qQMaR5Ee3t6Mh973OfLuw" target="_blank" rel=”noopener”><YouTube /></a>
        </div>
        <div class="footer__socialItem">
          <a href="https://www.instagram.com/tdr_imaginationserver/" target="_blank" rel=”noopener”><Instagram /></a>
        </div>
      </div>
      <p>※Imagination Serverは個人が企画したものであり、東京ディズニーリゾート®︎並びに運営会社等とは一切関係ありません。</p>
    </div>
  </footer>
</template>

<script>
import ImLink from '@/components/link'
import Twitter from '@/components/icons/twitter'
import YouTube from '@/components/icons/youtube'
import Instagram from '@/components/icons/instagram'
export default {
  name: 'ImFooter',
  components: {
    ImLink,
    Twitter,
    YouTube,
    Instagram
  }
}
</script>

<style scoped lang="scss">
.footer {
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 80px auto 0;
  padding: 0 16px;
  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      text-align: center;
      font-size: 12px;
      color: #393939;
      margin: 80px auto;
      display: flex;
    }
    .footer__nav {
      display: flex;
      align-items: center;
      &Item {
        margin-left: 32px;
        display: block;
      }
    }
    @include mqdown {
      .footer__nav {
        flex-direction: column;
        &Item {
          margin: 0;
          padding-top: 16px;
        }
      }
    }
    .footer__social {
      margin-top: 32px;
      display: inline-flex;
      &Item {
        margin-right: 24px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
