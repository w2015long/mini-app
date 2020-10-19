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
    count: 0,
    albumList: [
      { id: 0, imgUrl: 'https://img.alicdn.com/imgextra/i2/6000000006053/O1CN01HffIb91uaK0uSiWvR_!!6000000006053-0-octopus.jpg' },
      { id: 1, imgUrl: 'https://img.alicdn.com/imgextra/i4/6000000001122/O1CN01h1tZ5p1K9v0sfGQ4D_!!6000000001122-0-octopus.jpg' },
      { id: 1, imgUrl: 'http://dfs2.520shq.com:80/group1/M00/07/AE/wKgAC19A1yOAQIZuAAXCDfbQmes925.jpg' },

    ],
  },
  handleItemTap(e: any) {
    const { index } = e.currentTarget.dataset;
    if (index === 2) {
      let _count = this.data.count + 1;
      console.log(_count);
      this.setData!({
        slectIndex: index,
        count: _count,
      });
      if (_count === 4) {
        wx.switchTab({
          url: "../index/index"
        })
      }
    } else {
      this.setData!({
        slectIndex: index,
        count: 0,
      });
    }
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
