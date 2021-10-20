import express from 'express';

const app = express();

app.listen(4000, () => {
  console.log('🚀 Server is running on PORT 4000');
  console.log('Running on http://localhost:4000');
});
