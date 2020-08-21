"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMovieList = exports.handleStar = void 0;
exports.handleStar = function (str) {
    var num = Math.floor(+str / 2);
    var arr = [];
    for (var i = 0; i < 5; i++) {
        if (i < num) {
            arr.push(1);
        }
        else {
            arr.push(0);
        }
    }
    return arr;
};
function formatMovieList(data) {
    return data.map(function (item) {
        return {
            coverImg: item.cover,
            title: item.title,
            stars: exports.handleStar(item.rate),
            score: item.rate
        };
    });
}
exports.formatMovieList = formatMovieList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ2EsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFXO0lBQ3BDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztRQUN4QixJQUFHLENBQUMsR0FBRyxHQUFHLEVBQUM7WUFDVCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ1o7YUFBSTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDWjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUE7QUFFRCxTQUFnQixlQUFlLENBQUMsSUFBUztJQUN2QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTO1FBQ3hCLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxrQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2pCLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFURCwwQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0YXIgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbnVtID0gTWF0aC5mbG9vcigrc3RyIC8gMik7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgaWYoaSA8IG51bSl7XG4gICAgICBhcnIucHVzaCgxKVxuICAgIH1lbHNle1xuICAgICAgYXJyLnB1c2goMClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vdmllTGlzdChkYXRhOiBhbnkpe1xuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjb3ZlckltZzogaXRlbS5jb3ZlcixcbiAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgc3RhcnM6IGhhbmRsZVN0YXIoaXRlbS5yYXRlKSxcbiAgICAgIHNjb3JlOiBpdGVtLnJhdGVcbiAgICB9XG4gIH0pXG59XG5cbiJdfQ==