const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext("2d")

const pacmanFrames = document.getElementById("animation")
const ghotsFrames = document.getElementById("ghots")



let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

let fps = 30
let oneblockSize = 20
let score = 0
let ghots = []
let wallSpaceWidth = oneblockSize / 1.6
let walloffset = (oneblockSize - wallSpaceWidth) / 2
let wallinnerColor = 'black'


const DIRECTION_RIGHT = 4
const DIRECTION_UP = 3
const DIRECTION_LEFT = 2
const DIRECTION_BUTTOM = 1
let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let gameloop = () => {
    update()
    draw()
}



let update = () => {
    // js
}


let draw = () => {
    createRect(0, 0, canvas.width, canvas.height, "black")
    // code js
    drawWall()
}


let gameInterval = setInterval(gameloop, 1000 / fps)



let drawWall = () => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 1) {
                createRect(
                    j * oneblockSize,
                    i * oneblockSize,
                    oneblockSize,
                    oneblockSize,
                    "#342DCA"

                )
                if (j > 0 && map[i][j - 1] == 1) {
                    createRect(
                        j * oneblockSize,
                        i * oneblockSize + walloffset,
                        wallSpaceWidth + walloffset,
                        wallSpaceWidth,
                        wallinnerColor
                    )
                }
                if (j < map[0].length - 1 && map[i][j + 1] == 1) {
                    createRect(
                        j * oneblockSize + walloffset,
                        i * oneblockSize + walloffset,
                        wallSpaceWidth + walloffset,
                        wallSpaceWidth,
                        wallinnerColor
                    )
                }

                if (i < map.length - 1 && map[i + 1][j] == 1) {
                    createRect(
                        j * oneblockSize + walloffset,
                        i * oneblockSize + walloffset,
                        wallSpaceWidth,
                        wallSpaceWidth + walloffset,
                        wallinnerColor
                    );
                }
                if (i > 0 && map[i - 1][j] == 1) {
                    createRect(
                        j * oneblockSize + walloffset,
                        i * oneblockSize,
                        wallSpaceWidth,
                        wallSpaceWidth + walloffset,
                        wallinnerColor
                    )
                }
            }
        }
    }

}