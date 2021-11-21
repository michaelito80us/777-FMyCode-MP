// pages/stories/new.js
const app = getApp()
const data = app.globalData
const url = app.globalData.host[app.globalData.env]


Page({

  /**
   * Page initial data
   */
  data: {

  },

  formSubmit(e){
    // console.log(e)
    let title = e.detail.value.title
    let details = e.detail.value.details
    // data.stories.push({title: title, details: details})
    wx.request({
      url: `${url}/stories`,
      method: 'POST',
      data: {title: title, details: details},
      success(res) {
        console.log ({res})
      }
    })
  
  // debugger
  wx.showToast({
    title: 'Added',
    })
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/stories/stories',
      })
    }, 1000); 
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})