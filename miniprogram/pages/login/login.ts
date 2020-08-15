Page({
    data: { 
    },
    handleGetUserInfo(e: any){
        // console.log(e);
        const { userInfo } = e.detail;
        wx.setStorageSync("userinfo", userInfo);
        wx.navigateBack({
          delta: 1
        });
          
      }
});