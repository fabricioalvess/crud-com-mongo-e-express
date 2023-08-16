import express from "express"
import ProdutoController from "../controller/produtoController.js"
const router = express.Router()
router
    .get('/produtos', ProdutoController.listarProduto)
    .get('/produtos/:id',ProdutoController.obterPorid)
    .post('/produtos',ProdutoController.cadastraProduto)
    .put('/produtos/:id',ProdutoController.atualizarProduto)
    .delete('/produtos/:id', ProdutoController.excluirProduto)
export default router