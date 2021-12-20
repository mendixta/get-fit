# Fitness Tracker 

# Summary: 
For this weeks assignment, we were asked to create a full functioning Fitness Tracker that allows a user to: 
* view, create, and track daily workouts
* log multiple exercises in a workout on a given day
* be able to track the name, type, weight, sets, reps, and duration of the exercise.
* if the exercise is a cadrio excercise, then the distance traveled should be able to be tracked as well
We were already provided with the front end code and it was up to us to create Mongo Database with a Mongoose Schema, along with Routes using Express. 

The final result was this: https://track-the-fit.herokuapp.com/

# How To Run Fitness Tracker:
The following commands should be used after cloning the app: 
* npm i: After successfully installing the needed node_modules to run the app, then the command
* "node server.js" should be used to start the app, a message on the command line should appear that the Fitness Tracker is running on PORT!

# Issues Along the Way: 
One of the problems along the way while getting the Fitness Tracker to work, was getting any stats to display on the dashboard, as well as getting a valid date and workout duration to diplay on the main page / index page.

Going into the "workout.js" file, the property "date" was changed to "day", which not only fixed the issue of the date not displaying in the fitness tracker's index, but it also fixed the Dashboard issue, which began to display workout data!

The only issue I could not solve was getting the "continue workout" button to work, when I would go into the index.html to change the path, the whole app would stop working. This is an issue I look to fix in the future.

# Final Screenshots: 

<img src= '/screenshots/homePage.png'>

<img src= '/screenshots/dashboard.png'>

# Gif:
![app](https://user-images.githubusercontent.com/87496972/146713346-7e1d7a05-9fff-40a6-ba39-088a9f8aa640.gif)
