//Searchbar Javascript
function searchCar()
{
const searchInput = document.getElementById('search-input');
searchInput.addEventListener("input", i => {
    const value = i.target.value.toLowerCase();
    console.log (value);
    carsData.forEach(car => {
        const filter = car.name.toLowerCase().includes(value);
        console.log(car.make, filter);
        let carCard = document.getElementById(car.make);
        carCard.classList.toggle("d-none", !filter);
    })})
}