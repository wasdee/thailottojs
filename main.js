export class Lotto {
    constructor(code) {
        this.code = code;
        let lottoRegex = /^(\d{2})-(\d{2})-(\d{2})-(\d{6})$/;
        let matches = code.match(lottoRegex);
        let matches_int = matches.map(x => parseInt(x));
        this.year_BE = parseInt("25" + matches[1]);
        this.round = matches_int[2];
        this.pack = matches_int[3];
        this.number = matches[4];
    }

    get year() {
        return this.year_BE - 543;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomLottoes(num) {
    let lottoes = [];
    for (let i = 0; i < num; i++) {
        let ran = new Lotto(
            `62-${getRndInteger(10, 99).toString()}-${getRndInteger(
                10,
                99
            ).toString()}-${getRndInteger(100000, 999999).toString()}`
        );
        lottoes.push(ran);
    }
    return lottoes;
}

export function generateOrderLottoes(num) {
    let lottoes = [];
    for (let i = 0; i < num; i++) {
        let ran = new Lotto(
            `62-${10}-${(i % 20) + 21}-${i.toString().padStart(6, "0")}`
        );
        lottoes.push(ran);
    }
    return lottoes;
}

export class LottoReward {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    get direction_matching() {
        if (this.name.includes("เลขหน้า")) {
            return "front"
        } else if (this.name.includes("เลขท้าย")) {
            return "back"
        } else {
            return "whole"
        }
    }
}

export let LottoRewards = [
    new LottoReward("เลขท้าย 2 ตัว", 2000),
    new LottoReward("เลขหน้า 3 ตัว", 4000),
    new LottoReward("เลขท้าย 3 ตัว", 4000),
    new LottoReward("รางวัลที่ 5", 20000),
    new LottoReward("รางวัลที่ 4", 40000),
    new LottoReward("รางวัลที่ 3", 80000),
    new LottoReward("รางวัลที่ 2", 200000),
    new LottoReward("รางวัลข้างเคียง", 100000),
    new LottoReward("รางวัลที่ 1", 6000000),
]