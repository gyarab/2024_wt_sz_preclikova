console.log('END')

let karty = [
    {
        src: "https://placecats.com/neo_banana/100/100"
    },
    {
       src:"https://placecats.com/neo_2/100/100" 
    },
    {
        src:"https://placecats.com/millie_neo/100/100"
    }
]

let pole = [0,1,2,1,2,0]

el = document.getElementById('pexeso')

pole.forEach((prvek) => {
    const karta = document.createElement('img')
        karta.src = karty[prvek].src
        el.appendChild(karta)
    // el.innerHTML += karty[prvek].src + "<br>"
})
console.log('END')