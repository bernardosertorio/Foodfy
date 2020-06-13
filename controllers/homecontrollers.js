const data = require('../data.json')


exports.list = function(req, res) {

  let recipesFiltered = []

  for (let i = 0; i < 6; i++) {

   recipesFiltered.push(data[i])

  }

  return res.render("home/index", {recipesFiltered})

} 


 
exports.about = function(req, res) {

  return res.render("home/about")

}