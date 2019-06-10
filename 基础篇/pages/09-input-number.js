Vue.component('input-number', {
  template: `
    <div class="input-number">
      <input type="text" :value="currentValue" @change="handleChange">
      <button @click="down" :disabled="currentValue <= min">-</button>
      <button @click="up" :disabled="currentValue >= max">+</button>
    </div>
  `,
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      console.log(val)
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value (val) {
      console.log(val)
      this.updateValue(val)
    }
  },
  methods: {
    down () {
      if (this.currentValue <= this.min) return
      this.currentValue --
    },
    up () {
      if (this.currentValue >= this.max) return 
      this.currentValue ++
    },
    handleChange (e) {
      var value = e.target.value.trim()
      console.log(value)
      var max = this.max
      var min = this.min
      value = Number(value)
      console.log(value)
      if (Number(value) + '' == 'NaN') {
        alert('请输入数字')
      }
      console.log(value)
      console.log(value >= max)
      console.log(value <= min)
      if (value >= max) {
        this.currentValue = max
      } else if (value <= min) {
        console.log(min)
        this.currentValue = min
        
      } else {
        console.log('value')
        this.currentValue = value
      }
      console.log(this.currentValue)
    },
    updateValue (val) {
      if (val >= this.max) val = this.max
      if (val <= this.min) val = this.min
        this.currentValue = val
    }
  }
})