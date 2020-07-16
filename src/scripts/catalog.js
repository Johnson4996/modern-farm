export const Catalog = (harvestedArr) =>{

    const container = document.querySelector(".container")
    harvestedArr.forEach(food => {
        container.innerHTML +=`
        <section class ="plant">${food.type}</section>
        `
    });


}