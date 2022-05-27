class Snake {
    constructor(x, y, xSpeed, ySpeed, total, tail) {
        this.x = DEFAULT_SNAKE_X_POSITION;
        this.y = DEFAULT_SNAKE_Y_POSITION;
        this.xSpeed = DEFAULT_SNAKE_SPEED;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
    }

    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.tail[0].x,this.tail[0].y,SNAKE_SIZE,SNAKE_SIZE)
        let grd = ctx.createLinearGradient(0.000, 150.000, 300.000, 150.000);

        // Add colors
        grd.addColorStop(0.000, 'rgba(247, 149, 51, 1.000)');
        grd.addColorStop(0.151, 'rgba(243, 112, 85, 1.000)');
        grd.addColorStop(0.311, 'rgba(239, 78, 123, 1.000)');
        grd.addColorStop(0.462, 'rgba(161, 102, 171, 1.000)');
        grd.addColorStop(0.621, 'rgba(80, 115, 184, 1.000)');
        grd.addColorStop(0.748, 'rgba(16, 152, 173, 1.000)');
        grd.addColorStop(0.875, 'rgb(7,82,179)');
        grd.addColorStop(1.000, 'rgb(184,111,186)');
        ctx.fillStyle = grd;

        for (let i=0; i<this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x,
                this.tail[i].y, SNAKE_SIZE, SNAKE_SIZE);
        }
        ctx.fillRect(this.x,this.y,SNAKE_SIZE,SNAKE_SIZE);
    }

    update () {
        for (let i = 0; i < this.tail.length - 1; i ++){
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = {
            x: this.x , y: this.y
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x + SNAKE_SIZE> canvas.width){
            isStop = true;gameOver();
        }
        if (this.y + SNAKE_SIZE> canvas.height){
            isStop = true;gameOver()
        }
        if (this.x < 0) {
            isStop = true;gameOver()
        }
        if (this.y < 0) {
            isStop = true; gameOver()
        }
    }
    direction () {
        if (this.ySpeed < 0){
            return  'up';
        }
        if (this.ySpeed > 0){
            return  'down';
        }
        if (this.xSpeed > 0){
            return  'right';
        }
        if (this.xSpeed < 0){
            return  'left';
        }
    }

    changeDirection(keyDirection){
        if (keyDirection === ORIENTATION_UP && snake.direction() !== CURRENT_DIRECTION_DOWN){
            this.xSpeed = 0;
            this.ySpeed = -DEFAULT_SNAKE_SPEED;
        }
        if (keyDirection === ORIENTATION_DOWN && snake.direction() !== CURRENT_DIRECTION_UP){
            this.xSpeed = 0;
            this.ySpeed = DEFAULT_SNAKE_SPEED;
        }
        if (keyDirection === ORIENTATION_LEFT && snake.direction() !== CURRENT_DIRECTION_RIGHT){
            this.xSpeed = -DEFAULT_SNAKE_SPEED;
            this.ySpeed = 0;
        }
        if (keyDirection === ORIENTATION_RIGHT && snake.direction() !== CURRENT_DIRECTION_LEFT){
            this.xSpeed = +DEFAULT_SNAKE_SPEED;
            this.ySpeed = 0;
        }
    }

    eat(fruit){
        if((this.x + SNAKE_SIZE > fruit.x && this.x  <= fruit.x + FRUIT_SIZE)
            && (this.y + SNAKE_SIZE >= fruit.y && this.y <= fruit.y + FRUIT_SIZE )){
            this.total += 1;
            return true;
        }
    }
    death() {
        for (let i = 0; i < this.tail.length; i ++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y) {
                isStop = true;
            }
        }
    }

}