// pages/profile/profile.js
//获取应用实例
// import { IMyApp } from '../../app'
// const app = getApp<IMyApp>();
Page({
  data: {
    userinfo:{},
    // 被收藏的商品的数量
    collectNums:0,
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
  },
  onShow(){
    this.getUserInfo();
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData!({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData!({
          starCount: that.coutNum(3000),
          forksCount: that.coutNum(484),
          visitTotal: that.coutNum(24000)
        })
      }
    }
    wx.hideLoading()
  },
  handleGetUserInfo(e: any){
    // console.log(e);
    const { userInfo } = e.detail;
    wx.setStorageSync("userinfo", userInfo);
    this.getUserInfo();
  },
  getUserInfo() {
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];
    this.setData!({userinfo,collectNums:collect.length});  
  },
  coutNum(e) {
    if (e > 1000 && e < 10000) {
      e = (e / 1000).toFixed(1) + 'k'
    }
    if (e > 10000) {
      e = (e / 10000).toFixed(1) + 'W'
    }
    return e
  },
})
