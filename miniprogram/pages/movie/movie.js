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
var request_1 = require("../../utils/request");
var util_1 = require("../../utils/util");
var app = getApp();
Page({
    data: {},
    onLoad: function () {
        this.getHotMovie();
        this.getTopMovie();
        this.getNewMovie();
    },
    getHotMovie: function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, url, result, hotData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = app.globalData.movieBaseUrl;
                        url = base + "/search_subjects?type=movie&tag=\u70ED\u95E8&page_limit=3&page_start=0";
                        return [4, request_1.request({
                                header: {
                                    "Content-Type": "application/text"
                                },
                                url: url,
                            })];
                    case 1:
                        result = _a.sent();
                        hotData = util_1.formatMovieList(result.subjects);
                        this.setData({
                            hotData: hotData,
                            hotTag: '正在热映',
                            hotType: 'hot'
                        });
                        return [2];
                }
            });
        });
    },
    getNewMovie: function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, url, result, comingData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = app.globalData.movieBaseUrl;
                        url = base + "/search_subjects?type=movie&tag=\u6700\u65B0&page_limit=3&page_start=0";
                        return [4, request_1.request({
                                header: {
                                    "Content-Type": "application/text"
                                },
                                url: url,
                            })];
                    case 1:
                        result = _a.sent();
                        comingData = util_1.formatMovieList(result.subjects);
                        this.setData({
                            comingData: comingData,
                            comingTag: '最新',
                            comingType: 'coming'
                        });
                        return [2];
                }
            });
        });
    },
    getTopMovie: function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, url, result, top250Data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = app.globalData.movieBaseUrl;
                        url = base + "/search_subjects?type=movie&tag=\u8C46\u74E3\u9AD8\u5206&page_limit=3&page_start=0";
                        return [4, request_1.request({
                                header: {
                                    "Content-Type": "application/text"
                                },
                                url: url,
                            })];
                    case 1:
                        result = _a.sent();
                        top250Data = util_1.formatMovieList(result.subjects);
                        this.setData({
                            top250Data: top250Data,
                            top250Tag: '豆瓣高分',
                            top250Type: 'top250'
                        });
                        return [2];
                }
            });
        });
    },
    bandleMore: function (ev) {
        var type = ev.currentTarget.dataset.type;
        wx.navigateTo({
            url: '/pages/movie/movie-more/movie-more?type=' + type,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3ZpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtDQUE4QztBQUM5Qyx5Q0FBOEM7QUFDOUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDbkIsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxNQUFNLEVBQUU7UUFDSixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0ssV0FBVyxFQUFqQjs7Ozs7O3dCQUNVLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQzt3QkFDbkMsR0FBRyxHQUFHLElBQUksR0FBRyx3RUFBOEQsQ0FBQzt3QkFDOUQsV0FBTSxpQkFBTyxDQUFDO2dDQUM5QixNQUFNLEVBQUU7b0NBQ0osY0FBYyxFQUFFLGtCQUFrQjtpQ0FDckM7Z0NBQ0QsR0FBRyxLQUFBOzZCQUNOLENBQUMsRUFBQTs7d0JBTEksTUFBTSxHQUFRLFNBS2xCO3dCQUNJLE9BQU8sR0FBRyxzQkFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDVixPQUFPLFNBQUE7NEJBQ1AsTUFBTSxFQUFFLE1BQU07NEJBQ2QsT0FBTyxFQUFFLEtBQUs7eUJBQ2pCLENBQUMsQ0FBQTs7Ozs7S0FDTDtJQUNLLFdBQVcsRUFBakI7Ozs7Ozt3QkFDVSxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7d0JBQ25DLEdBQUcsR0FBRyxJQUFJLEdBQUcsd0VBQThELENBQUM7d0JBQzlELFdBQU0saUJBQU8sQ0FBQztnQ0FDOUIsTUFBTSxFQUFFO29DQUNKLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ3JDO2dDQUNELEdBQUcsS0FBQTs2QkFDTixDQUFDLEVBQUE7O3dCQUxJLE1BQU0sR0FBUSxTQUtsQjt3QkFDSSxVQUFVLEdBQUcsc0JBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1YsVUFBVSxZQUFBOzRCQUNWLFNBQVMsRUFBRSxJQUFJOzRCQUNmLFVBQVUsRUFBQyxRQUFRO3lCQUN0QixDQUFDLENBQUE7Ozs7O0tBQ0w7SUFDSyxXQUFXLEVBQWpCOzs7Ozs7d0JBQ1UsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO3dCQUNuQyxHQUFHLEdBQUcsSUFBSSxHQUFHLG9GQUFnRSxDQUFDO3dCQUNoRSxXQUFNLGlCQUFPLENBQUM7Z0NBQzlCLE1BQU0sRUFBRTtvQ0FDSixjQUFjLEVBQUUsa0JBQWtCO2lDQUNyQztnQ0FDRCxHQUFHLEtBQUE7NkJBQ04sQ0FBQyxFQUFBOzt3QkFMSSxNQUFNLEdBQVEsU0FLbEI7d0JBQ0ksVUFBVSxHQUFHLHNCQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNwRCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNWLFVBQVUsWUFBQTs0QkFDVixTQUFTLEVBQUMsTUFBTTs0QkFDaEIsVUFBVSxFQUFDLFFBQVE7eUJBQ3RCLENBQUMsQ0FBQTs7Ozs7S0FDTDtJQUNELFVBQVUsRUFBRSxVQUFVLEVBQU87UUFFekIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUUsMENBQTBDLEdBQUcsSUFBSTtTQUN6RCxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbW92aWUvbW92aWUuanNcclxuXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcclxuaW1wb3J0IHsgZm9ybWF0TW92aWVMaXN0IH0gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG52YXIgYXBwID0gZ2V0QXBwKCk7XHJcblBhZ2Uoe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRIb3RNb3ZpZSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VG9wTW92aWUoKTtcclxuICAgICAgICB0aGlzLmdldE5ld01vdmllKCk7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0SG90TW92aWUoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZSA9IGFwcC5nbG9iYWxEYXRhLm1vdmllQmFzZVVybDtcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNlICsgYC9zZWFyY2hfc3ViamVjdHM/dHlwZT1tb3ZpZSZ0YWc954Ot6ZeoJnBhZ2VfbGltaXQ9MyZwYWdlX3N0YXJ0PTBgO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi90ZXh0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGhvdERhdGEgPSBmb3JtYXRNb3ZpZUxpc3QocmVzdWx0LnN1YmplY3RzKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgaG90RGF0YSxcclxuICAgICAgICAgICAgaG90VGFnOiAn5q2j5Zyo54Ot5pigJyxcclxuICAgICAgICAgICAgaG90VHlwZTogJ2hvdCdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldE5ld01vdmllKCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhcHAuZ2xvYmFsRGF0YS5tb3ZpZUJhc2VVcmw7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZSArIGAvc2VhcmNoX3N1YmplY3RzP3R5cGU9bW92aWUmdGFnPeacgOaWsCZwYWdlX2xpbWl0PTMmcGFnZV9zdGFydD0wYDtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vdGV4dFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjb21pbmdEYXRhID0gZm9ybWF0TW92aWVMaXN0KHJlc3VsdC5zdWJqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGNvbWluZ0RhdGEsXHJcbiAgICAgICAgICAgIGNvbWluZ1RhZzogJ+acgOaWsCcsXHJcbiAgICAgICAgICAgIGNvbWluZ1R5cGU6J2NvbWluZydcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldFRvcE1vdmllKCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhcHAuZ2xvYmFsRGF0YS5tb3ZpZUJhc2VVcmw7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZSArIGAvc2VhcmNoX3N1YmplY3RzP3R5cGU9bW92aWUmdGFnPeixhueTo+mrmOWIhiZwYWdlX2xpbWl0PTMmcGFnZV9zdGFydD0wYDtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vdGV4dFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0b3AyNTBEYXRhID0gZm9ybWF0TW92aWVMaXN0KHJlc3VsdC5zdWJqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIHRvcDI1MERhdGEsXHJcbiAgICAgICAgICAgIHRvcDI1MFRhZzon6LGG55Oj6auY5YiGJyxcclxuICAgICAgICAgICAgdG9wMjUwVHlwZTondG9wMjUwJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYmFuZGxlTW9yZTogZnVuY3Rpb24gKGV2OiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZSk7XHJcbiAgICAgICAgdmFyIHR5cGUgPSBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21vdmllL21vdmllLW1vcmUvbW92aWUtbW9yZT90eXBlPScgKyB0eXBlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pIl19