const router = require('express').Router();

const storyRoutes = require('./story.routes');
const userRoutes = require('./user.routes');

router.use('/story', storyRoutes);
router.use('/user', userRoutes);

module.exports = router;
