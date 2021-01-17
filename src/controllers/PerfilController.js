const crypto  = require("crypto");
const  connection = require("../database/connections");



module.exports = {

  async index(request, response){
    

    try{}catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }

  },

  async create(request, response){
        
    const {
      nome,
      nascimento,
      genero,
      uf,
      cidade,
      prodcultural,
      telefone,
      email,
      senha,
    } = request.body;

    const id = crypto.randomBytes(9).toString("HEX");

    try{
      const verficar = await connection("perfil").where({email}).select("*")
      
      if(verficar.length >=1){

        return response.status(401).json({ error: 'Operacao Recusada.'})

      }
      const conta = await connection("perfil").insert({
        id,
        nome,
        nascimento,
        genero,
        uf,
        cidade,
        prodcultural,
        telefone,
        email,
        senha,
      })
      return response.json(id)
      
    }catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }
  },


  async delete(request, response) {

    const { id } = request.params
    try{}catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }
  },
    
  async atualiza(request, response) {

    const { id } = request.params
    try{}catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }
  },

  
};