const router = require('express').Router()

const Post = require('../models/posts.js')
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

// index
router.get('/', (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.render('index.ejs', {
            posts: allPosts
            ,currentUser: req.session.currentUser
        })
    })
})

// New
router.get('/new', isAuthenticated, (req, res) => {
  res.render(
    'new.ejs'
    , {currentUser: req.session.currentUser}
  )
})

// Show
router.get('/:id', (req, res) => {
  if (req.session.currentUser) {
    Post.findById(req.params.id, (err, foundPost) => {
      res.render('show.ejs', {
        post: foundPost,
        currentUser: req.session.currentUser
      })
    })
  } else {
    res.redirect('/sessions/new')
  }
})

// Edit
router.get('/:id/edit', isAuthenticated, (req, res) => {
  Post.findById(req.params.id, (err, foundPost) => {
    res.render('edit.ejs', {
      post: foundPost
      ,currentUser: req.session.currentUser
    })
  })
})

// Create
router.post('/', isAuthenticated, (req, res)=>{
    Post.create(req.body, (err, createdPost) => {
        res.redirect('/posts')
    })
});

// Update
router.put('/:id', isAuthenticated, (req, res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost)=>{
        res.redirect(`/posts/${req.params.id}`)
    });
});

// Delete
router.delete('/:id', isAuthenticated, (req, res)=>{
    Post.findByIdAndRemove(req.params.id, (err, deletedPost)=>{
        res.redirect('/');
    });
});

// Drop DB Route
router.get(
  '/dropdatabase/cannotundo/areyoursure/reallysure/ok',
  (req, res) => {
    Posts.collection.drop()
    res.send('You dropped the database.')
  }
)

module.exports = router
