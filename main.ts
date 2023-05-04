class Tetrimimo  {
    sprite: Sprite
    cells: number[][]
    shapeID: number
    rotation: number
    row: number
    col: number
    x: number
    y: number
    row_hd: number

    constructor(shape: number) {
        this.shapeID = shape
        this.cells = []
        this.rotation = Rotation.z

        this.row = (shape == 0) ? -1 : 0
        this.col = (shape == 3) ? 4 : 3

        this.x = this.col + 1
        this.y = 22 - this.col

        let size = (shape == 0) ? 4 : ((shape == 3) ? 2 : 3)
        let i = 0

        for (let r = 0; r < size; r++) {
            this.cells.push([])
            for (let c = 0; c < size; c++) {
                if (shapes[shape][i] % size == c && Math.floor(shapes[shape][i] / size) == r) {
                    this.cells[r].push(shape)
                    i++
                } else {
                    this.cells[r].push(null)
                }
            }
        }
        this.spawn(this.x, this.y)
    }

    spawn(x: number, y: number) {
        // x and y are cell coordinate, starting from bottom left corner

        let l = this.cells.length
        let img = image.create(l * t_size, l * t_size)
        for (let r = 0; r < l; r ++) {
            for (let c = 0; c < l; c ++) {
                if (this.cells[r][c] != null) {
                    img.fillRect(c * 5, r * 5, 5, 5, this.cells[r][c] + 1)
                    img.drawLine(c * 5 + 1, r * 5 + 1, c * 5 + 3, r * 5 + 1, this.cells[r][c] + 8)
                    img.drawLine(c * 5 + 1, r * 5 + 1, c * 5 + 1, r * 5 + 2, this.cells[r][c] + 8)
                }
            }
        }

        let x = X0 + 

        this.sprite.setImage(img)
        this.
    }
}

class Bag {
    preview: Sprite[]

    contents: number[]

    constructor() {
        this.preview = []
        this.contents = []
        let full = false
        while (!full) {
            let rnd = Math.randomRange(0, 6)
            if (this.contents.indexOf(rnd) == -1) {
                this.contents.push(rnd)
            }
            if (this.contents.length == 7) {
                full = true
            }
        }
    }

    deal(): number {
        let next = this.contents.shift()
        if (this.contents.length < 3) {
            let full = false
            while (!full) {
                let rnd = Math.randomRange(0, 6)
                if (this.contents.indexOf(rnd) == -1) {
                    this.contents.push(rnd)
                }
                if (this.contents.length == 7) {
                    full = true
                }
            }
        }
        return next
    }
}

const shapes = [
    [4, 5, 6, 7],
    [0, 3, 4, 5],
    [2, 3, 4, 5],
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [1, 3, 4, 5],
    [0, 1, 4, 5]
]

const colors = [0, 9, 8, 4, 5, 7, 10, 2]

let bag = new Bag()
let test = new Tetrimimo(bag.deal())

enum Rotation {
    z = 0,
    r = 1,
    t = 2,
    l = 3
}

const X0 = 58
const Y0 = 8

const t_size = 5                // size of Tetrimimo tile
const pt_size = 4               // size of Preview tile