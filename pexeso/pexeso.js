let pocetDvojic = 3
let rubKarty = "heart.svg"
let sirkaKarty = 100
let vyskaKarty = 100

let karty = [
    {
        src:"https://placecats.com/neo_banana/100/100"
    },
    {
        src:"https://placecats.com/neo_2/100/100" 
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
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

function zalozKartu (i)
{
  const element = document.createElement('img')
  const karta = {karta:i, el: element }  
  element.width = sirkaKarty
  element.height = vyskaKarty
  element.src = rubKarty
  element.onclick = () => otocKartu (karta)
  return karta
}

function otocKartu (karta)
{
  if (otocene.length >= 2)
  {
    otocene.forEach((karta) => {
        karta.el.src = rubKarty
    })
    otocene = []
    return
  }

  if (!otocene.includes (karta))
  {
    karta.el.src = karty[karta.karta].src
    otocene.push(karta)
    kontrolaBodu ()
  }  
}
function kontrolaBodu(){
    if (otocene.length==2 && otocene[1].karta==otocene[0].karta)
    {
        otocene = []
    }  
}
let otocene = []
let pole = []
for (let i = 0; i < pocetDvojic; i++) {
    pole.push(zalozKartu (i));
    pole.push(zalozKartu (i));
}

zamichejPole (pole)

el = document.getElementById('pexeso')

pole.forEach((karta) => {
    
    el.appendChild(karta.el)
    // el.innerHTML += karty[prvek].src + "<br>"
})
console.log('END')