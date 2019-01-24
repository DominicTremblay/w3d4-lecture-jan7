$(document).ready(() => {
  const ROOT_URL = 'http://localhost:3000';

  // create a reusable ajax request
  const request = (options, cb) => {
    $.ajax(options)
      .done(response => {
        // dealing with the response from the server
        cb(response);
      })
      .fail(err => {
        console.log('Error: ', err);
      })
      .always(() => {
        console.log('Request completed.');
      });
  };

  // render a list of comments

  // create a single comment element from a comment obj
  const createComment = commentObj => {
    // format of a comment object
    //  {
    //    id: <this is the id of the comment>
    //    comment: <this is the text of the comment>
    //  }
  };

  // create a single quote element
  //> renderComments
  const createQuoteEl = quoteObj => {
    // quoteObj has this format:
    // {
    // id: <the id of the quote>
    // quote: <the content of the quote
    // comments: // array of comments objects
    // }
  };

  // render the list of quotes to add them to the page

  // get quotes ajax request

  const getQuotes = () => {
    const options = {
      url: `${ROOT_URL}/quotes`,
      method: 'GET',
      dataType: 'json',
    };

    request(options, response => {
      console.log(response);
    });
  };

  // create add quote form

  // when we need an id
  const generateRandomString = () => {
    return Math.random()
      .toString(36)
      .substring(7);
  };

  // catch the event on add quote btn

  // catch the submit event on the add button >> event delegation!

  //> Ajax request to post '/quotes'

  //> Add new quote to page

  // get the list of quotes

  getQuotes();
}); // End Document Ready
