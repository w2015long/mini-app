// pages/movie/movie-more.js
var app = getApp();
import { request } from '../../../utils/request';
import { formatMovieList } '../../../utils/util';
Page({
    data: {
        requestUrl: '',
        totalCount: 0,
        totalData: [],
        isEnd: false,
        title: '更多电影'
    },
    onLoad(options) {
        const { type } = options;
        var baseUrl = app.globalData.movieBaseUrl;
        var requestUrl = '';
        var title = '';
        switch (type) {
            case 'hot':
                requestUrl = baseUrl + `/search_subjects?type=movie&tag=热门`;
                title = '热门电影';
                break
            case 'coming':
                requestUrl = baseUrl + `/search_subjects?type=movie&tag=最新`;
                title = '最新电影';
                break
            case 'top250':
                requestUrl = baseUrl + `/search_subjects?type=movie&tag=豆瓣高分`;
                title = '豆瓣高分';
                break
            default:
                break
        }
        this.data.requestUrl = requestUrl;
        this.setData!({
            title,
        })
        this.handleLoadMovie(this.data.requestUrl);
    },
    async handleLoadMovie(url: any, isPull?: boolean) {
        const result: any = await request({
            header: {
                "Content-Type": "application/text"
            },
            url,
        });
        if (isPull) {
            wx.hideNavigationBarLoading();
        }
        const formatMovie = formatMovieList(result.subjects);
        this.handleGetMovie(formatMovie, isPull);
    },
    handleGetMovie(movieList: any, isPull?: boolean) {
        wx.hideNavigationBarLoading();
        if (movieList.length == 0) {
            wx.showToast({
                title: '我是有底线的',
            })
            this.data.isEnd = true;
            return
        }
        if (isPull) {
            this.setData!({
                totalCount: 0,
                totalData: [],
            })
        }
        this.data.totalCount += movieList.length;
        this.data.totalData = this.data.totalData.concat(movieList);
        this.setData!({
            movies: this.data.totalData
        })
    },
    /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        this.handleLoadMovie(this.data.requestUrl, true);
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.isEnd) {
            wx.showToast({
                title: '我是有底线的',
            });
            return
        }
        wx.showNavigationBarLoading()
        // &page_limit=20&page_start=0
        const nextUrl = this.data.requestUrl + '&page_start=' + this.data.totalCount + '&page_limit=20';
        console.log(nextUrl)
        this.handleLoadMovie(nextUrl);
    },
});