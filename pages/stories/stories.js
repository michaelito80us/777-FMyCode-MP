// pages/stories/index.js
const app = getApp()
const url = app.globalData.host[app.globalData.env]

Page({

  /**
   * Page initial data
   */
  data: {
    show: true,
    meal: 'breakfast',
    title: "stories",
   
  },

  makeFalse(e){
    console.log(e)
    this.setData({show: false})
  },

  showStory(e){

    // console.log('event', e)

    let id = e.currentTarget.dataset.id

    
    // console.log({id})

    wx.navigateTo({
      url: `/pages/stories/show?anything=${id}`,
    })
  },

  // editStory(e){
  //   console.log(e)
  //   let index = e.currentTarget.dataset.index

  //   wx.navigateTo({
  //     url: `/pages/stories/edit?index=${index}`,
  //   })
  // },

  buttonClick(){
    // this.setData({title: 'time for lunch'})
    // go to a new page to create a post
    wx.navigateTo({
      url: '/pages/stories/new',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
    // let  stories = app.globalData.stories
    // this.setData({stories})
    const page = this

    console.log({url})
    wx.showLoading({
      title: 'Loading',
    })
    wx.request({
      url: `${url}/stories`,
      method: 'GET',
      success(res){
        console.log({res})
        page.setData({stories: res.data.stories})
        wx.hideLoading()
      }
    })

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