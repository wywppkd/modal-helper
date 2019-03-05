### 解决移动端滚动穿透问题
* 滚动穿透
    * 众所周知，移动端当有 fixed 遮罩背景和弹出层时，在屏幕上滑动能够滑动背景下面的内容，这就是著名的滚动穿透问题
* 什么情况下适用
    * 适用弹框有滚动条的情况, 如果弹框内没有滚动条, 则直接阻止弹窗的touchmove默认事件即可, 不需要使用此方案

### 1. 引入文件js,css(可自行复制到其他位置)
```html
    <link rel="stylesheet" href="./dist/common.css">
    <script src="./dist/modal-helper.js"></script>
```

### 2. 使用
> 监听弹框的显示和隐藏事件
>> 当弹框显示时,调用ModalHelper.afterOpen()
>
>> 当弹框隐藏时,调用ModalHelper.beforeClose()

* 在jQuery项目中使用
```javascript
// 弹框显示
$('.modal').show();
ModalHelper.afterOpen();

// 弹框隐藏
$('.modal').hide();
ModalHelper.beforeClose();
```

* 在Vue项目中使用 // 只测试了script引入vue的方式
```vue
watch: {
    //watch为vue提供的api；详看：https://cn.vuejs.org/v2/api/#watch
    isShow:function(newVal, oldVal) {
        if(newVal == true){
            //显示弹框
            ModalHelper.afterOpen()
        }else{
            //隐藏弹框
            ModalHelper.beforeClose()
        }
    }
}
```

