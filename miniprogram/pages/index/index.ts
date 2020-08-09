//index.js
//获取应用实例
// import { IMyApp } from '../../app';
import { request } from '../../utils/request.ts';
// const app = getApp<IMyApp>();

Page({
    data: {
        // 轮播图数组
        swiperList: [],
    },
    //事件处理函数
    onLoad() {
        this.getSwiperList();
        console.log(999);
    },
    // 获取轮播图数据
    async getSwiperList(){
        // /home/swiperdata
        const result = await request({ url: '/home/swiperdata' });
        console.log(result);
        this.setData({
            swiperList: result,
        })
    },
})
