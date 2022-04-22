const router = require('express').Router();
//const courseRoutes = require('./courseRoutes');
//const studentRoutes = require('./studentRoutes');
const userRoutes = require('./userRoutes');

//router.use('/courses', courseRoutes);
//router.use('/students', studentRoutes);
router.use('/user', userRoutes);

module.exports = router
