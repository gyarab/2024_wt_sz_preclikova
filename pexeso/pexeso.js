let pocetDvojic = 3
let rubKarty = "heart.svg"
let prazdneMisto = "prazdno.svg"
let sirkaKarty = 100
let vyskaKarty = 100

let karty = [
    {
        src: "https://placecats.com/neo_banana/100/100"
    },
    {
        src: "https://placecats.com/neo_2/100/100"
    },
    {
        src: "https://placecats.com/millie_neo/100/100"
    },
    {
        src: "https://placecats.com/millie_neo/100/100"
    },
    {
        src: "https://placecats.com/millie_neo/100/100"
    },
    {
        src: "https://placecats.com/millie_neo/100/100"
    },
    {
        src: "https://placecats.com/millie_neo/100/100"
    },
    {
        src: "https://placecats.com/millie_neo/100/100"
    }

]


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
        karta.el.src = karty[karta.karta].src
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

    pocetDvojic = document.getElementById('pocetDvojic').value
    pocetKaretNaRadek = document.getElementById('pocetKaretNaRadek').value

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