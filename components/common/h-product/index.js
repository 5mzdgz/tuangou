// components/h-product/index.js
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
      default: []
    }
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      console.log(this.properties.prodcutArr)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + id
      })
    }
  }
})
