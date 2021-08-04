class Figura {
    static randomFiguros(amount) {
        let dimensions = [];
        for (let i = 1; i <= amount; i++) {
            dimensions.push({ width: Figura.random(), height: Figura.random() })
        }
        return dimensions;
    }

    static size(width, height) {

    }
    static random() {
        return Math.floor(Math.random() * 10) + 1;
    }
}

module.exports = Figura;
