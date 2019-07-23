//修改url的方法
//sub:数组下标
//arr:表情数组
async function setUrl(text) {
    if (!!(window.history && history.pushState)) {
        history.replaceState(null, null, window.location.href.split('#')[0] = text);
    }
}
//修改url为默认url
async function cleanUrl(url) {
    if (!!(window.history && history.pushState)) {
        history.replaceState(null, null, window.location.href.split('#')[0] = url);
    }
}

function getPageHeight() {
    let body = document.body,
        html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
}

function getWindowHeight() {
    let height = window.innerHeight;
    return height;
}

//循环动画使用的表情
var kaomoji = [
    "(｀･ω･)",
    "(〃∀〃)",
    "w(ﾟДﾟ)w",
    "_(:з」∠)_"
]

var emoji = [
    "🌶️",
    "💉",
    "💦",
    "🐂",
    "🍺"
]

var bar = [
    "-",
    "0"
]

var defUrl = window.location.href.split('#')[0]; //默认url

var scrollProgressIntervalId = null;

function scrollBarClick() {
    UrlProgress(bar, 0, 1, 50, -1);
    let e = window.event;
    if (e != undefined) {
        obj = e.target || e.srcElement;
    }
    if (e.path[0].innerText == "click") {
        e.path[0].innerText = "stop";
        window.addEventListener('scroll', e => scrollProgress(bar), true);
    } else {
        alert("需要停止请刷新!");
        e.path[0].innerText = "click";
        window.removeEventListener('scroll', scrollProgress(bar), true);
    }


}



function scrollProgress(arr) {
    let now;

    let scrollAvail = getPageHeight() - getWindowHeight(); // 可滚动的高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

    let length = 50;
    now = (scrollTop / scrollAvail) * length;
    now = parseInt(now);
    UrlProgress(arr, 0, 1, 50, now);
}
//arr 对应前景，背景数组
//subBack 进度条背景
//subFore 进度条前景
//length 进度条总长
//now 当前进度
function UrlProgress(arr, subBack, subFore, length, now) {
    let args = "";
    for (let i = 0; i < length; i++) {
        args = args + arr[subBack]
    }

    if (now >= 0) {
        args = args.split('');
        args.splice(now, 1, arr[subFore]);
        args = args.join('');
    }

    setUrl(args);
}

//循环动画
var UrlLoopIntervalId = null;

function UrlLoop(speed, arr, defUrl) {
    var e = window.event;
    if (e != undefined) {
        obj = e.target || e.srcElement;
        e.path[0].innerText = "stop";
    }
    //上面:
    //选择触发方法的元素

    if (UrlLoopIntervalId == null) {
        this.speed = speed || '1000';
        var i = 0;
        UrlLoopIntervalId = setInterval(function () {
            setUrl(arr[i]);
            i++;
            if (i == arr.length) {
                i = 0;
            }
        }, speed);
    } else {
        clearInterval(UrlLoopIntervalId);
        cleanUrl(defUrl);
        UrlLoopIntervalId = null;
        e.path[0].innerText = "click";
    }
}