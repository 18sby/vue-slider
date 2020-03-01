## Use in vue project

#### demo演示
![demo](https://github.com/18sby/vue-touch-slide/blob/master/demo.gif)

```
npm install vue-touch-slide --save
```

```js
import Vue from 'vue';
import VueTouchSlide from 'vue-touch-slide';

Vue.use( VueTouchSlide );
```

#### 在 .vue 组件中的使用方式
```js
<template>
  <div>
    <vue-touch-slide
      :total="1000"
      :current="390"
      @touchstart="touchstart"
      @touchend="touchend"
    />
  </div>
</template>
```

#### 可配置属性
```js
total: { // 总进度
  type: Number,
  default: 300,
},

current: { // 实时进度，不超过 total 即可
  type: Number,
  default: 28
},

trackColor: { // 轨道的颜色
  type: String,
  default: 'rgba(228,233,234,1)'
},

textColor: { // 滑块上文字的颜色
  type: String,
  default: '#fff'
},

pivotColor: { // 已走过的进度的颜色
  type: String,
  default: 'rgba(244,186,65,1)'
},

sliderColor: { // 滑块的颜色
  type: String,
  default: 'rgba(244,186,65,1)'
},

sliderWidth: { // 滑块的宽度
  type: Number,
  default: 80
},

pivotText: { // 滑块上的文字
  type: [String, Number],
  default: ''
}
```

#### 可使用的方法
```js
methods: {
  // rate 为进度条的百分比
  // 开始滑动
  touchstart(rate) {
    console.log( '开始滑动: ', rate );
  },

  // 停止滑动
  touchend(rate) {
    console.log( '结束滑动: ', rate );
  }
}
```

#### 一个完全的配置实例
```js
<vue-touch-slide
  :total="1000"
  :current="390"
  trackColor="red"
  textColor="#333"
  pivotColor="rgba(156,127,233,1)"
  sliderColor="#777"
  :sliderWidth="50"
  pivotText="我是滑块文字"
  @touchstart="touchstart"
  @touchend="touchend"
/>
```