const router = require('express').Router();

const answerRoutes = require('./answer.routes');
const storyRoutes = require('./story.routes');
const userRoutes = require('./user.routes');

router.use('/story', storyRoutes);
router.use('/user', userRoutes);
router.use('/answer', answerRoutes);

module.exports = router;
