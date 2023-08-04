// Helper function to format the comment date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  // Function to display the comments on the page
  function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';
  
    comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
  
      const namePara = document.createElement('p');
      namePara.textContent = `${comment.name} | ${formatDate(comment.date)}`;
  
      const commentPara = document.createElement('p');
      commentPara.textContent = comment.comment;
  
      commentDiv.appendChild(namePara);
      commentDiv.appendChild(commentPara);
      commentsContainer.appendChild(commentDiv);
    });
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const date = new Date().toISOString();
  
    const newComment = {
      name,
      comment,
      date,
    };
  
    // Save the comment to the backend (you can use AJAX to send it to the server)
  
    // For demonstration purposes, let's assume we're just storing comments in an array.
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
  
    // Display the updated comments
    displayComments(comments);
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
  }
  
  // Add event listener to the form
  document.getElementById('comment-form').addEventListener('submit', handleFormSubmit);
  
  // Initial display of comments (assuming you have already stored comments)
  const initialComments = JSON.parse(localStorage.getItem('comments') || '[]');
  displayComments(initialComments);
  