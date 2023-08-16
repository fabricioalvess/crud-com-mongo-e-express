import produtos from "../models/Produto.js"
class ProdutoController{

    static obterPorid = (req,res)=>{
        const id = req.params.id
        produtos.findById(id,(err, produtos)=>{
            if(err){
                res.status(400).send({message:`${err.message} - id do produto nao encontrado`})
            }else{
                res.status(200).send(produtos)
            }
        })
    }
    static listarProduto = async(req,res)=>{
        
      /*   try{
            const listaProdutos = await produtos.find({})
            res.status(200).json(listaProdutos)
        }catch(err){
            res.status(500).json(err)
        } */
       produtos.find((err,produtos)=>{
        res.status(200).json(produtos)
       })
    }

    static cadastraProduto = async (req,res)=>{
        let produto = await new produtos(req.body)
        produto.save((err)=>{
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar produto`})
            }else{
                res.status(201).send( 'item adicionado')
            }
        })
    } 

    static atualizarProduto = (req,res)=>{
        const id = req.params.id
       produtos.findByIdAndUpdate(id,{$set:req.body},(err)=>{
            if(!err){
                res.status(200).send('mensagem atualizada')
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }

    static excluirProduto = (req,res)=>{
        const id = req.params.id
        produtos.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message:"Livro removido"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}
export default ProdutoController