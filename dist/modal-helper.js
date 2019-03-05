//处理移动端滚动穿透问题
var ModalHelper = (function (bodyCls) {
    var scrollTop;
    return {
        afterOpen: function () {
            if (document.scrollingElement) {
                scrollTop = document.scrollingElement.scrollTop;
            } else {
                scrollTop = document.body.scrollTop;
            }
            document.body.setAttribute("class", bodyCls)
            document.body.style.top = -scrollTop + 'px';
        },
        beforeClose: function () {
            document.body.removeAttribute("class")
            if (document.scrollingElement) {
                document.scrollingElement.scrollTop = scrollTop;
            } else {
                document.body.scrollTop = scrollTop;
            }
        }
    };
})('modal-open');