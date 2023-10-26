const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');
// ==> Definindo as rotas do CRUD - 'Product':
// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/cad-paciente', productController.createProduct);
router.get('/listPaciente', productController.listAllProducts);
router.get('/list-paciente/:id', productController.findProductById);
router.put('/put-paciente/:nome', productController.updateProductById);
router.delete('/del-paciente/:id', productController.deleteProductById);

router.post('/cad-paciente2', productController.createProduct2);
router.get('/listPaciente2', productController.listAllProducts2);
router.get('/list-paciente2/:id', productController.findProductById2);
router.put('/put-paciente2/:id', productController.updateProductById2);
router.delete('/del-paciente2/:id', productController.deleteProductById2);

module.exports = router;