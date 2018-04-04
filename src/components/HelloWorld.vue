<template>
  <div class="hello">
    {{text}}
    <div>
      {{message()}}
      <div>
        <!-- 很奇怪官方文档明明说要:inheritAttrs="$attrs.inheritAttrs"通过$attrs才能拿到这个没有被声明的proprs，为什么这里$attrs反而拿不到，直接传过去反而是可以拿到的 -->
        <!-- 这段注释也没有被保留，真的是奇怪，我的vue的版本是2.5.2，没道理的啊 -->
        <!-- <grand-child :inheritAttrs="inheritAttrs"></grand-child> -->
      </div>
    </div>
  </div>
</template>

<script>
import GrandChild from '@/components/GrandChild'
export default {
  name: 'HelloWorld',
  comments: true,
  props: {
    text: {
      required: false
    },
    inheritAttrs: false
  },
  components: {
    GrandChild
  },
  computed: {
    textModel: {
      get () {
        return this.text
      },
      set (val) {
        this.$emit('update:text', val)
      },
      cache: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    message () {
      console.log('zizujian gengxin')
    }
  },
  watch: {},
  created () {
    console.log(this.inheritAttrs)
    setInterval(() => {
      // this.textModel += 'abc'
      // this.obj.name += 'qj'
    }, 1000)
  }
}
</script>
<style>
.text {
  color: pink;
}
</style>

