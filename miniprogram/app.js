"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        var _this = this;
        if (wx.cloud) {
            wx.cloud.init({
                traceUser: true
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFDO0lBSUYsUUFBUTtRQUFSLGlCQW1CQztRQWpCQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7U0FDSDtRQUNELEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUN6RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2lCQUM3RTtxQkFBTTtvQkFDTixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztpQkFDbkQ7WUFDRyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbz86IHd4LlVzZXJJbmZvXG4gIH1cbn1cblxuQXBwKHtcbiAgLyoqIOeUn+WRveWRqOacn+Wbnuiwg+KAlOebkeWQrOWwj+eoi+W6j+WIneWni+WMllxuICAgKiDlsI/nqIvluo/liJ3lp4vljJblrozmiJDml7bop6blj5HvvIzlhajlsYDlj6rop6blj5HkuIDmrKHjgIJcbiAgICovXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIGlmICh3eC5jbG91ZCkge1xuICAgICAgd3guY2xvdWQuaW5pdCh7XG4gICAgICAgIHRyYWNlVXNlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBlID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICBsZXQgY2Fwc3VsZSA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRpZiAoY2Fwc3VsZSkge1xuXHRcdCBcdHRoaXMuZ2xvYmFsRGF0YS5DdXN0b20gPSBjYXBzdWxlO1xuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGNhcHN1bGUuYm90dG9tICsgY2Fwc3VsZS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGUuc3RhdHVzQmFySGVpZ2h0ICsgNTA7XG5cdFx0fVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdsb2JhbERhdGE6IHtcbiAgICBDb2xvckxpc3Q6IFt7XG4gICAgICAgIHRpdGxlOiAn5auj57qiJyxcbiAgICAgICAgbmFtZTogJ3JlZCcsXG4gICAgICAgIGNvbG9yOiAnI2U1NGQ0MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qGU5qmZJyxcbiAgICAgICAgbmFtZTogJ29yYW5nZScsXG4gICAgICAgIGNvbG9yOiAnI2YzN2IxZCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5piO6buEJyxcbiAgICAgICAgbmFtZTogJ3llbGxvdycsXG4gICAgICAgIGNvbG9yOiAnI2ZiYmQwOCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qmE5qaEJyxcbiAgICAgICAgbmFtZTogJ29saXZlJyxcbiAgICAgICAgY29sb3I6ICcjOGRjNjNmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmo67nu78nLFxuICAgICAgICBuYW1lOiAnZ3JlZW4nLFxuICAgICAgICBjb2xvcjogJyMzOWI1NGEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WkqemdkicsXG4gICAgICAgIG5hbWU6ICdjeWFuJyxcbiAgICAgICAgY29sb3I6ICcjMWNiYmI0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmtbfok50nLFxuICAgICAgICBuYW1lOiAnYmx1ZScsXG4gICAgICAgIGNvbG9yOiAnIzAwODFmZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5ae557SrJyxcbiAgICAgICAgbmFtZTogJ3B1cnBsZScsXG4gICAgICAgIGNvbG9yOiAnIzY3MzliNidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5pyo5qe/JyxcbiAgICAgICAgbmFtZTogJ21hdXZlJyxcbiAgICAgICAgY29sb3I6ICcjOWMyNmIwJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmoYPnsoknLFxuICAgICAgICBuYW1lOiAncGluaycsXG4gICAgICAgIGNvbG9yOiAnI2UwMzk5NydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qOV6KSQJyxcbiAgICAgICAgbmFtZTogJ2Jyb3duJyxcbiAgICAgICAgY29sb3I6ICcjYTU2NzNmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfnjoTngbAnLFxuICAgICAgICBuYW1lOiAnZ3JleScsXG4gICAgICAgIGNvbG9yOiAnIzg3OTlhMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn6I2J54GwJyxcbiAgICAgICAgbmFtZTogJ2dyYXknLFxuICAgICAgICBjb2xvcjogJyNhYWFhYWEnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+WiqOm7kScsXG4gICAgICAgIG5hbWU6ICdibGFjaycsXG4gICAgICAgIGNvbG9yOiAnIzMzMzMzMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn6ZuF55m9JyxcbiAgICAgICAgbmFtZTogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICcjZmZmZmZmJ1xuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pIl19