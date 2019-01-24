# Lecture W3D4

## Convert Quotes App to jQuery

- The backend needs to send back json instead of rendering pages

1. '/' -> create the barebone index.html in public folder
2. Convert all the routes

   a. '/quotes'

   - fct that lists of all the quotes containing comments
   - need to be an array of objects

3. Add app.js scripts to index.html

4. Display the list of quotes client side
   a. create Ajax call to '/quotes' to get the list of quotes
   b. create comment HTML element
   c. create quote HTML element
   d. render list of quotes to add to the page

5. Add Quote Client Side
   a. Send an Ajax request to the server to update the database
   b. Add the new quote client side

   i. Create an event handle for the button click
   ii. Add a form element under the add button
   iii. create on submit event handler \* need to user event delegation!!
   iV. Modify the post '/quotes' end point on the server
