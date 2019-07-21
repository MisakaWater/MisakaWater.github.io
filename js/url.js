//修改url的方法
//sub:数组下标
//arr:表情数组
async function setUrl(sub, arr) {
    if (!!(window.history && history.pushState)) {
        history.replaceState(null, null, window.location.href.split('#')[0] = arr[sub]);
    }
}
//修改url为默认url
async function cleanUrl(url) {
    if (!!(window.history && history.pushState)) {
        history.replaceState(null, null, window.location.href.split('#')[0] = url);
    }
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

var IntervalId = null;
var defUrl = window.location.href.split('#')[0]; //默认url

//循环动画
function UrlLoop(speed, arr, defUrl) {


    var e = window.event;
    obj = e.target || e.srcElement;
    e.path[0].innerText = "stop";
    //上面:
    //选择触发方法的元素

    if (IntervalId == null) {
        this.speed = speed || '1000';
        var i = 0;
        IntervalId = setInterval(function () {
            setUrl(i, arr);
            i++;
            if (i == arr.length) {
                i = 0;
            }
        }, speed);
    } else {
        clearInterval(IntervalId);
        cleanUrl(defUrl);
        IntervalId = null;
        e.path[0].innerText = "click";
    }
}

function print_nav_timing_data() {
    // Use getEntriesByType() to just get the "navigation" events
    var perfEntries = performance.getEntriesByType("navigation");
  
    for (var i=0; i < perfEntries.length; i++) {
      console.log("= Navigation entry[" + i + "]");
      var p = perfEntries[i];
      // dom Properties
      console.log("DOM content loaded = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
      console.log("DOM complete = " + p.domComplete);
      console.log("DOM interactive = " + p.interactive);
  
      // document load and unload time
      console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
      console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));
  
      // other properties
      console.log("type = " + p.type);
      console.log("redirectCount = " + p.redirectCount);
    }
  }