// pages/Release/join_res/join_res.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gztype: '关注',
    getfous:true,
    send_iptValue:'评论'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
   /**
   * 关注
   */
  gz() {
    this.setData({
      isgz: true,
      gztype: '已关注'
    })
  },
  /**
   * 输入框获得焦点
   */
  myipt(){
    this.setData({
      getfous:false
    })
  },
  /**
   * 输入框失去焦点
   */
  hidemyipt(){
    this.setData({
      getfous: true
    })
  }
})