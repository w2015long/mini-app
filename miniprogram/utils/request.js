"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var ajaxTimes = 0;
exports.request = function (params) {
    var header = __assign({}, params.header);
    if (params.url.indexOf('/my/') > -1) {
        header["Authorization"] = wx.getStorageSync("token");
    }
    ajaxTimes++;
    wx.showLoading({
        title: "加载中",
        mask: true
    });
    return new Promise(function (resolve, reject) {
        wx.request(__assign(__assign({}, params), { header: header, url: params.url, success: function (result) {
                resolve(result.data);
            }, fail: function (err) {
                reject(err);
            }, complete: function () {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            } }));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFJLFNBQVMsR0FBQyxDQUFDLENBQUM7QUFDSCxRQUFBLE9BQU8sR0FBRyxVQUFDLE1BQWtCO0lBRXRDLElBQUksTUFBTSxnQkFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztRQUUvQixNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0RDtJQUdELFNBQVMsRUFBRSxDQUFDO0lBRVosRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFLElBQUk7S0FDYixDQUFDLENBQUM7SUFLSCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07UUFDOUIsRUFBRSxDQUFDLE9BQU8sdUJBQ0gsTUFBTSxLQUNULE1BQU0sRUFBQyxNQUFNLEVBQ2IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQ2YsT0FBTyxFQUFDLFVBQUMsTUFBVztnQkFDaEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQ0QsSUFBSSxFQUFDLFVBQUMsR0FBRztnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUNELFFBQVEsRUFBQztnQkFDTCxTQUFTLEVBQUUsQ0FBQztnQkFDWixJQUFHLFNBQVMsS0FBRyxDQUFDLEVBQUM7b0JBRWIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNwQjtZQUNMLENBQUMsSUFDSCxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgcGFyYW1zVHlwZSB7XHJcbiAgICBoZWFkZXI/OiBhbnk7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG4vLyDlkIzml7blj5HpgIHlvILmraXku6PnoIHnmoTmrKHmlbBcclxubGV0IGFqYXhUaW1lcz0wO1xyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IChwYXJhbXM6IHBhcmFtc1R5cGUpPT57XHJcbiAgICAvLyDliKTmlq0gdXJs5Lit5piv5ZCm5bim5pyJIC9teS8g6K+35rGC55qE5piv56eB5pyJ55qE6Lev5b6EIOW4puS4imhlYWRlciB0b2tlblxyXG4gICAgbGV0IGhlYWRlcj17Li4ucGFyYW1zLmhlYWRlcn07XHJcbiAgICBpZihwYXJhbXMudXJsLmluZGV4T2YoJy9teS8nKSA+IC0xKXtcclxuICAgICAgICAvLyDmi7zmjqVoZWFkZXIg5bim5LiKdG9rZW5cclxuICAgICAgICBoZWFkZXJbXCJBdXRob3JpemF0aW9uXCJdPXd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFqYXhUaW1lcysrO1xyXG4gICAgLy8g5pi+56S65Yqg6L295LitIOaViOaenFxyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiBcIuWKoOi9veS4rVwiLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyDlrprkuYnlhazlhbHnmoR1cmxcclxuICAgIC8vIGNvbnN0IGJhc2VVcmw9XCJodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MVwiO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICBoZWFkZXI6aGVhZGVyLFxyXG4gICAgICAgICAgICB1cmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDooZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOigpPT57XHJcbiAgICAgICAgICAgICAgICBhamF4VGltZXMtLTtcclxuICAgICAgICAgICAgICAgIGlmKGFqYXhUaW1lcz09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICDlhbPpl63mraPlnKjnrYnlvoXnmoTlm77moIdcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59Il19