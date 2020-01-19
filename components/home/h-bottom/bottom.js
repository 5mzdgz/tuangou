// components/home/h-bottom/bottom.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    prodcutArr: {
      type: Array,
      value: ''
    },
    days: {
      type: String,
      value: ''
    },
    hours: {
      type: String,
      value: ''
    },
    min: {
      type: String,
      value: ''
    },
    sec: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    currentItem: 0,
    scrollx: true,
    navLobal: [
      { lobal: '正在抢购' },
      { lobal: '即将开抢' }
    ],
    navArr: [
      { categoryName: '全部', id: 1 },
      { categoryName: '全部全部', id: 2 },
      { categoryName: '全部全部', id: 3 },
      { categoryName: '全部全部', id: 4 },
      { categoryName: '全部全部', id: 5 },
      { categoryName: '全部全部', id: 6 },
      { categoryName: '全部全部', id: 7 },
      { categoryName: '全部全部', id: 8 }
    ]
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      // this.countTime();
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  ready: function () {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkoutTap(e) {
      this.setData({
        current: e.currentTarget.dataset.index
      })
    },
    selectedItemTap(e) {
      this.setData({
        currentItem: e.currentTarget.dataset.index
      })
    }
  }
})
