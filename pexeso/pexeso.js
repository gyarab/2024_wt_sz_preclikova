let pocetDvojic = 3
let rubKarty = "heart.svg"
let prazdneMisto = "prazdno.svg"
let sirkaKarty = 100
let vyskaKarty = 100

let kartyKocky = [
    "https://placecats.com/neo_banana/100/100",
    "https://placecats.com/neo_2/100/100",
    "https://placecats.com/millie_neo/100/100",
    "https://placecats.com/bella/100/100",
    "https://placecats.com/millie/100/100",
    "https://placecats.com/neo/100/100",
    "https://placecats.com/poppy/100/100",
    "https://placecats.com/louie/100/100"
]

let kartyPrincezny = [
    "https://static.wikia.nocookie.net/disney/images/3/39/Snowwhiteamazon.jpg/revision/latest?cb=20210213234058",
    "https://static.wikia.nocookie.net/disney/images/2/2e/Cinderellaamazon.jpg/revision/latest?cb=20210213233836",
    "https://static.wikia.nocookie.net/disney/images/5/57/Auroraamazon.jpg/revision/latest?cb=20210213233826",
    "https://static.wikia.nocookie.net/disney/images/5/5a/Belleamazon.jpg/revision/latest?cb=20210213233832",
    "https://static.wikia.nocookie.net/disney/images/1/18/Jasmineamazon.jpg/revision/latest?cb=20210213234022",
    "https://static.wikia.nocookie.net/disney/images/8/8f/Pocahontasamazon.jpg/revision/latest?cb=20210213234035",
    "https://static.wikia.nocookie.net/disney/images/a/a7/Rapunzelamazon.jpg/revision/latest?cb=20210213234039",
    "https://static.wikia.nocookie.net/disney/images/5/53/Tianaamazon.jpg/revision/latest?cb=20210213234043",

]
let kartyDopravniZnacky = [
"",
"",
"",
"",
"",
"",
"",
"",

]
let karty = kartyKocky

function zamichejPole(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Prohození prvků
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

function zalozKartu(i) {
    const element = document.createElement('img')
    const karta = { karta: i, el: element }
    element.width = sirkaKarty
    element.height = vyskaKarty
    element.src = rubKarty
    element.onclick = () => otocKartu(karta)
    return karta
}

function otocKartu(karta) {
    console.log(otocene)
    console.log(nalezene)

    if (otocene.length >= 2) {
        otocene.forEach((karta) => {
            karta.el.src = rubKarty
        })
        otocene = []
        return
    }

    if (!otocene.includes(karta) && !nalezene.includes(karta)) {
        karta.el.src = karty[karta.karta]
        otocene.push(karta)
        kontrolaBodu()
    }
}
function kontrolaBodu() {
    if (otocene.length == 2 && otocene[1].karta == otocene[0].karta) {
        nalezene = nalezene.concat(otocene)
        otocene.forEach((karta) => {
            setInterval(() => { karta.el.src = prazdneMisto }, 2000)

        })
        otocene = []
        score.innerHTML = parseInt(score.innerHTML) + 1
    }
}

let otocene = []
let nalezene = []
let pole = []

function novaHra() {
    otocene = []
    nalezene = []
    pole = []

    let pocetDvojic = document.getElementById('pocetDvojic').value
    let pocetKaretNaRadek = document.getElementById('pocetKaretNaRadek').value
    let druhKaret = document.getElementById('druhKaret').value

    switch (druhKaret) {
        case "princezny": karty = kartyPrincezny
            break
        case "kocky": karty = kartyKocky
            break

    }

    for (let i = 0; i < pocetDvojic; i++) {
        pole.push(zalozKartu(i));
        pole.push(zalozKartu(i));
    }

    zamichejPole(pole)

    el = document.getElementById('pexeso')
    el.innerHTML = "Skore"
    score = document.createElement('div')
    score.innerHTML = "0"
    el.appendChild(score)
    let i = 0
    pole.forEach((karta) => {

        el.appendChild(karta.el)
        if (++i % pocetKaretNaRadek == 0) {
            el.appendChild(document.createElement('br'))
        }

    })
}

novaHra()
console.log('END')