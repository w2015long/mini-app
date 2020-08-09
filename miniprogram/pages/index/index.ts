//index.js
//获取应用实例
import { IMyApp } from '../../app';
import { request } from '../../utils/request';
const app = getApp<IMyApp>();

Page({
    data: {
        // 轮播图数组
        swiperList: [],
        // 导航 数组
        categories: [],
    },
    //事件处理函数
    onLoad() {
        this.getSwiperList();
        this.getNavigatorList();
    },
    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function () {
    },
    // 获取轮播图数据
    async getSwiperList(){
        // /home/swiperdata
        const result = await request({ url: '/home/swiperdata' });
        this.setData!({
            swiperList: result,
        })
    },
    // 获取分类导航数据
    async getNavigatorList(){
        const result = await request({ url: '/home/catitems' });
        this.setData!({
            categories: result,
        })
    },
})
