# Backend Step by Step

Steps:
- Create empty folder
- cd into folder
- Create package.json => `npm init -y`
- Check if nodemon is install `nodemon -v`
- If not: `sudo npm install -g nodemon`
- Create a backend starter file => `app.js / server.js`/ index.js`
- In Package.json => section scripts: Create a script to start your file with node 
  - Example: "dev": "nodemon app.js"
- Allow imports of libraries / packages using import:
  - state the prop "type": "module" in package.json
- Install express package: `npm i express`
- Setup Express app (see example code in app.js)
  - The express / backend server starts on a port with the listen() function
- Install the CORS package which allows accessing our routes from a frontend
  - `npm i cors`
- Import cors in the code: `import cors from cors`
- Activate cors in the code: `api.use(cors())` 
- Now the backend should be reachable from the frontend with fetch!
