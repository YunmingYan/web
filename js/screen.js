
addEventListener('orientationchange', function () {
    //先重新计算rem跟屏幕宽度,然后再刷新
    if (window.innerWidth === window.DEVICEWIDTH) return 0;
    window.DEVICEWIDTH = window.innerWidth;
    document.getElementsByTagName('html')[0].style.fontSize = window.DEVICEWIDTH / 10 + 'px';
    location.reload(false);
});
