# Event Planner 

## Description 

## Requirements
- Work in pairs
- Use your testing frameworks
- Work towards the following requirements

*Event Planner Requirements*  :calendar:

- I want to be able to see a list of events with their date and text
- I want to be able to create an event by entering an date and time in a datetime input and text in a text input field, click a submit button and see the event in the list
- I want to only see upcoming events
- I want to see the events in chronological order

- I want to be able to enter my city in a text input field, then click on a button and see the weather forecast for today in my city.

- I want to store the events and location locally on the browser so they don't disappear everytime I reload the page

- In order for others to use the app, it should be deployed

The thread contains tips for each of these features. Only click through if you don't know where to start with them. (edited)

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
- I want to be able to click on the event text and see the entire event content at its own URL. From there, I should have some way of going back to the main page.
- I want a "find my location" button, which will ask the browser for my location and automatically fetch the weather at that location
- I want to see the events in 3 sections, for today, tomorrow and later dates. If there are no events in these sections, they should say something like "No events".

Bonus:
- Make it look as good as possible!