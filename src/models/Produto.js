import mongoose from "mongoose"
const produtoSchema = new mongoose.Schema(
    {
        id:{type:String},
        descricao:{type:String, required:true}
    }
)
const produtos = mongoose.model('produtos', produtoSchema)
export default produtos