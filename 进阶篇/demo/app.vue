<template>
  <div id="app">
    <v-title title="点击"></v-title>
    <v-button color="red" @click="handleClick">click</v-button>
    <p>
      <img src="./images/image.jpg" alt="">
    </p>
  </div>
</template>
<script>
import vTitle from './title.vue'
import vButton from './button.vue'
export default {
  components: {
    vTitle,
    vButton
  },
  data () {
    return {
      name: 'vue'
    }
  },
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>
<style scoped>
  #app {
    color: #f50;
    font-size: 24px;
  }
</style>
