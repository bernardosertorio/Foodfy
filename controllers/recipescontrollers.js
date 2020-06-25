const data = require('../data.json')



exports.list = function(req, res) {

  return res.render("recipes/list", {recipes: data.recipes})
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
  
  return res.render("recipes/show", {recipe})
  
}
