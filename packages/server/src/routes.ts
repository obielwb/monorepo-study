import express from 'express'

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
}); 

routes.post('/posts', (req, res) => {
  return res.json({ message: 'New Post' });
});

export default routes;