import mongoose from "mongoose"
mongoose.connect("mongodb+srv://fabricio:Alqaed4_01@produtocrud.4j5lfh0.mongodb.net/produto_crud")
let db = mongoose.connection
export default db