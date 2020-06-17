const data = require('../data.json')



exports.list = function(req, res) {

  return res.render("recipes/list", {recipes: data.recipes})
}

exports.show = function(req, res) {
  
  const recipeIndex = req.params.index

  const recipe = recipes[recipeIndex]
  

  if (!recipe) { 
      
      return res.send("Recipe not found!")

  }

  return res.render("recipes/show", { recipe })
 

}
