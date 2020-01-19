// components/my/group/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    iconUrl: {
      type: String,
      default: ''
    },
    rightSub: {
      type: String,
      default: ''
    },
    leftName: {
      type: String,
      default: ''
    },
    pageUrl: {
      type: String,
      default: ''
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
    goClickUrl(e) {
      const pageurl = e.currentTarget.dataset.pageurl;
      wx.navigateTo({
        url: pageurl,
      })
    }
  }
})
