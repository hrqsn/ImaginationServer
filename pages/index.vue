<template>
  <div class="container">
    <div>
      <im-navbar />
      <div class="bg-container">
        <div class="bg-wrapper">
          <div class="title">
            <h1 id="montserrat">Imagine!</h1>
            <p>私たちは、Minecraft: Bedrock Editionを用いて<br />東京ディズニーリゾート®︎を完全再現しているグループです。</p>
          </div>
        </div>
      </div>
      <section class="about">
        <div class="content">
          <div class="title">
            <h1>夢がかなう場所を<br />手の中で</h1>
            <p>Imagination Serverは、東京ディズニーリゾート®︎を愛する32名のメンバーが<br /><strong>Minecraft Bedrock: Edition</strong>を用いて完全再現する試みです。</p>
            <p>2017年8月に始まったこのプロジェクトは、<br/>有志の学生/社会人によって非営利で運営されています。</p>
          </div>
        </div>
        <im-image v-bind:src="require('@/assets/img/0.png')" />
      </section>
      <section class="bg-section"></section>
      <section class="casts">
        <h1>キャスト</h1>
        <div class="grid">
          <div class="cast" v-for="cast in casts" :key="cast.img">
            <im-profile :img="require(`@/assets/img/casts/${cast.img}`)" :name="cast.name" :role="cast.role" />
          </div>
        </div>
      </section>
      <section class="visit">
        <h1>観光企画</h1>
        <p>Imagination Serverでは、ゲストの方にご入園いただける<br />「観光企画」を不定期で開催しています。</p>
        <im-button to="visit" size="lg" color="black">詳しくはこちら</im-button>
      </section>
      <section class="join">
        <h1>Join us</h1>
        <p>キャスト参加をご希望ですか？</p>
        <im-button to="join" size="lg" color="primary">募集情報を見る</im-button>
      </section>
      <im-footer />
    </div>
  </div>
</template>

<script>
import ImNavbar from '@/components/navbar'
import ImFooter from '@/components/footer'
import ImImage from '@/components/image'
import ImProfile from '@/components/profile'
import ImButton from '@/components/button'

