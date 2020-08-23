// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatList: [
      {
        id: 0, 
        avatar: '../../icons/avatar-jason.jpg',
        name: 'JasonWang',
        message: '[图片]',
        date: '18:32'
      },
      {
        id: 1, 
        avatar: 'https://st-cn.meishij.net/user/69/207/ns2801819_147937132568875.jpg',
        name: '科室-护',
        message: '好的',
        date: '14:06'
      },
      {
        id: 2, 
        avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3526287864,2288992690&fm=26&gp=0.jpg',
        name: '三院-张',
        message: '一会到家',
        date: '16:12'
      },
    ],
  },
  goChat (e) {
    wx.navigateTo({
      url: '../chat/chat'
    });
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

  }
})