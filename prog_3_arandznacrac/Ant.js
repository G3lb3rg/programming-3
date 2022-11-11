class Ant extends ConstructorMV {
    constructor(x, y) {
        super(x, y)
        this.energy = 8;
    }


    move() {
        let found = this.chooseCell(1);
        console.log(found)
        let exact = random(found);
        if (exact) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy--

        }
        else {
            this.energy--

        }
    }

}