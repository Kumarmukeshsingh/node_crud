express js user registation project  
clone this repositry and user this project for learning purpuse.

 got to terminal and type....
  cmd  :- git clone git@github.com:Kumarmukeshsingh/node_crud.git

 open repositry in visual studio code editer
 cmd :-  npm init -y  ( buid the package.json file )

 check package alrady installed or not if not install package thn install the below package.
 
  "dependencies": {
    "body-parser": "^1.20.3",
    "express": "^4.21.1",
    "mongoose": "^8.8.3",
    "nodemon": "^3.1.7"
  }
  
   for example cmd :- npm install <package name>
   


   connect mongodb no-sql database
   download and  install mongodb compass in your local system .

   open power shell in windows opreating syatem  
   cmd :- mongo      
   this command check the mongodb version like  this  " MongoDB shell version v5.0.20 "
   cmd :- mongod     
   this command start the mongodb server 
   cmd :- mongo 
  this command  connect the mongodb server
   " connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb "    


after that aging start the express js server
cmd :- node index.js 
output 
 : server is running at  https://localhost:4000
 : mongodb connected 



postman

open postman 
 New request 

 
  POST: https://localhost:4000/users
  for create the user 
  response{}
  
  GET: https://localhost:4000/users
  get all all  from the mongodb database
  response{}
  
  PUT :  https://localhost:4000/users/:id
  update the userr in database
  rsponse{}
  
  DELETE: https://localhost:4000/users/:id
  delete the user 
response{
  
}




check in mongodb compass 
all user avalible in the data base 


..................learn again and again and improve yourself......................
  

   
   
                    

   

  
 


