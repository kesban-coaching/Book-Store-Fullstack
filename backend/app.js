import express from 'express';
import cors from 'cors'
console.log("My backend")

// backend = api
const api = express()

// register CORS in API => allows a frontend to access our routes data
api.use(cors())

// possible routes
// GET => for getting data
// POST => for receiving NEW data => for storage
// PATCH / PUT => for updating data
// DELETE => for deleting data

// HOME ROUTE
api.get("/", (request, response) => {
  response.send("<h2>Hallo. Home Route von API</h2>")
})

// BOOKS ROUTE
api.get("/books", (request, response) => {
  response.send([
    { id: 1, title: "JS for Dummies", author: "Richard Warna" },
    { id: 2, title: "The Notebook", author: "Unknown Author" },
    { id: 3, title: "Bla", author: "Blub Blub" },
  ]);
})

// start backend server and keep the server up
api.listen(5000, () => {
  console.log("Server started on", "http://localhost:5000")
})