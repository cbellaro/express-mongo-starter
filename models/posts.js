const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    chapters: {type: String, required: true},
    body: String
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
