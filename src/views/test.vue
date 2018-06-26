<template>
  <div>
    <!-- <input type="text" @input="event => message = event.target.value" :value="message"> -->
    <!-- <div>{{a}}</div>
    <hello :text="text"></hello> -->
    <div class="test" v-for="(item, index) in itemList" :key="index">{{item}}</div>
    <div>{{obj.name}}</div>
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
import Hello from '@/components/HelloWorld'
let num = 0
export default {
  data () {
    return {
      message: '1 2 3',
      text: 1,
      a: 2,
      text2: 'text2',
      inheritAttrs: 'this is value of inheritAttrs',
      itemList: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      obj: {
        name: 'hhff'
      }
    }
  },
  components: {
    Hello
  },
  computed: {
    ctext2: {
      get () {
        console.log('computed')
        this.text2 += '111'
        return this.text2
      },
      set () {
      },
      cache: true
    }
  },
  watch: {
    message (cval, oldval) {
      console.log(cval)
    },
    text: {
      handler (c) {
        console.log(c, num++)
      },
      deep: false
    }
  },
  methods: {
    handleClick () {
      // this.obj = {name: 'setting', sex: 1}
      // console.log(this.obj)
      this.obj.name = 'hh'
      // this.itemList.push('I')
    }
  },
  beforeCreate () {
  },
  created () {
    // this.handleClick()
  }
}
</script>

<style>

</style>
