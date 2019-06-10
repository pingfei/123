<template>
  <button @click="handleClick" :style="styles">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0c6'
    }
  },
  computed: {
    styles () {
      return {
        background: this.color
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped lang="">
  button {
    border: 0;
    outline: 0;
    color: #fff;
    padding: 4px 8px;
  }
  button:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
</style>
