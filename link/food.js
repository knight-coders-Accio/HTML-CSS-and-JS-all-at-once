

let foodNames = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "ugli", "watermelon"];


let foodSection = document.querySelector("#food-section")

let count = 1
for(let t of foodNames){
    // console.log(t)
    let foodPara = document.createElement("p")
    foodPara.innerText = t
    foodPara.id = "food"+count++

    foodSection.append(foodPara) // adds at end 
    // foodSection.prepend(foodPara) // adds at start
}