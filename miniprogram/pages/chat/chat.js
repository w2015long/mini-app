Page({
  data: {
    InputBottom: 0,
    jason: 'http://dfs2.520shq.com/group1/M00/07/AE/wKgAC19AitqAHTLCAACpDqui1Ks267.jpg',
    yang: 'http://dfs2.520shq.com:80/group1/M00/07/AE/wKgAC19Ai0CAe0XwAACPvN2bEFs373.jpg',
  },
  onReady: function () {
    var that = this
    var query = wx.createSelectorQuery()
    query.selectAll('#chat').boundingClientRect()//查询id=input和class=group的页面元素
    query.exec(function (res) {
      const [[{ height }]] = res;
      that.setData({ height });
    })
  },
  onLoad() {
    // console.log(window)
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    });
    // wx.pageScrollTo({
    //   scrollTop: this.data.height + e.detail.height,
    //   duration: 300
    // })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0,
      // scrollTop: this.data.height
    })
  }
})