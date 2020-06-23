const express = require("express")
const routes = express.Router()
const home = require('./controllers/homecontrollers')
const recipes = require('./controllers/recipescontrollers')
const adminrecipes = require('./controllers/adminrecipescontrollers')



// Home routes

routes.get("/home", home.list)
routes.get("/about", home.about)
routes.get("/home:index", home.show)



// Recipes routes

routes.get("/recipes", recipes.list)
routes.get("/recipes/:index", recipes.show)



// Admin recipes routes

routes.get("/adminrecipes", adminrecipes.list)
routes.get("/create", adminrecipes.create)
routes.post("/create", adminrecipes.post)
routes.get("/adminrecipes/:id", adminrecipes.show)
routes.get("/adminrecipes/:id/edit", adminrecipes.edit)
routes.put("/adminrecipes", adminrecipes.put)


module.exports = routes