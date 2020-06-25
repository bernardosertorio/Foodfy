const data = require('../data.json')


exports.list = function(req, res) {

  let recipesFiltered = []

  for (let i = 0; i < 6; i++) {

   recipesFiltered.push(data.recipes[i])
  
  }

  return res.render("home/index", {items: recipesFiltered})

} 


exports.about = function(req, res) {

  return res.render("home/about")

}


exports.show = function(req, res) {

  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe) {
    
    return recipe.id == id
  })

  if (!foundRecipe) return res.send("Recipe not found!")

  const recipe = {
    ...foundRecipe
  }

  return res.render("home/show", {recipe})
}
 