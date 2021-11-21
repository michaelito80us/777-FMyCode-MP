// pages/stories/show.js
const app = getApp()
const url = app.globalData.host[app.globalData.env]

Page({

  /**
   * Page initial data
   */
  data: {
    // id: 1,
    // title: 'fake fire drills',
    // details: 'they made us go up and down without purpose. just wasted our time'

  },

  deleteStory(e){
    const page = this
    const id = page.data.id
    wx.request({
      url: `${url}/stories/${id}`,
      method: 'DELETE',
      success(res) {
        console.log('from show',res)
        wx.reLaunch({
          url: '/pages/stories/stories',
        })
      },
      
    })
  },

  editStory(e){
    const page = this

    const title = page.data.title
    const details = page.data.details
    const id = page.data.id
    wx.navigateTo({
      url: `/pages/stories/edit?title=${title}&details=${details}&id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this

    // console.log('option', options)
    let id = options.anything

    wx.request({
      url: `${url}/stories/${id}`,
      success(res) {
        console.log(res)
        page.setData(res.data)
      }
    })

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