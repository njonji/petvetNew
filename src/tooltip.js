
class Tooltip {
    constructor(element){
        this.element = element
        this.message= element.getAttribute("data-message")
    }
    init() {
        const tip = document.createElement("div")
        tip.classList.add("tip")
        tip.textContent = this.message
        this.element.appendChild(tip)

        this.element.addEventListener("mouseenter", () => {
            tip.classList.add("active")
        })
        this.element.addEventListener("mouseleave", () => {
            tip.classList.remove("active")
        })

    }
}



const addTooltips = () => {
    const kooltips = document.querySelectorAll("a.kooltip")
    kooltips.forEach(kooltip => {
       const tip = new Tooltip(kooltip)  
       tip.init()
    }) 
}

addTooltips() 


const radno = document.querySelector("a.radno")
const vrijeme = document.querySelector(".home__vrijeme")

const fadeOut= () => {
    vrijeme.classList.add("d-none")
}

radno.addEventListener("mouseenter", () => {
    vrijeme.classList.remove("d-none")
    vrijeme.classList.remove("home__vrijeme--fade")

})

radno.addEventListener("mouseleave", () => {
    vrijeme.classList.add("home__vrijeme--fade")
    setTimeout(fadeOut, 500)
}) 







