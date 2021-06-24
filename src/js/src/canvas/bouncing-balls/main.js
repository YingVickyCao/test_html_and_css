// setup canvas

//  https://github.com/mdn/learning-area/tree/master/javascript/oojs/bouncing-balls
let canvas = document.querySelector('canvas');
// 代指画布上的一块允许我们绘制 2D 图形的区域
let ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;   // 浏览器的宽
let height = canvas.height = window.innerHeight; // 浏览器的高

// 生成一个 min 至 max 之间的随机整数
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 生成一个随机的颜色值
function randomColor() {
    return 'rgb(' +
        random(0, 255) + ', ' +
        random(0, 255) + ', ' +
        random(0, 255) + ')';
}

/**
 *
 * @param x     x 和 y 坐标 —— 小球在屏幕上最开始时候的坐标。坐标的范围从 0 （左上角）到浏览器视口的宽和高（右下角）。
 * @param y
 * @param velX  水平和竖直速度（velX 和 velY）
 * @param velY
 * @param color
 * @param size  小球的半径
 * @constructor
 */
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function () {
    ctx.beginPath(); // 声明现在要开始在纸上画一个图形了
    ctx.fillStyle = this.color;
    /**
     * 使用 arc() 方法来在纸上画出一段圆弧
     * 最后两个参数是开始和结束，也就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 2 * PI，也就是 360 度（如果设置成 0 和 1 * PI，则只会出现一个半圆，也就是 180 度）
     */
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();// 声明我们结束了以 beginPath() 开始的绘画，并且使用之前设置的颜色进行填充。
};

// 检查小球是否碰到画布的边缘。如果碰到，我们反转小球的速度方向来让它向反方向移动。就比如说，如果小球正向上移动 （正 velY），然后垂直速度发生改变，小球就向下移动 （负 velY）
Ball.prototype.update = function () {
    // 检查小球的 x 坐标是否大于画布的宽度（小球会从右边缘离开）。
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    // 检查小球的 x 坐标是否小于0（小球会从左边缘离开）。
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    // 检查小球的 y 坐标是否大于画布的高度（小球会从下边缘离开）。
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    // 检查小球的 y 坐标是否小于0（小球会从上边缘离开）。
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    // 在每种情况下，我们都会加上小球的半径，因为 x/y 坐标是小球中心的坐标，我们希望小球在其边界接触浏览器窗口的边界时反弹，而不是小球的一部分都不见了再返回。
    this.x += this.velX;
    this.y += this.velY;
};


// let testBall = new Ball(50, 100, 4, 4, 'green', 10);
// console.log(testBall.x);
// console.log(testBall.size);
// console.log(testBall.color);
// testBall.draw();

const balls = [];

// 添加碰撞检测
Ball.prototype.collisionDetect = function () {
    for (let i = 0; i < balls.length; i++) {
        // 使用一个 if 语句来检查遍历的小球是否是当前的小球:只有两个小球不是同一个时,条件判断中的代码才会运行
        if (!(this === balls[i])) {
            const dx = this.x - balls[i].x;
            const dy = this.y - balls[i].y;

            // 使用了一个常见的算法来检测两个小球是否相撞了，两个小球中心的距离是否小于两个小球的半径之和
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[i].size) {
                // 如果检测到了碰撞,会将两个小球的颜色都设置成随机的一种
                balls[i].color = this.color = randomColor();
            }
        }
    }
};

function loop() {
    // 将整个画布的颜色设置成半透明的黑色。
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    // 画出一个填充满整个画布的矩形
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        let ball = new Ball(random(0, width), random(0, height), random(-7, 7), random(-7, 7), randomColor(), random(10, 20));
        balls.push(ball);
    }

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();  // 再接下来的每一帧都按照其速度进行位置的更新
        balls[i].collisionDetect();
    }
    // 使用 requestAnimationFrame() 方法再运行一次函数 —— 当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数，
    // 这样我们可以得到一个平滑的动画效果。这主要是通过递归完成的 —— 也就是说函数每次运行的时候都会调用自己，从而可以一遍又一遍得运行。
    requestAnimationFrame(loop);
}

loop();