# Event Planner 

Description 
-----------
A simple javascript web app that allows users to add upcoming events and to check the forecast in their local area. 

QuickStart
----------
* `git clone https://github.com/CazaBelle/event-planner-js`
* `cd event-planner-js`
* `open index.html` #events entered will persist in local storage
* Alternatively, [click here](fantastic-reaction.surge.sh) to visit surge deployment

User Stories
------------
The app was built to satisfy the following user stories:

```
As a user 
To be able to keep track of upcoming events 
I want to be able to add events to my board with a date and description

As a user 
To ensure I don't miss any upcoming events
I only want to see upcoming events in chronological order

As a user 
So I know what to wear
I want to be able to enter my city and see the forecast

As a user 
To keep my browser neat 
I only want to see the first 20 characters of my event

As a developer 
To ensure a quick user experience
I want the events to be stored in local storage on the browser

As a developer 
So that the mases have access to my app 
It will be deployed
```

Project Requirements
--------------------
* I want to be able to see a list of events with their date and text
* I want to be able to create an event by entering an date and time in a datetime input and text in a text input field, click a submit button and see the event in the list
* I want to only see upcoming events
* I want to see the events in chronological order
* I want to be able to enter my city in a text input field, then click on a button and see the weather forecast for today in my city.
* I want to store the events and location locally on the browser so they don't disappear everytime I reload the page
* In order for others to use the app, it should be deployed

*Tips:*
Weather:
- Use https://openweathermap.org/api to get data about the weather
- Follow the instructions in their "How to Start" section to start using the API
- To send a request to the API in Javascript, look up `XMLHttpRequest`

Persistent data:
- Look up `LocalStorage`

Deploying the app:
- Look up surge.sh

Latest requirements for the app:
- I want to be able to see an abbreviated 20 characters of the event

Testing
-------
* Done on a simple testing framework that I created 
* `open tester/runner/TestRunner.html` #run test suite

Demo
----
![Demo Pic](images/event-planner-js.png)

Deployment instructions
-----------------------
To deploy the project on surge: 
* Ensure have an updated version of [Node](https://nodejs.org/en/)
* `npm install --global surge` #installs surge
* Navigate into project path 
* `surge` #login or signup with email and password
* Visit the domain path surge deploy

Future Extensions
-----------------
* Click on the event text and see the entire event content at its own URL and way back to the homepage from here
* A "find my location" button, which will ask the browser for the users location and automatically fetch the weather at that location
* Events in 3 sections, for today, tomorrow and later dates. If there are no events in these sections, it will say "No events".