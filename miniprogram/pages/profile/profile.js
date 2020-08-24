"use strict";
Page({
    data: {
        userinfo: {},
        collectNums: 0,
        starCount: 0,
        forksCount: 0,
        visitTotal: 0,
        slideBarList: [
            { id: 0, text: '爱' },
            { id: 1, text: '心' },
            { id: 2, text: '1' },
            { id: 3, text: '3' },
            { id: 4, text: '1' },
            { id: 5, text: '4' },
            { id: 6, text: '连' },
            { id: 7, text: '击' },
        ],
    },
    onShow: function () {
        this.getUserInfo();
        var that = this;
        wx.showLoading({
            title: '数据加载中',
            mask: true,
        });
        var i = 0;
        numDH();
        function numDH() {
            if (i < 20) {
                setTimeout(function () {
                    that.setData({
                        starCount: i,
                        forksCount: i,
                        visitTotal: i
                    });
                    i++;
                    numDH();
                }, 20);
            }
            else {
                that.setData({
                    starCount: that.coutNum(3000),
                    forksCount: that.coutNum(685),
                    visitTotal: that.coutNum(68000)
                });
            }
        }
        wx.hideLoading();
    },
    handleGetUserInfo: function (e) {
        var userInfo = e.detail.userInfo;
        wx.setStorageSync("userinfo", userInfo);
        this.getUserInfo();
    },
    getUserInfo: function () {
        var userinfo = wx.getStorageSync("userinfo");
        var collect = wx.getStorageSync("collect") || [];
        this.setData({ userinfo: userinfo, collectNums: collect.length });
    },
    coutNum: function (e) {
        if (e > 1000 && e < 10000) {
            e = (e / 1000).toFixed(1) + 'k';
        }
        if (e > 10000) {
            e = (e / 10000).toFixed(1) + 'W';
        }
        return e;
    },
    showModal: function (e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        });
    },
    hideModal: function (e) {
        this.setData({
            modalName: null
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBQyxFQUFFO1FBRVgsV0FBVyxFQUFDLENBQUM7UUFDYixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2IsVUFBVSxFQUFFLENBQUM7UUFDYixZQUFZLEVBQUU7WUFDWixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtTQUNyQjtLQUNGO0lBQ0QsTUFBTSxFQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ2IsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUssRUFBRSxDQUFDO1FBQ1IsU0FBUyxLQUFLO1lBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNWLFVBQVUsQ0FBQztvQkFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFNBQVMsRUFBRSxDQUFDO3dCQUNaLFVBQVUsRUFBRSxDQUFDO3dCQUNiLFVBQVUsRUFBRSxDQUFDO3FCQUNkLENBQUMsQ0FBQTtvQkFDRixDQUFDLEVBQUUsQ0FBQTtvQkFDSCxLQUFLLEVBQUUsQ0FBQztnQkFDVixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7YUFDUDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDN0IsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ2hDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBQ0QsaUJBQWlCLEVBQWpCLFVBQWtCLENBQU07UUFFZCxJQUFBLFFBQVEsR0FBSyxDQUFDLENBQUMsTUFBTSxTQUFiLENBQWM7UUFDOUIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxXQUFXLEVBQVg7UUFDRSxJQUFNLFFBQVEsR0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQU0sT0FBTyxHQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUUsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBQyxRQUFRLFVBQUEsRUFBQyxXQUFXLEVBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELE9BQU8sWUFBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDekIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7U0FDaEM7UUFDRCxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtTQUNqQztRQUNELE9BQU8sQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNELFNBQVMsRUFBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU07U0FDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFNBQVMsRUFBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHVzZXJpbmZvOnt9LFxuICAgIC8vIOiiq+aUtuiXj+eahOWVhuWTgeeahOaVsOmHj1xuICAgIGNvbGxlY3ROdW1zOjAsXG4gICAgc3RhckNvdW50OiAwLFxuICAgIGZvcmtzQ291bnQ6IDAsXG4gICAgdmlzaXRUb3RhbDogMCxcbiAgICBzbGlkZUJhckxpc3Q6IFtcbiAgICAgIHsgaWQ6IDAsIHRleHQ6ICfniLEnIH0sXG4gICAgICB7IGlkOiAxLCB0ZXh0OiAn5b+DJyB9LFxuICAgICAgeyBpZDogMiwgdGV4dDogJzEnIH0sXG4gICAgICB7IGlkOiAzLCB0ZXh0OiAnMycgfSxcbiAgICAgIHsgaWQ6IDQsIHRleHQ6ICcxJyB9LFxuICAgICAgeyBpZDogNSwgdGV4dDogJzQnIH0sXG4gICAgICB7IGlkOiA2LCB0ZXh0OiAn6L+eJyB9LFxuICAgICAgeyBpZDogNywgdGV4dDogJ+WHuycgfSxcbiAgICBdLFxuICB9LFxuICBvblNob3coKXtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5pWw5o2u5Yqg6L295LitJyxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgfSlcbiAgICBsZXQgaSA9IDA7XG4gICAgbnVtREgoKTtcbiAgICBmdW5jdGlvbiBudW1ESCgpIHtcbiAgICAgIGlmIChpIDwgMjApIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgICBzdGFyQ291bnQ6IGksXG4gICAgICAgICAgICBmb3Jrc0NvdW50OiBpLFxuICAgICAgICAgICAgdmlzaXRUb3RhbDogaVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgbnVtREgoKTtcbiAgICAgICAgfSwgMjApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LnNldERhdGEhKHtcbiAgICAgICAgICBzdGFyQ291bnQ6IHRoYXQuY291dE51bSgzMDAwKSxcbiAgICAgICAgICBmb3Jrc0NvdW50OiB0aGF0LmNvdXROdW0oNjg1KSxcbiAgICAgICAgICB2aXNpdFRvdGFsOiB0aGF0LmNvdXROdW0oNjgwMDApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgfSxcbiAgaGFuZGxlR2V0VXNlckluZm8oZTogYW55KXtcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSBlLmRldGFpbDtcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVzZXJpbmZvXCIsIHVzZXJJbmZvKTtcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gIH0sXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IHVzZXJpbmZvPXd4LmdldFN0b3JhZ2VTeW5jKFwidXNlcmluZm9cIik7XG4gICAgY29uc3QgY29sbGVjdD13eC5nZXRTdG9yYWdlU3luYyhcImNvbGxlY3RcIil8fFtdO1xuICAgIHRoaXMuc2V0RGF0YSEoe3VzZXJpbmZvLGNvbGxlY3ROdW1zOmNvbGxlY3QubGVuZ3RofSk7ICBcbiAgfSxcbiAgY291dE51bShlKSB7XG4gICAgaWYgKGUgPiAxMDAwICYmIGUgPCAxMDAwMCkge1xuICAgICAgZSA9IChlIC8gMTAwMCkudG9GaXhlZCgxKSArICdrJ1xuICAgIH1cbiAgICBpZiAoZSA+IDEwMDAwKSB7XG4gICAgICBlID0gKGUgLyAxMDAwMCkudG9GaXhlZCgxKSArICdXJ1xuICAgIH1cbiAgICByZXR1cm4gZVxuICB9LFxuICBzaG93TW9kYWwoZSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbW9kYWxOYW1lOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXJnZXRcbiAgICB9KVxuICB9LFxuICBoaWRlTW9kYWwoZSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbW9kYWxOYW1lOiBudWxsXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=