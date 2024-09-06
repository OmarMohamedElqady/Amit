const searchBox = document.querySelector('.searchBox')
const searchBtn = document.querySelector('.searchBtn')
const recipeContainer = document.querySelector('.recipe-container')
const recipeDetailsContent = document.querySelector('.recipe-details-content')
const recipeCloseBtn = document.querySelector('.recipe-close-btn') 



const fetchRecipes =async (query) => {
    recipeContainer.innerHTML = "<h2>Feching Recipes...</h2>"

    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const response = await data.json();

    recipeContainer.innerHTML = ""

    response.meals.forEach(meal =>{
        const recipeDiv = document.createElement('div')
        recipeDiv.classList.add('recipe')
        recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <h3>Belongs to <span>${meal.strCategory}</span> Category</h3>


        `
        const button = document.createElement('button')
        button.textContent = 'View Recipe'
        recipeDiv.appendChild(button)

        button.addEventListener('click', ()=> {
            openRecipePopup(meal);
        })

        recipeContainer.appendChild(recipeDiv)
    })
}


const fetchIngredients =(meal) => {
    let ingredientsList = "";
    for(let i = 1; i< 20; i++){
        const ingredient = meal[`strIngredients${i}`]
        if(ingredient) {
            const measure = meal[`strMeasure${i}`]
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }else {
            break
        }
    }
    return ingredientsList
    
}


const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredents:</h3>
    <ul class="ingredientsList">${fetchIngredients(meal)}</ul>
    <div>
    <h3>Instructions:</h3>
    <p class="recipeInstructions">${meal.strInstructions}</p>
    </div>
    `
    recipeDetailsContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener('click', ()=>{
    recipeDetailsContent.parentElement.style.display = "none"
})

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searcInput = searchBox.value.trim();
    fetchRecipes(searcInput);
    console.log('Button clicked')
})


////////////////////////////////
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  





