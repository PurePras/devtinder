create a repository
initialize the repo
node_modules,package.json, package-lock.json
install express
create a server
listen to port 8888
write request handlers for /test,/hello
install nodemon and update scripts inside package.json
-g while npm i
diff between caret and tilde (^ vs ~)
initialize git
gitignore
create a remote repo on github
push all code to remote origin
play with routes and route extensions ex. /hello, /, hello/12, /xyz
order of routes matter a lot

write loigc to handle get,post,patch,dlt,on postman
 04 nov 2025
 explore routing and use of ?, +, (), * in the routes
 Use of regex in routes /a/ , /*fly$/
 Reading the query params in the routes
 Reading the dynamic routes

 Handling Multiple Route Handlers - Play with the code
 - next()
 next functin and error along with res.send();
 app.use("/route",rH,[rH2,rH3],rH4,rH5);

 what is a middleware
 why do we need it
 how express js basically handles request behind the scenes

 difference bw app.use and app.all
 write a dummy auth middleware for admin
 write a dummy auth middleware for all user route, except /user/login
