/*
    Author : Heris
    This is the JavaScript for our page about dogs.
*/

//variables
const breedListUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("breed-list");

//when the page loads
window.addEventListener("load", updateBreedList);

//retrieve the list of all breeds from API
async function getBreedList(){
    return fetch(breedListUrl).then(response => response.json());
}

//add breed to drop downlist
function updateBreedList(){
    getBreedList().then(function(data){
        //get each breed name
        for(element in data.message){
            //append to the select list
            let option = createOption(element);
            breedList.appendChild(option);
        }
    }
    
    )
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}
