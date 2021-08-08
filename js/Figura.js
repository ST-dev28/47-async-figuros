class Figura {
    static randomFiguros(amount) {
        const list = [];

        for (let i = 0; i < amount; i++) {
            const width = Figura.random();
            const height = Figura.random();
            list.push({ width, height });
        }

        return list;
    }

    static random() {
        return Math.floor(Math.random() * 10) + 1;
    }
    // Math.random grazina reiksmes: 0 ... 0.99999 ir 0 ... 9.99999

    static size(width, height) {
        return width * height;
    }
}

module.exports = Figura;