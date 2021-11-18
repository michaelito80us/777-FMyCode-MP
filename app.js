// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {

    userInfo: null,
    stories: [
      {
        id: 1,
        title: 'fake fire drills',
        details: 'they made us go up and down without purpose. just wasted our time'
      },{
        id: 2,
        title: 'class on saturdays',
        details: 'WTF!!'
      }
    ]

  }
})
