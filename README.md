# Running the Server

This challenge will require you to setup and run the application in this repository.
See the assignment directions if you need a refresher on how to run this.

Challenge Overview
I created a new JSON data file and inside it you will find an array of objects. Each object, is each one of you!

AJAX Request

Your first task is to make an AJAX call from the client side app.js using the .ajax method. The AJAX call will be a GET request that accesses the /data URL. Upon success, it should bring the data back down.

On the DOM

On the DOM should be:

One person's information
A series of 17 (or the number of people in the data array) index points with the first person's index highlighted or called out in style differently than the others.
A 'Next' button and a 'Previous' button
Clicking on the Next button should navigate to the next person, clicking on the Previous button should navigate to the previous person. The highlighted index point should update also as you click through to other people.
Person Display

When a person is displayed, show their name, their Github link, and their piece of shoutout feedback. Only one person should be showcased at any given time.

You will need to combine everything you learned this week to accomplish this task, and each of the challenges you have completed this week play a part in this task.

Working Example

Here is a similar example from Zeta so you can see the functionality. It's really ugly, however. The code is also minified (no cheating!):

https://polar-ravine-37299.herokuapp.com/
