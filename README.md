levels beyond project
=====================


##backend/


Contains all project files related to the Backend project.

Contents
--------

####Notes/

* Folder for nodejs project.
* Contains all necessary files and libraries.

####notes.sql

* sql script for creating necessary database and table.



##frontend/

Contains all files related to the Front End project.

Contents
--------

####front_end.html

* Html script for displaying issues relevant to project.

####js/

* Folder contain extra script for pagination.



Instructions
============

Backend
-------

* Run the script notes.sql in MySQL.
* Make sure Nodejs is installed on your machine. Visit this link for instructions on how to download and install nodejs on your platform. https://nodejs.org/en/download/
* Edit the file backend/Notes/routes/notes.js specfically the fields for host, user, and password for your MySQL instance.
~~~~
var connection = mysql.createConnection({
    host : 'localhost',
    user : '',
    password : '',
    database : 'levels_beyond_db'
});
~~~~
* Using a terminal, change directory to backend/Notes and run the command `npm start`
* By default nodejs will run at http://localhost:3000
* The url for the notes api will now be live at http://localhost:3000/api/notes


Front End
---------

* Move the file front_end.html and the folder js to a folder accessible over the web on your machine. Make sure both are at the same level.
* Access the file front_end.html from browser to begin testing the front end project.

