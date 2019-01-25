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
  const createCommentEl = commentObj => {
    console.log(commentObj);
    // format of a comment object
    //  {
    //    id: <this is the id of the comment>
    //    comment: <this is the text of the comment>
    //  }

    const comment = $('<li>')
      .addClass('comment-item')
      .text(commentObj.comment);

    return comment;
  };

  const renderComments = commentsArr => {
    const ul = $('<ul>').addClass('comments-list');

    for (const commentObj of commentsArr) {
      const commentEl = createCommentEl(commentObj);
      ul.append(commentEl);
    }

    return ul;
  };

  const renderQuotes = quotesArr => {
    const ul = $('<ul>').addClass('quotes-list');
    for (const quoteObj of quotesArr) {
      const quoteEl = createQuoteEl(quoteObj);
      ul.append(quoteEl);
    }
    return ul;
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

    //creating the container
    const divContainer = $('<div>').addClass('quote-container');

    // creating the quote element
    const quoteItem = $('<li>')
      .addClass('quote-item')
      .text(quoteObj.quote);

    // Creating the comments

    // render comments

    const commentUl = renderComments(quoteObj.comments);

    divContainer.append(quoteItem);
    divContainer.append(commentUl);

    return divContainer;
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
      const quotesUl = renderQuotes(response);

      $('#quote-list').append(quotesUl);
    });
  };

  // create add quote form

  // when we need an id
  const generateRandomString = () => {
    return Math.random()
      .toString(36)
      .substring(7);
  };

  const createAddQuoteFrm = () => {
    return `<form method="post" action="/quotes">
      <div style="width: 20em;">
        <div class="form-group">
        <input style="width: 100%" type="text" name="quote" id="quote" placeholder="Please enter your quote">
        
        </div>

        <input type="submit" class="btn btn-primary" value="Add">
      </div>
    </form>`;
  };

  // catch the event on add quote btn

  $('#add-quote-btn').on('click', function(event) {
    // Display the add quote form inline

    const addQuoteFrm = createAddQuoteFrm();

    $('#quote-list').append(addQuoteFrm);
  });

  // catch the submit event on the add button >> event delegation!

  $('#quote-list').on('submit', 'form', function(event) {
    console.log('form Submit');
    event.preventDefault();

    // extracting the quote from the input box
    // const quoteContent = $(this).quote;
    const quoteContent = $('#quote').val();

    console.log(quoteContent);

    const quoteObj = {
      id: generateRandomString(),
      quote: quoteContent,
      comments: [],
    };

    // building the request properties
    const options = {
      url: `${ROOT_URL}/quotes`,
      method: 'POST',
      data: quoteObj,
    };

    // Make the add form disapper
    $(this).remove();

    // creating the quoteEl and adding to the page without reload
    const quoteEl = createQuoteEl(quoteObj);
    $('#quote-list').append(quoteEl);

    // Ajax request in the request fct at the top
    // sending to the backend to store it in the db
    request(options, function(response) {
      console.log(response);
    });
  });

  //> Ajax request to post '/quotes'

  //> Add new quote to page

  // get the list of quotes

  getQuotes();
}); // End Document Ready
