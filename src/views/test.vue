<template>
  <div>
    <!-- <input type="text" @input="event => message = event.target.value" :value="message"> -->
    <div>{{a}}</div>
    <hello :text="text"></hello>
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
      inheritAttrs: 'this is value of inheritAttrs'
    }
  },
  components: {
    Hello
  },
  computed: {
    // ctext2 () {
    //   console.log('computed')
    //   return 1
    // }
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
  created () {
    // setInterval(() => {
    //   this. += '!'
    // }, 1000)
    console.log('change on dev')
  }
}
</script>

<style>

</style>