export default {
  components: {
    ImNavbar,
    ImImage,
    ImProfile,
    ImButton,
    ImFooter
  },
  data() {
    return {
      casts: [
        {
          "id": 0,
          "name": "Nooooosa",
          "role": "サーバー運営/クリエイティブ",
          "img": "0-min.JPG"
        },
        {
          "id": 1,
          "name": "stormMASA",
          "role": "サーバー運営/クリエイティブ",
          "img": "1-min.JPG"
        },
        {
          "id": 2,
          "name": "KIBI SNIPER",
          "role": "クリエイティブ/コマンド",
          "img": "2-min.JPG"
        },
        {
          "id": 3,
          "name": "Sans1215",
          "role": "クリエイティブ/コマンド/配信",
          "img": "3-min.JPG"
        },
        {
          "id": 4,
          "name": "HAYABUSA0802",
          "role": "クリエイティブ/コマンド",
          "img": "4-min.JPG"
        },
        {
          "id": 5,
          "name": "kami dasu",
          "role": "クリエイティブ/コマンド",
          "img": "5-min.JPG"
        },
        {
          "id": 6,
          "name": "Akafumi",
          "role": "クリエイティブ/コマンド",
          "img": "6-min.JPG"
        },
        {
          "id": 7,
          "name": "活きのいいマグロ",
          "role": "クリエイティブ/コマンド",
          "img": "7-min.JPG"
        },
        {
          "id": 8,
          "name": "Zuki510",
          "role": "クリエイティブ/コマンド",
          "img": "8-min.JPG"
        },
        {
          "id": 9,
          "name": "okayu22",
          "role": "クリエイティブ/コマンド",
          "img": "9-min.JPG"
        },
        {
          "id": 10,
          "name": "calmdonald",
          "role": "クリエイティブ/コマンド",
          "img": "10-min.JPG"
        },
        {
          "id": 11,
          "name": "SHOoooo22",
          "role": "クリエイティブ/コマンド",
          "img": "11-min.JPG"
        },
        {
          "id": 12,
          "name": "V.LEMO",
          "role": "クリエイティブ/コマンド/アドオン",
          "img": "12-min.JPG"
        },
        {
          "id": 13,
          "name": "Jawa1210",
          "role": "クリエイティブ/コマンド",
          "img": "13-min.JPG"
        },
        {
          "id": 14,
          "name": "yusukenattou",
          "role": "クリエイティブ/コマンド",
          "img": "14-min.JPG"
        },
        {
          "id": 15,
          "name": "Topolino",
          "role": "クリエイティブ/コマンド",
          "img": "15-min.JPG"
        },
        {
          "id": 16,
          "name": "Ryosuke5861",
          "role": "クリエイティブ/コマンド",
          "img": "16-min.JPG"
        },
        {
          "id": 17,
          "name": "gaikotun",
          "role": "クリエイティブ/コマンド",
          "img": "17-min.JPG"
        },
        {
          "id": 18,
          "name": "Koba1115",
          "role": "クリエイティブ/コマンド/リソースパック",
          "img": "18-min.JPG"
        },
        {
          "id": 19,
          "name": "AmiVOX",
          "role": "クリエイティブ/コマンド/配信",
          "img": "19-min.JPG"
        },
        {
          "id": 20,
          "name": "KamosanUCR",
          "role": "クリエイティブ/コマンド/アドオン/配信",
          "img": "20.JPG"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.bg-container {
  width: 100%;
  height: 844px;
  background-image: url("~@/assets/img/is_bg.png");
  background-size: cover;
  background-position: 50%;
  .bg-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 400px);
    .title {
      text-align: center;
      padding: 0 16px;
      h1 {
        font-size: 56px;
      }
      p {
        font-size: 18px;
        margin-top: 16px;
      }
      @include mqdown {
        h1 {
          font-size: 40px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
}
.about {
  margin: 240px 64px;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  .content {
    h1 {
      font-size: 48px;
      font-weight: 600;
      padding-bottom: 16px;
    }
    p {
      font-size: 16px;
      margin-top: 24px;
    }
  }
  img {
    width: 480px;
    height: 280px;
    object-fit: cover;
    margin-left: auto;
    margin-top: auto;
  }
}
@include mqdown {
  .about {
    flex-direction: column;
    margin: 120px 0;
    padding: 0 16px;
    .content {
      h1 {
        font-size: 32px;
      }
      p {
        font-size: 16px;
        margin-top: 24px;
      }
    }
    img {
      width: 100%;
      height: 240px;
      margin-top: 48px;
    }
  }
}
@include mqbet(sm, md) {
  .about {
    flex-direction: column;
    margin: 120px 0;
    padding: 0 16px;
    .content {
      margin: 0 64px;
    }
    img {
      width: 100%;
      height: 240px;
      margin-top: 48px;
    }
  }
}
.bg-section {
  width: 100%;
  height: 360px;
  background-image: url("~@/assets/img/1.jpg");
  background-size: cover;
  background-position: 50%;
}
.casts {
  text-align: center;
  padding: 120px 32px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 100px;
  }
  .grid {
    display: grid;
    gap: 64px;
    grid-template-columns: repeat(4 ,auto);
    justify-content: center;
  }
  @include mqdown {
    .grid {
      grid-template-columns: repeat(1 ,auto);
    }
  }
  @include mqbet(sm, md) {
    .grid {
      grid-template-columns: repeat(2,auto);
    }
  }
}
.visit {
  width: 100%;
  height: 480px;
  background-image: url("~@/assets/img/2.png");
  background-size: cover;
  background-position: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba($white, 0.98), $white);
  }
}
.join {
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
