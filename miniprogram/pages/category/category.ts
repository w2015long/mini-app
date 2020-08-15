// pages/category/category.js
interface albumType {
  id: number;
  imgUrl: string;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slectIndex: -1,
    albumList: [
      { id: 0, imgUrl: 'https://gd1.alicdn.com/imgextra/i1/2200717121882/O1CN01ekJbXi1PlzzUgk1Ff_!!2200717121882.jpg' },
      { id: 1, imgUrl: 'https://gd1.alicdn.com/imgextra/i3/2200717121882/O1CN01D6bJCb1PlzzUKmSBC_!!2200717121882-0-lubanu-s.jpg' },
      { id: 2, imgUrl: 'https://gd1.alicdn.com/imgextra/i4/2200717121882/O1CN01UaHrsj1Pm004sn3Yx_!!2200717121882.jpg' },
      // { id: 4, imgUrl: 'https://gd2.alicdn.com/imgextra/i2/2200717121882/O1CN01dxDBZ31Plzzx4CfiP_!!2200717121882-0-lubanu-s.jpg' },
    ],
  },
  handleItemTap(e: any) {
    const { index } = e.currentTarget.dataset;
    this.setData!({
      slectIndex: index
    })
  }

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
})