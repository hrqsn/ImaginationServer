<template>
  <div class="container">
    <div>
      <im-linknav />
      <section class="hero">
        <div class="links">
          <a href="/" class="button web">
            <World /> <span>ホームページ</span>
          </a>
          <a href="https://www.youtube.com/channel/UC8qQMaR5Ee3t6Mh973OfLuw" target="_blank" rel=”noopener” class="button youtube">
            <YouTube fill="#fff" /> <span>YouTube</span>
          </a>
          <a href="https://twitter.com/tdr_mcpe_server" target="_blank" rel=”noopener” class="button twitter">
            <Twitter fill="#fff" /> <span>Twitter</span>
          </a>
          <a href="https://www.instagram.com/tdr_imaginationserver/" target="_blank" rel=”noopener” class="button instagram">
            <Instagram fill="#fff" /> <span>Instagram</span>
          </a>
        </div>
      </section>
      <im-footer />
    </div>
  </div>
</template>


<script>
import ImLinknav from '@/components/linknav'
import ImButton from '@/components/button'
import ImFooter from '@/components/footer'

import World from '@/components/icons/world'
import Twitter from '@/components/icons/twitter'
import YouTube from '@/components/icons/youtube'
import Instagram from '@/components/icons/instagram'

export default {
  components: {
    ImLinknav,
    ImButton,
    ImFooter,
    World,
    Twitter,
    YouTube,
    Instagram
  }
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;
}
.links {
  width: 600px;
  padding: 0 16px;
  margin-top: 80px;
  .button {
    background: none;
    padding: 0 24px;
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
    &.youtube {
      background: $youtube;
      color: $white;
    }
    &.instagram {
      background: $instagram;
      color: $white;
    }
    &.web {
      background: $gray-100;
      color: $white;
    }
    span {
      margin-left: 16px;
    }
  }
}
</style>
