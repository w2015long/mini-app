"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var request_1 = require("../../../utils/request");
var util_1 = require("../../../utils/util");
Page({
    data: {
        requestUrl: '',
        totalCount: 0,
        totalData: [],
        isEnd: false,
        title: '更多电影'
    },
    onLoad: function (options) {
        var type = options.type;
        var baseUrl = app.globalData.movieBaseUrl;
        var requestUrl = '';
        var title = '';
        switch (type) {
            case 'hot':
                requestUrl = baseUrl + "/search_subjects?type=movie&tag=\u70ED\u95E8";
                title = '热门电影';
                break;
            case 'coming':
                requestUrl = baseUrl + "/search_subjects?type=movie&tag=\u6700\u65B0";
                title = '最新电影';
                break;
            case 'top250':
                requestUrl = baseUrl + "/search_subjects?type=movie&tag=\u8C46\u74E3\u9AD8\u5206";
                title = '豆瓣高分';
                break;
            default:
                break;
        }
        this.data.requestUrl = requestUrl;
        this.setData({
            title: title,
        });
        this.handleLoadMovie(this.data.requestUrl);
    },
    handleLoadMovie: function (url, isPull) {
        return __awaiter(this, void 0, void 0, function () {
            var result, formatMovie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request_1.request({
                            header: {
                                "Content-Type": "application/text"
                            },
                            url: url,
                        })];
                    case 1:
                        result = _a.sent();
                        if (isPull) {
                            wx.hideNavigationBarLoading();
                        }
                        formatMovie = util_1.formatMovieList(result.subjects);
                        this.handleGetMovie(formatMovie, isPull);
                        return [2];
                }
            });
        });
    },
    handleGetMovie: function (movieList, isPull) {
        wx.hideNavigationBarLoading();
        if (movieList.length == 0) {
            wx.showToast({
                title: '我是有底线的',
            });
            this.data.isEnd = true;
            return;
        }
        if (isPull) {
            this.setData({
                totalCount: 0,
                totalData: [],
            });
        }
        this.data.totalCount += movieList.length;
        this.data.totalData = this.data.totalData.concat(movieList);
        this.setData({
            movies: this.data.totalData
        });
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        this.handleLoadMovie(this.data.requestUrl, true);
    },
    onReachBottom: function () {
        if (this.data.isEnd) {
            wx.showToast({
                title: '我是有底线的',
            });
            return;
        }
        wx.showNavigationBarLoading();
        var nextUrl = this.data.requestUrl + '&page_start=' + this.data.totalCount + '&page_limit=20';
        console.log(nextUrl);
        this.handleLoadMovie(nextUrl);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWVNb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92aWVNb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDbkIsa0RBQWlEO0FBQ2pELDRDQUFpRDtBQUNqRCxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxDQUFDO1FBQ2IsU0FBUyxFQUFFLEVBQUU7UUFDYixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsTUFBTSxFQUFOLFVBQU8sT0FBTztRQUNGLElBQUEsSUFBSSxHQUFLLE9BQU8sS0FBWixDQUFhO1FBQ3pCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzFDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssS0FBSztnQkFDTixVQUFVLEdBQUcsT0FBTyxHQUFHLDhDQUFvQyxDQUFDO2dCQUM1RCxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNmLE1BQUs7WUFDVCxLQUFLLFFBQVE7Z0JBQ1QsVUFBVSxHQUFHLE9BQU8sR0FBRyw4Q0FBb0MsQ0FBQztnQkFDNUQsS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDZixNQUFLO1lBQ1QsS0FBSyxRQUFRO2dCQUNULFVBQVUsR0FBRyxPQUFPLEdBQUcsMERBQXNDLENBQUM7Z0JBQzlELEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ2YsTUFBSztZQUNUO2dCQUNJLE1BQUs7U0FDWjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsS0FBSyxPQUFBO1NBQ1IsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDSyxlQUFlLEVBQXJCLFVBQXNCLEdBQVEsRUFBRSxNQUFnQjs7Ozs7NEJBQ3hCLFdBQU0saUJBQU8sQ0FBQzs0QkFDOUIsTUFBTSxFQUFFO2dDQUNKLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ3JDOzRCQUNELEdBQUcsS0FBQTt5QkFDTixDQUFDLEVBQUE7O3dCQUxJLE1BQU0sR0FBUSxTQUtsQjt3QkFDRixJQUFJLE1BQU0sRUFBRTs0QkFDUixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzt5QkFDakM7d0JBQ0ssV0FBVyxHQUFHLHNCQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDNUM7SUFDRCxjQUFjLEVBQWQsVUFBZSxTQUFjLEVBQUUsTUFBZ0I7UUFDM0MsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDOUIsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFNO1NBQ1Q7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7YUFDaEIsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM5QixDQUFDLENBQUE7SUFDTixDQUFDO0lBSUQsaUJBQWlCLEVBQUU7UUFDZixFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFLRCxhQUFhLEVBQUU7UUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTTtTQUNUO1FBQ0QsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUE7UUFFN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO1FBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbW92aWUvbW92aWUtbW9yZS5qc1xyXG52YXIgYXBwID0gZ2V0QXBwKCk7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9yZXF1ZXN0JztcclxuaW1wb3J0IHsgZm9ybWF0TW92aWVMaXN0IH0gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICByZXF1ZXN0VXJsOiAnJyxcclxuICAgICAgICB0b3RhbENvdW50OiAwLFxyXG4gICAgICAgIHRvdGFsRGF0YTogW10sXHJcbiAgICAgICAgaXNFbmQ6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiAn5pu05aSa55S15b2xJ1xyXG4gICAgfSxcclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBvcHRpb25zO1xyXG4gICAgICAgIHZhciBiYXNlVXJsID0gYXBwLmdsb2JhbERhdGEubW92aWVCYXNlVXJsO1xyXG4gICAgICAgIHZhciByZXF1ZXN0VXJsID0gJyc7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gJyc7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hvdCc6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gYmFzZVVybCArIGAvc2VhcmNoX3N1YmplY3RzP3R5cGU9bW92aWUmdGFnPeeDremXqGA7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9ICfng63pl6jnlLXlvbEnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnY29taW5nJzpcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSBiYXNlVXJsICsgYC9zZWFyY2hfc3ViamVjdHM/dHlwZT1tb3ZpZSZ0YWc95pyA5pawYDtcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gJ+acgOaWsOeUteW9sSc7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICd0b3AyNTAnOlxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IGJhc2VVcmwgKyBgL3NlYXJjaF9zdWJqZWN0cz90eXBlPW1vdmllJnRhZz3osYbnk6Ppq5jliIZgO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSAn6LGG55Oj6auY5YiGJztcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEucmVxdWVzdFVybCA9IHJlcXVlc3RVcmw7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkTW92aWUodGhpcy5kYXRhLnJlcXVlc3RVcmwpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGhhbmRsZUxvYWRNb3ZpZSh1cmw6IGFueSwgaXNQdWxsPzogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi90ZXh0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1B1bGwpIHtcclxuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdE1vdmllID0gZm9ybWF0TW92aWVMaXN0KHJlc3VsdC5zdWJqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHZXRNb3ZpZShmb3JtYXRNb3ZpZSwgaXNQdWxsKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVHZXRNb3ZpZShtb3ZpZUxpc3Q6IGFueSwgaXNQdWxsPzogYm9vbGVhbikge1xyXG4gICAgICAgIHd4LmhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgICAgIGlmIChtb3ZpZUxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5piv5pyJ5bqV57q/55qEJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmlzRW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1B1bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICB0b3RhbENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWxEYXRhOiBbXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhLnRvdGFsQ291bnQgKz0gbW92aWVMaXN0Lmxlbmd0aDtcclxuICAgICAgICB0aGlzLmRhdGEudG90YWxEYXRhID0gdGhpcy5kYXRhLnRvdGFsRGF0YS5jb25jYXQobW92aWVMaXN0KTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgbW92aWVzOiB0aGlzLmRhdGEudG90YWxEYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvKipcclxuICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICovXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHd4LnNob3dOYXZpZ2F0aW9uQmFyTG9hZGluZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTG9hZE1vdmllKHRoaXMuZGF0YS5yZXF1ZXN0VXJsLCB0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgICAqL1xyXG4gICAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaXNFbmQpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5oiR5piv5pyJ5bqV57q/55qEJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKVxyXG4gICAgICAgIC8vICZwYWdlX2xpbWl0PTIwJnBhZ2Vfc3RhcnQ9MFxyXG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSB0aGlzLmRhdGEucmVxdWVzdFVybCArICcmcGFnZV9zdGFydD0nICsgdGhpcy5kYXRhLnRvdGFsQ291bnQgKyAnJnBhZ2VfbGltaXQ9MjAnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5leHRVcmwpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVMb2FkTW92aWUobmV4dFVybCk7XHJcbiAgICB9LFxyXG59KTsiXX0=