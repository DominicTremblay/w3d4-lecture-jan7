$(document).ready(() => {
  const ROOT_URL = 'http://localhost:3000';

  const request = (options, cb) => {
    $.ajax(options)
      .done(result => cb(result))
      .fail(err => console.log('Error:', err))
      .always(() => console.log('Request completed'));
  };

  const renderComments = commentList => {
    let comments = '';
    for (const commentObj of commentList) {
      comments += `${createComment(commentObj)} \n`;
    }
    return comments;
  };

  const createComment = commentObj => {
    console.log('CommentObj', commentObj);
    return `<li class="list-group-item" data-item="${commentObj.id}">
        ${commentObj.comment}
          <span>
            <form>
              <input type="submit" class="btn btn-secondary btn-sm" value="Edit">
            </form>
            <form>
              <input type="submit" class="btn btn-secondary btn-sm" value="Delete">
            </form>
          </span>
      </li>`;
  };

  const createQuote = quoteObj => {
    const commentsEl = renderComments(quoteObj.comments);
    return `        
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#${quoteObj.id}"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                 ${quoteObj.quote}
              </button>
            </h5>

            <span>
              <form method="get" action="/quotes/${
                quoteObj.id
              }"><input type="submit" class="btn btn-secondary btn-sm" value="Edit"></form>
              <form method="post" action="/quotes/${
                quoteObj.id
              }?_method=DELETE"><input type="submit" class="btn btn-secondary btn-sm"
                  value="Delete"></form>
            </span>

          </div>
          <div
            id="${quoteObj.id}"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#quote-list"
          >
            <div class="card-body">
              <h4>Comments</h4>

              <ul class="list-group">
                ${commentsEl}
              </ul>

              <a href="/quotes/${
                quoteObj.id
              }/comments/new" class="btn btn-info">Add Comment</a>
            </div>
          </div>
        </div>
`;
  };

  const renderQuotes = quotesArr => {
    for (const quote of quotesArr) {
      $('#quote-list').append(createQuote(quote));
    }
  };

  const getQuotes = () => {
    const options = {
      method: 'GET',
      url: `${ROOT_URL}/quotes`,
      dataType: 'json',
    };

    request(options, quotes => {
      renderQuotes(quotes);
    });
  };

  getQuotes();
}); // End Document Ready
