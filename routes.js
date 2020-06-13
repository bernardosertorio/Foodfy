const express = require("express")
const routes = express.Router()
const home = require('./controllers/homecontrollers')
const recipes = require('./controllers/recipescontrollers')
const newrecipe = require('./controllers/newrecipecontrollers')



// Home routes

routes.get("/home", home.list)
routes.get("/about", home.about)



// Recipes routes

routes.get("/recipes", recipes.list)
routes.get("/recipes", recipes.details)



// Create New recipe routes

routes.get("/newrecipe", newrecipe.list)
routes.get("/create", newrecipe.create)
routes.post("/create", newrecipe.post)



module.exports = routes