$(document).ready(() => {
  const ROOT_URL = 'http://localhost:3000';

  // create a reusable ajax request

  // render a list of comments

  // create a single comment element from a comment obj
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

  // create a single quote
  //> renderComments

  // render the list of quotes to add them to the page

  // get quotes ajax request

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
}); // End Document Ready
