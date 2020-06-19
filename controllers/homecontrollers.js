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
  
  const recipeIndex = req.params.index

  const recipe = recipes[recipeIndex]
  

  if (!recipe) { 
      
      return res.send("Recipe not found!")

  }

  return res.render("/home/show", { recipe })
 

}
 