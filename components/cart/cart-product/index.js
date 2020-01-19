// components/cart/cart-product/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cartArray: [
      {
        id: '1',
        thumbUrl: 'https://cdnimg.pfhoo.com/Pro/s/20180404/8a22565d-9bb3-4b87-bf58-00e9db0e2d28.jpg',
        title: '大英博物馆珠宝首饰系列“OK”首饰',
        spec: 'K黄',
        price: '199.10',
        num: 1,
        total: 10
      }, {
        id: '2',
        thumbUrl: 'https://cdnimg.pfhoo.com/Pro/s/20180404/8a22565d-9bb3-4b87-bf58-00e9db0e2d28.jpg',
        title: '大英博物馆珠宝首饰系列“OK”首饰',
        spec: 'K黄',
        price: '899.20',
        num: 1,
        total: 1
      }
    ],
    startX: 0, //开始坐标
    startY: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchstart(e) {//移动前点击的位置
      // console.log(e)
      // 在开始触摸时将所有startTouchMove设置为flase,对当前的为true
      this.data.cartArray.forEach(cart => {
        if (cart.isTouchMove)//当istouchMove为true
          cart.isTouchMove = false;//其它的对象都为false
      })
      this.setData({
        startX: e.changedTouches[0].clientX,
        startY: e.changedTouches[0].clientY,
        cartArray: this.data.cartArray
      })
    },
    touchmove(e) {//移动的位置,用于计算用户滑动的弧度向左还是向右,移动了多少,可以确定删除功能的显示和隐藏
      let index = e.currentTarget.dataset.index;
      // 获取开始的x,y坐标
      let startX = this.data.startX,
        startY = this.data.startY;
      // 获取移动的x,x坐标
      let touchMoveX = e.changedTouches[0].clientX,
        touchMoveY = e.changedTouches[0].clientY;
      // 调用计算角度的方法,获取角度
      var angel = this.angel({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY })
      // 遍历cartArray
      this.data.cartArray.forEach((cart, i) => {
        cart.isTouchMove = false;
        // 滑动角度大于30,直接return 视为非滑动意思
        if (Math.abs(angel) > 30) return;
        // 匹配当前所点击的list和滑动的list
        if (i == index) {
          // 匹配上后判断滑动方向
          if (touchMoveX > startX) {//左滑动隐藏删除
            cart.isTouchMove = false;
          } else {
            cart.isTouchMove = true;
          }
        }
      })
      // 更新数据
      this.setData({
        cartArray: this.data.cartArray
      })
    },
    angel(start, end) {//计算滑动的角度 
      // console.log(start,end)
      // 移动坐标减去对应的开始坐标
      var _X = end.X - start.X,
        _Y = end.Y - start.Y;
      // 返回角度 Math.atan() 返回数字的正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
    }
  }
})
