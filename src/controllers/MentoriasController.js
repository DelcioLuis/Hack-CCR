const crypto  = require("crypto");
const  connection = require("../database/connections");



module.exports = {

  async index(request, response){

    try{
      const mentorias = await connection("mentorias").select("*")

      return response.json(mentorias)
    }catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }

  },

  async create(request, response){

    const {
      nome,
      profissao,
      sector,
      id,
      
    } = request.body;

    try{
      const verficar = await connection("mentorias").where({nome}).select("*")
      
      if(verficar.length >=1){

        return response.status(401).json({ error: 'Operacao Recusada.'})

      }
      const conta = await connection("mentorias").insert({
        id,
        nome,
        profissao,
        sector,
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