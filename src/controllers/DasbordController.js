const crypto  = require("crypto");
const  connection = require("../database/connections");



module.exports = {

  async index(request, response){

    try{
      const projectos = await connection("projectos").select("*")

      return response.json(projectos)
    }catch{
      return response.status(401).json({ error: 'Operacao Recusada.' })
    }

  },

  async create(request, response){

    const {
      nome,
      edital,
      abertura,
      encerramento,
      progresso,
      pendecias,
      id
    } = request.body;

    try{
      const verficar = await connection("projectos").where({nome}).select("*")
      
      if(verficar.length >=1){

        return response.status(401).json({ error: 'Operacao Recusada.'})

      }
      const conta = await connection("projectos").insert({
        id,
        nome,
        edital,
        abertura,
        encerramento,
        progresso,
        pendecias,
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