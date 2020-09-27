<template>
  <div class="profile">
    <im-image v-bind:src="this.image" class="profile" />
    <h1>{{this.name}}</h1>
    <p>{{this.role}}</p>
  </div>
</template>

<script>
import ImImage from '@/components/image'
export default {
  name: 'ImProfile',
  components: {
    ImImage
  },
  props: {
    img: {
      type: String,
      default: undefined
    },
    name: String,
    role: String
  },
  data() {
    return {
      image: this.img
    }
  }
}
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: $white;
  .image {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-color: $white;
  }
  h1 {
    font-size: 22px;
    margin-top: 16px;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
  }
}
</style>
