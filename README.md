# Lecture W2D2

## Why Express?

### Without Express

Without Express we would have to code at a much lower level. For example, we would have to decode the request and extract the url pattern using some regex and if statements.

Express handle all the basic functionalities for us and make our life much easier.

You already experiment with node http module and it was way more work. [Node HTTP](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

### What is Express?

- Express is a Web framework for NodeJS
  - Routing
  - Layer on top of node HTTP server
  - Middleware
  - Template Engine(ejs)

## Resources

Resources for our movie quotes App

- quotes
- comments

## CRUD Operation

For each resource, we want to:

- create => creating a new resource
- read => getting a resource
- update => changing a resource
- delete => deleting a resource

## EJS

- We used `ejs` - embedded JavaScript - files to code the html
- ejs files will contain a mix of html and javaScript code
- javaScript code is wrapped in `<% %>` brackets
- ejs files must be located in the `views` folder
- We learned that ejs can only access data that is passed with the render method:

```
res.render('quotes', { quotes: movieQuotesDb, comments: quoteComments });
```

- In our ejs files, we then have access to quotes and comments like any variable. We can get the quotes info

```
<ul>
  <% for (var quoteId in quotes) { %>
    <li><%= quotes[quoteId].quote %></li>
      <ul>
      <% for (var commentId of quotes[quoteId].comments) { %>
        <li>

          <%= comments[commentId].comment %></li>

         <% } %>
      </ul>
  <% } %>
</ul>
```

### To run the app

- npm install
- npm run local
