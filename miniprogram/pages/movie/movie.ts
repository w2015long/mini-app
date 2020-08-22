// pages/movie/movie.js

import { request } from '../../utils/request';
import { formatMovieList } '../../utils/util';
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        animation: '',
        name: 'shake'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.getHotMovie();
        this.getTopMovie();
        this.getNewMovie();
    },
    async getHotMovie() {
        const base = app.globalData.movieBaseUrl;
        const url = base + `/search_subjects?type=movie&tag=热门&page_limit=3&page_start=0`;
        const result: any = await request({
            header: {
                "Content-Type": "application/text"
            },
            url,
        });
        const hotData = formatMovieList(result.subjects);
        this.setData!({
            hotData,
            hotTag: '正在热映',
            hotType: 'hot'
        })
    },
    async getNewMovie() {
        const base = app.globalData.movieBaseUrl;
        const url = base + `/search_subjects?type=movie&tag=最新&page_limit=3&page_start=0`;
        const result: any = await request({
            header: {
                "Content-Type": "application/text"
            },
            url,
        });
        const comingData = formatMovieList(result.subjects);
        this.setData!({
            comingData,
            comingTag: '最新',
            comingType: 'coming'
        })
    },
    async getTopMovie() {
        const base = app.globalData.movieBaseUrl;
        const url = base + `/search_subjects?type=movie&tag=豆瓣高分&page_limit=3&page_start=0`;
        const result: any = await request({
            header: {
                "Content-Type": "application/text"
            },
            url,
        });
        const top250Data = formatMovieList(result.subjects);
        this.setData!({
            top250Data,
            top250Tag: '豆瓣高分',
            top250Type: 'top250'
        })
    },
    toggle(e: any) {
        var anmiaton = e.currentTarget.dataset.class;
        var that = this;
        that.setData!({
            animation: anmiaton
        })
        setTimeout(function () {
            that.setData!({
                animation: ''
            })
        }, 1000)
    },
    bandleMore: function (ev: any) {
        console.log(ev.currentTarget.dataset.type);
        var type = ev.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../movie/movieMore/movieMore?type=' + type,
        })
    }
})