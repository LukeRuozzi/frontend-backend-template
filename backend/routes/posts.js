const express = require('express');
const router = express.Router();

const posts = [
  { id: 45, title: 'My First Post', content: 'bla bla bla', userId: 1 },
  {
    id: 23,
    title: "Angular 14: What's New!",
    content: 'bla bla bla',
    userId: 3,
  },
];

router.get('/', (req, res) => {
  res.json(posts);
});

router.post('/', (req, res) => {
  posts.push({ title: req.body.title, content: req.body.content });
  res.status(201).json({ msg: 'Created' });
});

module.exports = router;
