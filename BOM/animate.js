function animate(obj, target, callback) {
    // callback = function() {}
    clearInterval(obj.timer);//为了去除重复点击带来的bug，消除前一个状态下的位置
    obj.timer = setInterval(function () {
        //obj.timer给不同元素指定不同的定时器
        //添加步长的运算
        //缓动动画效果
        var distance = (target - obj.offsetLeft) / 10;// （目标位置 - 当前位置） / 10 使得速度越来越慢，并且把数值改成整数，不要小数得到缓动效果
        //若想回来则要修改公式,添加判断
        distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance);
        if (obj.offsetLeft == target) { // 当盒子到达目标位置后停止定时器
            clearInterval(obj.timer);
            //回调函数写到定时器的后面
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + distance + 'px';
    }, 20);
}