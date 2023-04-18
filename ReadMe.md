## Description :
This is interface for the employees  to fill in the data into the database and then download it in CSV format.
## Tech Stack :
 Node.Js, Express , Mongo DB ,Css  and EJS template ,Passport Used for Authentication 

 ## For LocalSystem :
for this objective user can download the repository from git and 
then extract the folder and then type npm i to install Packages ,
then npm start command to run  .

### live: https://placement-cell-n141.onrender.com

## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

     Placement-Cell
        |------assets
        |         |---css
        |         |    |---addStudent.css
        |         |    |---employeeDashboard.css
        |         |    |---formForInterview.css
        |         |    |---interview.css
        |         |    |---layout.css
        |         |    |---placement.css
        |         |    |---result.css
        |         |    |---signIn.css
        |         |    |---signUp.css
        |         |
        |         |---image
        |              |---logo.png
        |------config
        |         |--- environment.js
        |         |--- flashMessage.js
        |         |--- mongoose.js
        |         |--- passport-local-strategy.js
        |             
        |------ controllers
        |         |--- employee.js
        |         |--- interview.js
        |         |--- job.js
        |         |--- result.js
        |         |--- student.js
        |
        |------ models
        |         |--- employee.js
        |         |--- interview.js
        |         |--- result.js
        |         |--- student.js
        |          
        |------ routers
        |         |--- employeedashboard.js
        |         |--- index.js
        |         |--- interview.js
        |         |--- job.js
        |         |--- result.js
        |
        |------ view
        |         |--- _header.ejs
        |         |--- addStudent.ejs
        |         |--- employeeDashboard.ejs
        |         |--- formForInterview.ejs
        |         |--- interview.ejs
        |         |--- layout.ejs
        |         |--- placment.ejs
        |         |--- result.ejs
        |         |--- signIn.ejs
        |         |--- signUp.ejs
        |         
        |------ .env
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

## Take A look :
This Project is hosted live at [Link](https://placement-cell-n141.onrender.com)
Git Hub [Link](https://github.com/Debajyoti-Shit/Placement-Cell)

