const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


//Rutas exigidas para la creación del CRUD
router.get('/movies/add', moviesController.add);
router.post('', moviesController.create);
router.get('/movies/edit:id', moviesController.edit);
router.post('', moviesController.update);
router.get('', moviesController.delete);
router.post('', moviesController.destroy);

module.exports = router;