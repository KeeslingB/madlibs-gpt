const router = require('express').Router();

const storyRoutes = require('./story.routes');
const userRoutes = require('./user.routes');
const commentRoutes = require('./comment.routes')

router.use('/story', storyRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes)

module.exports = router;
