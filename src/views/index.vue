<template>
  <div class="index">
    <!-- <candy v-for="(item, index) in items" :key="item.id" :item="item.value" :items="items" :is="currentView" :id="item.id"></candy>
    <div>-------------------------------------------------</div>
    <snack v-for="(item, index) in items" :key="item.id" :item="item.value" :items="items" :id="item.id" :is="currentView"></snack> -->
    <!-- <button @click="changeTemplate"></button> button是内联元素 -->
    <!-- v-model同步了输入框和下面span里面的内容，但是加一个.lazy修饰符转变在change事件中同步
    input   change事件的在什么时候触发取决于input的type类型
    1 发生在默认选项发生改变的时候（通过点击事件或者键盘事件） 例如type为radio， checkbox
    2 当用户完成提交动作的时候  type = file时用户提交一个文件的时候
    3 input中值被修改且光标失去焦点（鼠标点击事件或者键盘事件），还没有完成提交之前 type = text
    https://developer.mozilla.org/zh-CN/docs/Web/Events/change   这里有更加详细的解释
    -->
    <!-- .lazy（将同步改在change事件发生时）  .number（类型固化，其实感觉应该就是强制类型转换）    .trim（去除首尾空格）  都是双向绑定时候的修饰符 -->
    <!-- <input v-model.lazy="inputValue">
    <div><span>{{inputValue}}</span></div> -->
    <!-- <span>falsy 是在Boolean上下文下可以转换为false的值</span> -->
    <!-- <div><span>{{now}}</span></div> -->
    <!-- <div><span>{{nowModel}}</span></div> -->
    <!-- <button @click="changeNow">来点我呀</button> -->
    <div><span>{{turn()}}</span></div>
    <div @click="turn"><span>{{nowModel}}</span></div>
    <!-- <input type="text" v-model="inputValue"/> -->
    <div :class="$style"><span>{{count}}</span></div>
    <div :class="$style.block" @mousemove="move"></div>
  </div>
</template>

<script>
import Candy from './candy'
import Snack from './snack'
import debounce from 'lodash/debounce'
// import throttle from 'lodash/throttle'
export default {
  data () {
    return {
      items: [
        {
          value: '壹',
          id: 1
        },
        {
          value: '贰',
          id: 2
        },
        {
          value: '叁',
          id: 3
        },
        {
          value: '肆',
          id: 4
        },
        {
          value: '伍',
          id: 5
        }
      ],
      // inputValue: 'hello',
      // currentView: Candy,
      count: 1,
      now: 1
    }
  },
  components: {
    Candy,
    Snack
  },
  mounted () {
    // console.log(this)
  },
  computed: {
    nowModel: {
      get () {
        return this.turn()
      }
      // cache: true
    }
  },
  methods: {
    // changeTemplate () {
    //   this.currentView = 'Snack'
    // },
    turn () {
      // console.log('turn function', Date.now())
      // this.now++
      if (!this._num) {
        this._num = 1
      } else {
        this._num++
      }
      console.log(this.$style, 'style')
      return this._num
      // return this.now < 1000000 ? this.now++ : 0
    },
    // changeNow () {
    //   this.now = Math.random()
    // },
    // move: throttle(function () {
    //   this.count++
    //   console.log('throttle 执行' + this.count + '次')
    // }, 3000)
    move: debounce(function () {
      this.count++
      console.log('debounce 执行' + this.count + '次')
    }, 3000)
      // console.log(this.now)
  }

}
</script>

<style module>
input {
  margin: 20px;
}
.block__number--debounce {
  position: relative;
  top: 140px;
  color:bisque;
  font-size: 40px;
}
.block--debounce {
  width: 1000px;
  height: 200px;
  margin: 20px auto;
  background-color: pink;
}
</style>
