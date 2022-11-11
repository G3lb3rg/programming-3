class GrassEater extends ConstructorMV {
    constructor(x, y) {
        super(x, y)
        this.energy = 20;
    }

    mul() {
        let found = this.chooseCell(0);
        let exact = random(found);
        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 20;
        }

    }
    eat() {
        let found = this.chooseCell(1);
        let exact = random(found);
        if (exact) {
            this.energy += 5;
            let x = exact[0];
            let y = exact[1];
            for (var i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                }
            }
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            if (this.energy > 30) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }




    move() {
        let found = this.chooseCell(0);
        let exact = random(found);
        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy--
            if (this.energy < 0) {
                this.die();
            }
        }
        else {
            this.energy--
            if (this.energy < 0) {
                this.die();
            }
        }
    }
    die() {
        for (var i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }

}