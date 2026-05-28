class Pacman {
    constructor(x, y, widtg, height, speed) {
        this.x = x
        this.y = y
        this.width = width
        this.heigth = height
        this.speed = speed
        this.direction = DIRECTION_RIGHT
    }


    moveProcess() {
        // code
        this.changeDirectionIfPossible();
        this.moveForwards()
        if (this.checkCollisions()) {
            this.moveBackwards();
            return
        }
    }

    eat() {
        // code

    }

    moveBackwards() {
        // code
    }

    moveForwards() {
        // code
        switch (this.direction) {
            case DIRECTION_RIGHT:// right
                this.x += this.speed;
                break
            case DIRECTION_UP: // up
                this.y -= this.speed
                break
            case DIRECTION_LEFT: // left
                this.x -= this.speed
                break
            case DIRECTION_BUTTOM: // buttom
                this.y += this.speed
                break

        }
    }

    checkCollisions() {
        // //code
        let isCollided = false
        if (
            map[parseInt(this.y / oneBlockSize)][
            parseInt(this.x / oneBlockSize)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize + 0.9999)][
            parseInt(this.x / oneBlockSize)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize)][
            parseInt(thi.x / oneBlockSize + 0.9999)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize + 0.9999)][
            parseInt(this.x / oneBlockSize + 0.9999)
            ] == 1
        ) {
            isCollided = true
        }
    }
    checkGhotsCollisions() {
        // code
    }


    getMapX() {
        // code
        let mapX = parseInt(this.x / oneBlockSize)
        return mapX
    }


    getMapY() {
        // code
        let mapY = parseInt(this.y / oneBlockSize)
        return mapY
    }


    getMapXRightSide() {
        // code
        let mapX = parseInt((this.x *0.99 + oneBlockSize) /oneBlockSize)
        return mapX
    }
    getMapYRightSide() {
        // code
        let mapY = parseInt((this.y *0.99 + oneBlockSize) /oneBlockSize)
        return mapY
    }

    changeAnimations() {
        // code
    }


    draw() {
        // code
    }


}
