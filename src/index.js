const express = require('express');
const app = express();
const port = 3000; // Specify the port number you want to use

// Add your routes and other server configurations here

// Serve static files from the 'public' folder
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
