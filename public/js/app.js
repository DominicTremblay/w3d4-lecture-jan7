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

  // create a single quote element
  //> renderComments

  const createQuoteEl = quoteObj => {
    // quoteObj has this format:
    // {
    // id: <the id of the quote>
    // quote: <the content of the quote
    // comments: // array of comments objects
    // }

    return `<div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="${
                quoteObj.id
              }" aria-expanded="false" aria-controls="collapseTwo">
                ${quoteObj.quote}  
              </button>
            </h5>

            <span>
              <form method="get" action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb"><input type="submit" class="btn btn-secondary btn-sm" value="Edit"></form>
              <form method="post" action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb?_method=DELETE"><input type="submit" class="btn btn-secondary btn-sm" value="Delete"></form>
            </span>

          </div>
          <div id="d9424e04-9df6-4b76-86cc-9069ca8ee4bb" class="collapse" aria-labelledby="headingTwo" data-parent="#quote-list">
            <div class="card-body">
              <h4>Comments</h4>

              <ul class="list-group">
                
                <li class="list-group-item">
                  So awesome comment! 
                  <span>
                    <form method="get" action="/comments/70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac/update"><input type="submit" class="btn btn-secondary btn-sm" value="Edit"></form>
                      <form method="post" action="/comments/70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac?_method=DELETE"><input type="submit" class="btn btn-secondary btn-sm" value="Delete"></form>
                    </span>
                </li>
                
              </ul>

              <a href="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb/comments/new" class="btn btn-info">Add Comment</a>
            </div>
          </div>
        </div>`;
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
      const quoteEl = createQuoteEl(response[0]);
      $('#quote-list').append(quoteEl);
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
