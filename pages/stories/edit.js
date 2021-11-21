// pages/stories/edit.js
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
    let id = this.data.id
    // data.stories.push({title: title, details: details})
    wx.request({
      url: `${url}/stories/${id}`,
      method: 'PUT',
      data: {title: title, details: details},
      success(res) {
        console.log ('res from update', res)
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
    const page = this
    console.log('options for edit', options)

    page.setData({
      title: options.title, 
      details: options.details, 
      id: options.id})

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