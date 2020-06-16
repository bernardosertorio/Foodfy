const express = require("express")
const routes = express.Router()
const home = require('./controllers/homecontrollers')
const recipes = require('./controllers/recipescontrollers')
const adminrecipes = require('./controllers/adminrecipescontrollers')



// Home routes

routes.get("/home", home.list)
routes.get("/about", home.about)



// Recipes routes

routes.get("/recipes", recipes.list)
routes.get("/recipes/:id", recipes.show)



// Admin recipes routes

routes.get("/adminrecipes", adminrecipes.list)
routes.get("/create", adminrecipes.create)
routes.post("/create", adminrecipes.post)



module.exports = routes