Page({
  data: {
    InputBottom: 0,
    jason: 'http://dfs2.520shq.com/group1/M00/07/AE/wKgAC19AitqAHTLCAACpDqui1Ks267.jpg',
    yang: 'http://dfs2.520shq.com:80/group1/M00/07/AE/wKgAC19Ai0CAe0XwAACPvN2bEFs373.jpg',
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  }
})