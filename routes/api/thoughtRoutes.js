const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:userId').get(getSingleThought);

router.route('/:thoughtId/:thoughtText').put(updateThought)

module.exports = router;