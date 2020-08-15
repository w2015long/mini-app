// pages/profile/profile.js
//获取应用实例
// import { IMyApp } from '../../app'
// const app = getApp<IMyApp>();
Page({
  data: {
    userinfo:{},
    // 被收藏的商品的数量
    collectNums:0
  },
  onShow(){
    this.getUserInfo();
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
  }
})
