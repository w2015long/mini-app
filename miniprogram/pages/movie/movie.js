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
    data: {
        animation: '',
        name: 'shake'
    },
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
    toggle: function (e) {
        var anmiaton = e.currentTarget.dataset.class;
        var that = this;
        that.setData({
            animation: anmiaton
        });
        setTimeout(function () {
            that.setData({
                animation: ''
            });
        }, 1000);
    },
    bandleMore: function (ev) {
        console.log(ev.currentTarget.dataset.type);
        var type = ev.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../movie/movieMore/movieMore?type=' + type,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb3ZpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtDQUE4QztBQUM5Qyx5Q0FBOEM7QUFDOUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDbkIsSUFBSSxDQUFDO0lBS0QsSUFBSSxFQUFFO1FBQ0YsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsT0FBTztLQUNoQjtJQUtELE1BQU0sRUFBRTtRQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSyxXQUFXLEVBQWpCOzs7Ozs7d0JBQ1UsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO3dCQUNuQyxHQUFHLEdBQUcsSUFBSSxHQUFHLHdFQUE4RCxDQUFDO3dCQUM5RCxXQUFNLGlCQUFPLENBQUM7Z0NBQzlCLE1BQU0sRUFBRTtvQ0FDSixjQUFjLEVBQUUsa0JBQWtCO2lDQUNyQztnQ0FDRCxHQUFHLEtBQUE7NkJBQ04sQ0FBQyxFQUFBOzt3QkFMSSxNQUFNLEdBQVEsU0FLbEI7d0JBQ0ksT0FBTyxHQUFHLHNCQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNWLE9BQU8sU0FBQTs0QkFDUCxNQUFNLEVBQUUsTUFBTTs0QkFDZCxPQUFPLEVBQUUsS0FBSzt5QkFDakIsQ0FBQyxDQUFBOzs7OztLQUNMO0lBQ0ssV0FBVyxFQUFqQjs7Ozs7O3dCQUNVLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQzt3QkFDbkMsR0FBRyxHQUFHLElBQUksR0FBRyx3RUFBOEQsQ0FBQzt3QkFDOUQsV0FBTSxpQkFBTyxDQUFDO2dDQUM5QixNQUFNLEVBQUU7b0NBQ0osY0FBYyxFQUFFLGtCQUFrQjtpQ0FDckM7Z0NBQ0QsR0FBRyxLQUFBOzZCQUNOLENBQUMsRUFBQTs7d0JBTEksTUFBTSxHQUFRLFNBS2xCO3dCQUNJLFVBQVUsR0FBRyxzQkFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDVixVQUFVLFlBQUE7NEJBQ1YsU0FBUyxFQUFFLElBQUk7NEJBQ2YsVUFBVSxFQUFFLFFBQVE7eUJBQ3ZCLENBQUMsQ0FBQTs7Ozs7S0FDTDtJQUNLLFdBQVcsRUFBakI7Ozs7Ozt3QkFDVSxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7d0JBQ25DLEdBQUcsR0FBRyxJQUFJLEdBQUcsb0ZBQWdFLENBQUM7d0JBQ2hFLFdBQU0saUJBQU8sQ0FBQztnQ0FDOUIsTUFBTSxFQUFFO29DQUNKLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ3JDO2dDQUNELEdBQUcsS0FBQTs2QkFDTixDQUFDLEVBQUE7O3dCQUxJLE1BQU0sR0FBUSxTQUtsQjt3QkFDSSxVQUFVLEdBQUcsc0JBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1YsVUFBVSxZQUFBOzRCQUNWLFNBQVMsRUFBRSxNQUFNOzRCQUNqQixVQUFVLEVBQUUsUUFBUTt5QkFDdkIsQ0FBQyxDQUFBOzs7OztLQUNMO0lBQ0QsTUFBTSxFQUFOLFVBQU8sQ0FBTTtRQUNULElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNWLFNBQVMsRUFBRSxRQUFRO1NBQ3RCLENBQUMsQ0FBQTtRQUNGLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLEVBQUU7YUFDaEIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUNELFVBQVUsRUFBRSxVQUFVLEVBQU87UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSxvQ0FBb0MsR0FBRyxJQUFJO1NBQ25ELENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9tb3ZpZS9tb3ZpZS5qc1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb3ZpZUxpc3QgfSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbnZhciBhcHAgPSBnZXRBcHAoKTtcclxuUGFnZSh7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgICAqL1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFuaW1hdGlvbjogJycsXHJcbiAgICAgICAgbmFtZTogJ3NoYWtlJ1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0SG90TW92aWUoKTtcclxuICAgICAgICB0aGlzLmdldFRvcE1vdmllKCk7XHJcbiAgICAgICAgdGhpcy5nZXROZXdNb3ZpZSgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldEhvdE1vdmllKCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhcHAuZ2xvYmFsRGF0YS5tb3ZpZUJhc2VVcmw7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYmFzZSArIGAvc2VhcmNoX3N1YmplY3RzP3R5cGU9bW92aWUmdGFnPeeDremXqCZwYWdlX2xpbWl0PTMmcGFnZV9zdGFydD0wYDtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IGFueSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vdGV4dFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBob3REYXRhID0gZm9ybWF0TW92aWVMaXN0KHJlc3VsdC5zdWJqZWN0cyk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGhvdERhdGEsXHJcbiAgICAgICAgICAgIGhvdFRhZzogJ+ato+WcqOeDreaYoCcsXHJcbiAgICAgICAgICAgIGhvdFR5cGU6ICdob3QnXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXROZXdNb3ZpZSgpIHtcclxuICAgICAgICBjb25zdCBiYXNlID0gYXBwLmdsb2JhbERhdGEubW92aWVCYXNlVXJsO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGJhc2UgKyBgL3NlYXJjaF9zdWJqZWN0cz90eXBlPW1vdmllJnRhZz3mnIDmlrAmcGFnZV9saW1pdD0zJnBhZ2Vfc3RhcnQ9MGA7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3RleHRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY29taW5nRGF0YSA9IGZvcm1hdE1vdmllTGlzdChyZXN1bHQuc3ViamVjdHMpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICBjb21pbmdEYXRhLFxyXG4gICAgICAgICAgICBjb21pbmdUYWc6ICfmnIDmlrAnLFxyXG4gICAgICAgICAgICBjb21pbmdUeXBlOiAnY29taW5nJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0VG9wTW92aWUoKSB7XHJcbiAgICAgICAgY29uc3QgYmFzZSA9IGFwcC5nbG9iYWxEYXRhLm1vdmllQmFzZVVybDtcclxuICAgICAgICBjb25zdCB1cmwgPSBiYXNlICsgYC9zZWFyY2hfc3ViamVjdHM/dHlwZT1tb3ZpZSZ0YWc96LGG55Oj6auY5YiGJnBhZ2VfbGltaXQ9MyZwYWdlX3N0YXJ0PTBgO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi90ZXh0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHRvcDI1MERhdGEgPSBmb3JtYXRNb3ZpZUxpc3QocmVzdWx0LnN1YmplY3RzKTtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgdG9wMjUwRGF0YSxcclxuICAgICAgICAgICAgdG9wMjUwVGFnOiAn6LGG55Oj6auY5YiGJyxcclxuICAgICAgICAgICAgdG9wMjUwVHlwZTogJ3RvcDI1MCdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZShlOiBhbnkpIHtcclxuICAgICAgICB2YXIgYW5taWF0b24gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jbGFzcztcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhISh7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5taWF0b25cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfSxcclxuICAgIGJhbmRsZU1vcmU6IGZ1bmN0aW9uIChldjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGUpO1xyXG4gICAgICAgIHZhciB0eXBlID0gZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy4uL21vdmllL21vdmllTW9yZS9tb3ZpZU1vcmU/dHlwZT0nICsgdHlwZSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==