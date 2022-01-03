const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:userId').get(getSingleThought);

router.route('/:thoughtId/:thoughtText').put(updateThought);

router.route('/thoughtId').delete(deleteThought)

module.exports = router;