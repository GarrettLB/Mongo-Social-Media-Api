# Mongo-Social-Media-Api

# Description
Mongo-Social-Media provides a NoSql database for your social media platform.

### Key Features
* Add new users and thoughts.
* Individual users and thoughts can be called by Id.
* All entries in the database can be easily updated or deleted by Id.

* Thoughts use a "username" field to automatically link to a user.
* Each thought has a "reactions" property where reactions to the thought can be posted.
* Each thought has a "reactionCount" property that returns a count of how many reactions have been posted to the thought.

* Users have a friends list referencing other users.
* Each user has a "friendCount" property that returns a count of how many friends the user has.
* When a user is Deleted, all it's associated thoughts are also deleted.

# Technologies
* node.js
* express
* mongodb
* mongoose

# Installation and Use
* Download source code.
* Run "npm install" in the terminal.
* Make sure you're running MongoDB on your computer.
* Lastly, run "npm start" in your terminal to start the program.

If you'd like to see a walk-through video on how to use this program, click here: https://drive.google.com/file/d/1bkCVMH4lKXjEkIWDNPKzbX78Q1Rfj3Qq/view?usp=sharing

Screenshot:  
<img src="./assets/images/ScreenShot.png">
