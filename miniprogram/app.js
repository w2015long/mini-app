"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        var _this = this;
        wx.getSystemInfo({
            success: function (e) {
                _this.globalData.StatusBar = e.statusBarHeight;
                var capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    _this.globalData.Custom = capsule;
                    _this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                }
                else {
                    _this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        });
    },
    globalData: {
        movieBaseUrl: "https://movie.douban.com/j",
        homeBaseUrl: 'https://api-hmugo-web.itheima.net/api/public/v1',
        ColorList: [{
                title: '嫣红',
                name: 'red',
                color: '#e54d42'
            },
            {
                title: '桔橙',
                name: 'orange',
                color: '#f37b1d'
            },
            {
                title: '明黄',
                name: 'yellow',
                color: '#fbbd08'
            },
            {
                title: '橄榄',
                name: 'olive',
                color: '#8dc63f'
            },
            {
                title: '森绿',
                name: 'green',
                color: '#39b54a'
            },
            {
                title: '天青',
                name: 'cyan',
                color: '#1cbbb4'
            },
            {
                title: '海蓝',
                name: 'blue',
                color: '#0081ff'
            },
            {
                title: '姹紫',
                name: 'purple',
                color: '#6739b6'
            },
            {
                title: '木槿',
                name: 'mauve',
                color: '#9c26b0'
            },
            {
                title: '桃粉',
                name: 'pink',
                color: '#e03997'
            },
            {
                title: '棕褐',
                name: 'brown',
                color: '#a5673f'
            },
            {
                title: '玄灰',
                name: 'grey',
                color: '#8799a3'
            },
            {
                title: '草灰',
                name: 'gray',
                color: '#aaaaaa'
            },
            {
                title: '墨黑',
                name: 'black',
                color: '#333333'
            },
            {
                title: '雅白',
                name: 'white',
                color: '#ffffff'
            },
        ]
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFDO0lBSUYsUUFBUTtRQUFSLGlCQW1CQztRQVpDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUN6RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2lCQUM3RTtxQkFBTTtvQkFDTixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztpQkFDbkQ7WUFDRyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBRTtRQUNWLFlBQVksRUFBQyw0QkFBNEI7UUFDekMsV0FBVyxFQUFFLGlEQUFpRDtRQUM5RCxTQUFTLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9hcHAudHNcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrPyhyZXM6IHd4LlVzZXJJbmZvKTogdm9pZFxuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm8/OiB3eC5Vc2VySW5mb1xuICB9XG59XG5cbkFwcCh7XG4gIC8qKiDnlJ/lkb3lkajmnJ/lm57osIPigJTnm5HlkKzlsI/nqIvluo/liJ3lp4vljJZcbiAgICog5bCP56iL5bqP5Yid5aeL5YyW5a6M5oiQ5pe26Kem5Y+R77yM5YWo5bGA5Y+q6Kem5Y+R5LiA5qyh44CCXG4gICAqL1xuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICAvLyBpZiAod3guY2xvdWQpIHtcbiAgICAvLyAgIHd4LmNsb3VkLmluaXQoe1xuICAgIC8vICAgICB0cmFjZVVzZXI6IHRydWVcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5TdGF0dXNCYXIgPSBlLnN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgbGV0IGNhcHN1bGUgPSB3eC5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0aWYgKGNhcHN1bGUpIHtcblx0XHQgXHR0aGlzLmdsb2JhbERhdGEuQ3VzdG9tID0gY2Fwc3VsZTtcblx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5DdXN0b21CYXIgPSBjYXBzdWxlLmJvdHRvbSArIGNhcHN1bGUudG9wIC0gZS5zdGF0dXNCYXJIZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xuXHRcdH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvLyBodHRwczovL21vdmllLmRvdWJhbi5jb20vai9zZWFyY2hfc3ViamVjdHM/dHlwZT1tb3ZpZSZ0YWc9JnBhZ2VfbGltaXQ9NTAmcGFnZV9zdGFydD0wXG4gIGdsb2JhbERhdGE6IHtcbiAgICBtb3ZpZUJhc2VVcmw6XCJodHRwczovL21vdmllLmRvdWJhbi5jb20valwiLFxuICAgIGhvbWVCYXNlVXJsOiAnaHR0cHM6Ly9hcGktaG11Z28td2ViLml0aGVpbWEubmV0L2FwaS9wdWJsaWMvdjEnLCBcbiAgICBDb2xvckxpc3Q6IFt7XG4gICAgICAgIHRpdGxlOiAn5auj57qiJyxcbiAgICAgICAgbmFtZTogJ3JlZCcsXG4gICAgICAgIGNvbG9yOiAnI2U1NGQ0MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qGU5qmZJyxcbiAgICAgICAgbmFtZTogJ29yYW5nZScsXG4gICAgICAgIGNvbG9yOiAnI2YzN2IxZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5piO6buEJyxcbiAgICAgICAgbmFtZTogJ3llbGxvdycsXG4gICAgICAgIGNvbG9yOiAnI2ZiYmQwOCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qmE5qaEJyxcbiAgICAgICAgbmFtZTogJ29saXZlJyxcbiAgICAgICAgY29sb3I6ICcjOGRjNjNmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmo67nu78nLFxuICAgICAgICBuYW1lOiAnZ3JlZW4nLFxuICAgICAgICBjb2xvcjogJyMzOWI1NGEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WkqemdkicsXG4gICAgICAgIG5hbWU6ICdjeWFuJyxcbiAgICAgICAgY29sb3I6ICcjMWNiYmI0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmtbfok50nLFxuICAgICAgICBuYW1lOiAnYmx1ZScsXG4gICAgICAgIGNvbG9yOiAnIzAwODFmZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5ae557SrJyxcbiAgICAgICAgbmFtZTogJ3B1cnBsZScsXG4gICAgICAgIGNvbG9yOiAnIzY3MzliNidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5pyo5qe/JyxcbiAgICAgICAgbmFtZTogJ21hdXZlJyxcbiAgICAgICAgY29sb3I6ICcjOWMyNmIwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmoYPnsoknLFxuICAgICAgICBuYW1lOiAncGluaycsXG4gICAgICAgIGNvbG9yOiAnI2UwMzk5NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qOV6KSQJyxcbiAgICAgICAgbmFtZTogJ2Jyb3duJyxcbiAgICAgICAgY29sb3I6ICcjYTU2NzNmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfnjoTngbAnLFxuICAgICAgICBuYW1lOiAnZ3JleScsXG4gICAgICAgIGNvbG9yOiAnIzg3OTlhMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn6I2J54GwJyxcbiAgICAgICAgbmFtZTogJ2dyYXknLFxuICAgICAgICBjb2xvcjogJyNhYWFhYWEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WiqOm7kScsXG4gICAgICAgIG5hbWU6ICdibGFjaycsXG4gICAgICAgIGNvbG9yOiAnIzMzMzMzMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn6ZuF55m9JyxcbiAgICAgICAgbmFtZTogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pIl19