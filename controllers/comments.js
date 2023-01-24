const Comment = require('../models/Comment');
const Post = require('../models/Post');

module.exports = {
  createComment: async (req, res) => {
    console.log(req.user.userName);
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        user: req.user.id,
        userName: req.user.userName,
        post: req.params.id,
      });
      console.log('Comment has been added!');
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      // save post id
      let comment = await Comment.findById({ _id: req.params.id });
      // Delete post from db
      await Comment.deleteOne({ _id: req.params.id });
      console.log('Deleted Comment');
      res.redirect(`/post/${comment.post}`);
    } catch (err) {
      console.log(err);
    }
  },
};
